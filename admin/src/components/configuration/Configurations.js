import { Alert, Box, Button, CircularProgress } from '@mui/material'
import axios from 'axios'
import { FORM_ERROR } from 'final-form'
import React, { useEffect } from 'react'
import { Field, Form } from 'react-final-form'
import { useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { showSuccess } from '../../store/actions/alertActions'
import TextInput from '../library/TextInput'
import EditIcon from '@mui/icons-material/Edit'
import FileInput from '../library/FileInput'
import { loadStore } from '../../store/actions/storeActions'

function Configurations() {
  const { id, rows, page } = useParams()

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const validate = (data) => {
    const errors = {}
    if (!data.name) errors.name = ' Category name is Required'
    else if (data.name.length < 3)
      errors.name = 'Name Should be more then 3 Char'
    return errors
  }

  useEffect(() => {
    loadStore()
  })

  const handleUpdateStore = async (data, form) => {
    try {
      let result = await axios.post(`store/edit`, {
        ...data,
        id: '647080b38c271fb6bfd9263d'
      })
      const fields = form.getRegisteredFields() // Get all the registered field names
      fields.forEach((field) => {
        form.resetFieldState(field) // Reset the touched state for each field
        form.change(field, null) // Reset the value of each field to null
      })
      dispatch(showSuccess('Configuration updated successfully'))
      // Navigation will be added there
    } catch (error) {
      if (error.response && error.response.status === 400) {
        return { [FORM_ERROR]: error.response.data.errors }
      } else return { [FORM_ERROR]: error.message }
    }
  }
  return (
    <Box textAlign="center" maxWidth="500px" mx="auto">
      <Form
        onSubmit={handleUpdateStore}
        // validate={validate}
        render={({ handleSubmit, submitting, invalid }) => (
          <form
            onSubmit={handleSubmit}
            method="post"
            encType="multipart/form-data"
          >
            <Field
              component={TextInput}
              type="text"
              name="storeName"
              placeholder="Enter Site Name"
              label="Site Name"
            />
            {/* <Field component={FileInput} name="siteLogo" /> */}
            <Field
              component={TextInput}
              name="tagline"
              placeholder="tagline"
              label="Tag Line"
            />
            <Field
              component={TextInput}
              name="address"
              placeholder="address"
              label="Address"
            />
            <Field
              component={TextInput}
              name="email"
              placeholder="email"
              label="Email"
            />
            <Field
              component={TextInput}
              name="phoneNumber"
              placeholder="phoneNumber"
              label="Phone Number"
            />
            <Field
              component={TextInput}
              name="facebookLink"
              placeholder="facebookLink"
              label="FaceBook Link"
            />
            <Field
              component={TextInput}
              name="twitterLink"
              placeholder="twitterLink"
              label="Twitter Link"
            />
            <Field
              component={TextInput}
              name="instagramLink"
              placeholder="instagramLink"
              label="Instagram Link"
            />
            {submitting ? (
              <CircularProgress />
            ) : (
              <Button
                sx={{ marginTop: '20px' }}
                variant="contained"
                color="success"
                startIcon={<EditIcon />}
                type="submit"
                fullWidth
                // disabled={submitting || invalid}
              >
                Update Store
              </Button>
            )}
          </form>
        )}
      />
    </Box>
  )
}

export default Configurations
