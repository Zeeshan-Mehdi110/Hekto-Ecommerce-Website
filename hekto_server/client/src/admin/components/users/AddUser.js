import { Form, Field } from "react-final-form";
import { Button, Box, Grid, Typography, Alert, LinearProgress } from "@mui/material";
import axios from "axios";
import { FORM_ERROR } from "final-form";
import { globalStyles } from "../../../globalStyle";
import TextInput from "../../../components/common/text-field/TextInput";



function AddUser() {

  const handleSubmit = (data, form) => {
    const fields = form.getRegisteredFields(); // Get all the registered field names
    fields.forEach((field) => {
      form.resetFieldState(field); // Reset the touched state for each field
      form.change(field, null); // Reset the value of each field to null
    });
    // form.reset();
  };


  return (

    <Form
      onSubmit={(data, form) => {
        return (
          axios.post("http://localhost:5000/users/add", data)
            .then(result => {
              console.log(result)
            })
            .catch(err => {
              return { [FORM_ERROR]: err.message }
            })
        )
      }}
      validate={(data) => {
        const errors = {};

        if (!data.name)
          errors.name = "";
        else if (data.name.length < 3)
          errors.name = "Name Should be more then 3 Char";
        if (!data.email) errors.email = "Please Enter Email";
        if (!data.password) errors.password = "";
        else if (data.password.length < 6) errors.message = "Password must be at least 6 characters long!"
        return errors
      }
      }
      initialValues={{
        name: "",
        email: "",
        phoneNumber: "",
        password: "",
      }}
    >
      {
        prop => {
          const { submitSucceeded, submitError, submitting, invalid, errors } = prop;

          return (
            <form
              className='formBody'
              onSubmit={prop.handleSubmit} >
              <Box display={"flex"} justifyContent={"center"} flexDirection={"column"} >
                <Box boxShadow='5px 5px 25px 5px #F8F8FB' p={3} width={"600px"} marginX={"auto"} >
                  <Typography textAlign={"center"} variant="h4" mb={2} fontWeight={"bold"} fontFamily={"var(--josefin)"} >Add User</Typography>
                  <Field component={TextInput} type='text' name="name" placeholder="Enter Name" label="Name" />
                  <Box>
                    {errors.name &&<Alert severity="error">{errors.name}</Alert>}
                  </Box>
                  <Field component={TextInput} type='email' name="email" placeholder="User Email" label="Email" />
                  <Field component={TextInput} type='number' name="phone_number" placeholder="Phone Number" label="Phone Number" />
                  <Field component={TextInput} type='password' name="password" placeholder="******" label="Password" />
                  <Box>
                    {errors.password &&<Alert severity="error">{errors.password}</Alert>}
                  </Box>
                  <Box textAlign={"center"} >
                  <Button style={{ ...globalStyles.Btn, padding: "12px 45px" }} variant='contained' type='submit' disabled={invalid || submitting}>Submit</Button>
                  </Box>
                  <Box textAlign="center" >
                    {
                      submitting && <LinearProgress color="success" />
                    }
                    {
                      submitError && <Alert severity="error">{submitError}</Alert>
                    }
                    {
                      submitSucceeded && <Alert severity="success">This is a success alert — check it out!</Alert>
                    }
                  </Box>
                </Box>
              </Box>
            </form>
          )

        }
      }
    </Form>

  )
}

export default AddUser