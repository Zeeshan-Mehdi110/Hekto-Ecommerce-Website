import { categoryActionTypes } from "../actions/categoryActions";

const initialState = {
  categories: [],
  totalRecords: 0,
  allRecordsLoaded: false,
  paginationArray: [],
  rowsPerPage: process.env.REACT_APP_RECORDS_PER_PAGE,
  paginationCurrentPage: 0,
};

function categoryReducer(state = initialState, action) {
  switch (action.type) {
    case categoryActionTypes.ADD_CATEGORY:
      return {
        ...state,
        categories: [...state.categories, action.category],
      };
    case categoryActionTypes.CATEGORIES_LIST:
      let updatedCategoriesArray = [
        ...state.categories,
        ...action.payload.categories,
      ];
      let oldPaginationArray = state.paginationArray;
      let newPageRecord = {
        startIndex: state.categories.length,
        endIndex: updatedCategoriesArray.length,
      };
      oldPaginationArray[action.payload.page] = newPageRecord;

      return {
        ...state,
        totalRecords: action.payload.totalRecords,
        allRecordsLoaded: action.payload.allRecordsLoaded,
        categories: updatedCategoriesArray,
        paginationArray: oldPaginationArray,
      };
    case categoryActionTypes.UPDATE_CATEGORY:
      let newCategoriesForEditCategory = [...state.categories];
      newCategoriesForEditCategory[action.payload.categoryIndex] =
        action.payload.category;
      return {
        ...state,
        category: newCategoriesForEditCategory,
      };
    case categoryActionTypes.DELETE_CATEGORY:
      let newCategories = [...state.categories];
      let categoriesForDeletedRecordPage = state.categories.slice(
        state.paginationArray[action.payload.page].startIndex,
        state.paginationArray[action.payload.page].endIndex
      );
      let deletedRecordIndex = categoriesForDeletedRecordPage.findIndex(
        (user) => user._id === action.payload.id
      );
      let deletedRecord = categoriesForDeletedRecordPage[deletedRecordIndex];
      deletedRecord.is_deleted = true;
      newCategories[deletedRecordIndex] = deletedRecord;
      return {
        ...state,
        categories: newCategories,
      };
    default:
      return state;
  }
}

export default categoryReducer;
