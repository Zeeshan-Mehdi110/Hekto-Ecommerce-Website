import axios from "axios";
import { connect, useDispatch } from "react-redux";
import { showError, showSuccess } from "../../store/actions/alertActions";
import { Avatar, Box, Button, Typography } from "@mui/material";
import { Field, Form } from "react-final-form";
import TextInput from "../library/TextInput";
import FileInput from "../library/FileInput";
import { deepOrange } from "@mui/material/colors";
import {
  hideProgressBar,
  showProgressBar,
} from "../../store/actions/progressActions";

const Profile = ({ user, loading }) => {
  const dispatch = useDispatch();
  return (
    <Box>
      <Avatar
        sx={{
          height: "100px",
          width: "100px",
          bgcolor: deepOrange[500],
          fontSize: "30px",
        }}
      >
        {user.name.slice(0, 1)}
      </Avatar>
      <Typography textAlign={"start"} variant="h6" fontWeight={"bold"} pb={2}>
        {user.name}
      </Typography>
      <Box
        textAlign={"center"}
        sx={{ width: { sm: "100%", md: "50%" }, mx: "auto" }}
      >
        <Typography
          textAlign={"center"}
          variant="h5"
          fontWeight={"bold"}
          pb={2}
        >
          Profile Setting
        </Typography>
        <Form
          onSubmit={(data) => {
            dispatch(showProgressBar());
            return axios
              .postForm("api/users/profile-update", data)
              .then(({ data }) => {
                if (data.user) {
                  dispatch(
                    showSuccess("Account settings updated successfully")
                  );
                }
                dispatch(hideProgressBar());
              })
              .catch((err) => {
                let message =
                  err && err.response && err.response.data
                    ? err.response.data.error
                    : err.message;
                dispatch(showError(message));
                dispatch(hideProgressBar());
              });
          }}
          validate={(data) => {
            const errors = {};
            if (!data.name) {
              errors.name = "Name is required";
            }
            if (data.newPassword) {
              if (!data.currentPassword) {
                errors.currentPassword = "Current password  is required";
              }
              if (data.newPassword < 6)
                errors.newPassword =
                  "New password must be at least 6 characters long";
              if (!data.confirmPassword)
                errors.confirmPassword = "Confirm password is required";
              else if (data.newPassword !== data.confirmPassword) {
                errors.confirmPassword = "Password are not same";
              }
            }
            return errors;
          }}
          initialValues={{
            name: user.name,
            email: user.email,
            phoneNumber: user.phone_number,
          }}
        >
          {(props) => {
            const { invalid } = props;
            return (
              <form onSubmit={props.handleSubmit}>
                <Field
                  name="name"
                  type="text"
                  component={TextInput}
                  placeholder="Enter your Name"
                />
                <Field
                  name="email"
                  type="email"
                  disabled
                  component={TextInput}
                  placeholder="Enter email address"
                />
                <Field
                  name="phoneNumber"
                  type="text"
                  component={TextInput}
                  placeholder="Enter phone number"
                />
                <Field
                  name="profilePicture"
                  type="file"
                  component={FileInput}
                  inputProps={{ accept: "image/*" }}
                />
                <Field
                  name="currentPassword"
                  type="password"
                  component={TextInput}
                  placeholder="Enter current password ..."
                />
                <Field
                  name="newPassword"
                  type="password"
                  component={TextInput}
                  placeholder="Enter new password"
                />
                <Field
                  name="confirmPassword"
                  type="password"
                  component={TextInput}
                  placeholder="Enter confirm password ..."
                />
                <Button type="submit" variant="outlined" disabled={invalid}>
                  Update
                </Button>
              </form>
            );
          }}
        </Form>
      </Box>
    </Box>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.auth.user,
    loading: state.progressBar.loading,
  };
};
export default connect(mapStateToProps)(Profile);
