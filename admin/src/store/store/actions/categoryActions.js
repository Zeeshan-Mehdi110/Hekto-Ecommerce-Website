export const categoryActionTypes = {
  "ADD_CATEGORY": "addCategory",
  "UPDATE_CATEGORY": "updateCategory",
  "DELETE_CATEGORY": "deleteCategory",
}

export const addCategory = (category) => {
  return {
    type: categoryActionTypes.ADD_CATEGORY,
    category
  }
}