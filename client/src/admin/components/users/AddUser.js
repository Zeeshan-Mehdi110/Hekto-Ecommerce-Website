import { Form, Field } from "react-final-form";
import {Button, Box, Grid, Typography } from "@mui/material";
import axios from "axios";
import { FORM_ERROR } from "final-form";
import { globalStyles } from "../../../globalStyle";
import TextInput from "../../../components/common/text-field/TextInput";
import SelectInput from "@mui/material/Select/SelectInput";
import { LoadingButton } from "@mui/lab"



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
          errors.name = "name is Required";
        else if (data.name.length < 3)
          errors.name = "Name Should be more then 3 Char";
        if (!data.email) errors.email = "Please Enter Email";
        if (!data.password) errors.password = "Please Enter Password";
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
          const { submitSucceeded, submitError, submitting, invalid } = prop;

          return (
            <form
              className='formBody'
              onSubmit={prop.handleSubmit} >
              <Box display={"flex"} justifyContent={"center"} flexDirection={"column"} >
                <Box boxShadow = '5px 5px 25px 5px #F8F8FB' p={3} width={"600px"} marginX={"auto"} >
                  <Typography textAlign={"center"} variant="h4" mb={2} fontWeight={"bold"} fontFamily={"var(--josefin)"} >Add User</Typography>
                  <Field component={TextInput} type='text' name="name" placeholder="Enter Name" label="Name" />
                  <Field component={TextInput} type='email' name="email" placeholder="User Email" label="Email" />
                  <Field component={TextInput} type='number' name="phone_number" placeholder="Phone Number" label="Phone Number" />
                  <Field component={TextInput} type='password' name="password" placeholder="******" label="Password" />
                  <Box textAlign={"center"} >
                    {
                      submitting ?
                        <LoadingButton style={{ ...globalStyles.Btn }} loading variant='outlined' >Submit</LoadingButton> :
                        <Button style={{ ...globalStyles.Btn, padding: "12px 45px" }} variant='contained' type='submit' disabled={invalid || submitting}>Submit</Button>

                    }
                  </Box>
                  <Box  textAlign="center" >
                  {
                    submitError && <h2 style={{"color":"crimson"}} >{submitError}</h2>
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