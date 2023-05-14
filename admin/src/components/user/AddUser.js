import { Form, Field } from "react-final-form";
import { Button, CircularProgress, Alert } from "@mui/material";
import { Box } from "@mui/system";
import { AddCircleOutline } from "@mui/icons-material";
import axios from "axios";
import { FORM_ERROR } from "final-form";
import { useNavigate } from "react-router-dom";
import TextInput from "../library/TextInput";
import SelectInput from "../library/SelectInput";
import { showError } from "../../store/actions/alertActions";
import { useDispatch } from "react-redux";
import { userActionTypes } from "../../store/actions/userActions";

function AddUser() {
  const dispatch = useDispatch()
  const navigate = useNavigate();

  const validate = (data) => {
    const errors = {};
    if (!data.name)
      errors.name = "name is Required";
    else if (data.name.length < 3)
      errors.name = "Name Should be more then 3 Char";
    if (!data.email) {
      errors.email = 'Email Address is required';
    }
    else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(data.email)) {
      errors.email = 'Email Address is invalid';
    }
    if (!data.phone_number)
    errors.phone_number = "Mobile is Required";
  else if (data.phone_number.length < 11)
    errors.phone_number = "phone_number is too short";
    if (!data.password) {
      errors.password = 'password  is required';
    }
    else if (data.password.length < 6)
    errors.password = "password must be at least 6";
    if(!data.type)
    errors.type = "please select a type";
    return errors
  };

  const handleAddUser = async (data, form) => {
    try {
      let result = await axios.post( "/users/add", data );
      dispatch({ type : userActionTypes.ADD_USER, payload : result.data.user });
      const fields = form.getRegisteredFields(); // Get all the registered field names
      fields.forEach((field) => {
        form.resetFieldState(field); // Reset the touched state for each field
        form.change(field, null); // Reset the value of each field to null
      });
      navigate("/admin/users");
    } catch (err) {
      let message = err && err.response && err.response.data ? err.response.data.error : err.message;
      dispatch(showError(message))
    }

  };


  return (
    <Box textAlign="center" maxWidth="500px" mx="auto">
      <Form
        onSubmit={handleAddUser}
        validate={validate}
        initialValues={{}}
        render={({
          handleSubmit,
          submitting,
          submitError,
          submitSucceeded,
          invalid,
        }) => (
          <form onSubmit={handleSubmit} method="post" encType="multipart/form-data">
            <Field component={TextInput} type='text' name="name" placeholder="Enter Name" label="Name" />
            <Field component={TextInput} type='email' name="email" placeholder="User Email" label="Email" />
            <Field component={TextInput} type='number' name="phone_number" placeholder="Phone Number" label="Phone Number" />
            <Field component={TextInput} type='password' name="password" placeholder="*****" label="Password" />
            <Field component={SelectInput} name="type" label="Type" options={[{ label: "Select user type", value: ' ' }, { label: "Super Admin", value: process.env.REACT_APP_USER_TYPE_SUPERADMIN }, { label: "Admin", value: process.env.REACT_APP_USER_TYPE_ADMIN }, { label: "Standard", value: process.env.REACT_APP_USER_TYPE_STANDARD }]} />

            {submitting ? (
              <CircularProgress />
            ) : (
              <Button
                sx={{ marginTop: '20px' }}
                variant="contained"
                color="success"
                startIcon={<AddCircleOutline />}
                type="submit"
                fullWidth
                disabled={submitting || submitting}
              >
                Add User
              </Button>
            )}
            {submitError && typeof submitError === 'string' && (
              <Box mt={2}><Alert severity="error">{submitError}</Alert></Box>
            )}

            {submitError && Array.isArray(submitError) && (
              <Box mt={2}>
                {submitError.map((error, index) => (
                  <Alert key={index} severity="error">{error}</Alert>
                ))}
              </Box>
            )}
            <Box mt={2}>
              {/* {error && <Alert severity="error">{error}</Alert>} */}
            </Box>
            <Box mt={2}>
              {submitSucceeded && !submitting && (
                <Alert color="success">User Added Successfully</Alert>
              )}
            </Box>
          </form>
        )}
      />
    </Box>
  );
}

export default AddUser;
