import EditIcon from "@mui/icons-material/Edit";
import { Alert, Button, CircularProgress } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import { FORM_ERROR } from "final-form";
import React from "react";
import { Field, Form } from "react-final-form";
import { connect, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import SelectInput from "../library/SelectInput";
import TextInput from "../library/TextInput";
import { useDispatch } from "react-redux";
import { showSuccess } from "../../store/actions/alertActions";
import { userActionTypes } from "../../store/actions/userActions";
import { productActionTypes } from "../../store/actions/productActions";
import TextAreaInput from "../library/TextAreaInput";

function EditProduct({ products, categories }) {
  const { id, rows, page } = useParams();
  const productIndex = products.findIndex((product) => product._id === id);

  const product = products[productIndex];

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const validate = (data) => {
    const errors = {};

    if (!data.name) errors.name = "Product Name is Required";
    else if (data.name.length < 3)
      errors.name = "Name Should be more then 3 Char";
    if (!data.price) errors.price = "Please Enter Price";
    if (!data.category || data.category == " ")
      errors.category = "Please Select Category";
    return errors;
  };

  const handleUpdateUser = async (data, form) => {
    try {
      data.id = id;
      let result = await axios.post(`/products/edit`, data);

      const fields = form.getRegisteredFields(); // Get all the registered field names
      fields.forEach((field) => {
        form.resetFieldState(field); // Reset the touched state for each field
        form.change(field, null); // Reset the value of each field to null
      });
      dispatch({
        type: productActionTypes.EDIT_PRODUCT,
        payload: { product: result.data.product, productIndex },
      });
      dispatch(showSuccess("Product updated successfully"));
      navigate(`/admin/dashboard/products/${rows}/${page}`);
      // Navigation will be added there
    } catch (error) {
      if (error.response && error.response.status === 400) {
        return { [FORM_ERROR]: error.response.data.errors };
      } else return { [FORM_ERROR]: error.message };
    }
  };

  return (
    <Box textAlign="center" maxWidth="500px" mx="auto">
      <Form
        onSubmit={handleUpdateUser}
        validate={validate}
        initialValues={{
          name: product && product.name,
          description: product && product.description,
          price: product && product.price,
          sale_price: product && product.sale_price,
          category: product && product.category,
        }}
        render={({
          handleSubmit,
          submitting,
          submitError,
          submitSucceeded,
          invalid,
        }) => (
          <form
            onSubmit={handleSubmit}
            method="post"
            encType="multipart/form-data"
          >
            <Field
              component={TextInput}
              type="text"
              name="name"
              placeholder="Enter Product Name"
              label="Name"
            />
            <Field
              component={TextAreaInput}
              type="text"
              name="description"
              placeholder="Product Description"
              label="Description"
            />
            <Field
              component={TextInput}
              type="number"
              name="price"
              placeholder="Product Price"
              label="Price"
            />
            <Field
              component={TextInput}
              type="number"
              name="sale_price"
              placeholder="Sale Price"
              label="Sale Price"
            />
            <Field
              component={SelectInput}
              name="category"
              label="Category"
              options={
                categories &&
                categories.map((category) => ({
                  label: category.name,
                  value: category._id,
                }))
              }
            />
            {submitting ? (
              <CircularProgress />
            ) : (
              <Button
                sx={{ marginTop: "20px" }}
                variant="contained"
                color="success"
                startIcon={<EditIcon />}
                type="submit"
                fullWidth
                disabled={submitting || submitting}
              >
                Update Product
              </Button>
            )}
            {submitError && typeof submitError === "string" && (
              <Box mt={2}>
                <Alert severity="error">{submitError}</Alert>
              </Box>
            )}

            {submitError && Array.isArray(submitError) && (
              <Box mt={2}>
                {submitError.map((error, index) => (
                  <Alert key={index} severity="error">
                    {error}
                  </Alert>
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

const mapStateToProps = (state) => {
  return {
    products: state.products.products,
    categories: state.categories.categories,
  };
};
const Wrapper = connect(mapStateToProps);

export default Wrapper(EditProduct);
