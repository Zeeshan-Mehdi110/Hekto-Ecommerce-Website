import { categoryActionTypes } from "../actions/categoryActions";

const initialState = {
  categories: [],
  totalRecords: 0,
  allRecordsLoaded: false,
  paginationArray: [],
  rowsPerPage: process.env.REACT_APP_RECORDS_PER_PAGE,
  paginationCurrentPage: 0
};

function categoryReducer(state = initialState, action) {
  switch (action.type) {
    case categoryActionTypes.ADD_CATEGORY:
      let newCategoriesArray = [...state.categories];
      let oldPaginations = [...state.paginationArray];
      let lastPaginationPage = Math.ceil(parseInt(state.totalRecords) / parseInt(state.rowsPerPage)) - 1;
      let updatedAllRecordsLoaded = state.allRecordsLoaded;
      let updatedPaginationCurrentPage = state.paginationCurrentPage;

      if (lastPaginationPage < 0) {
        updatedAllRecordsLoaded = false;
      }

      if (oldPaginations[lastPaginationPage]) // if categories already clicked on last page
      {
        newCategoriesArray = [...state.categories, action.payload];
        let lastPaginationRecord = oldPaginations[lastPaginationPage];
        let lastPaginationStartIndex = lastPaginationRecord.startIndex;
        let lastPaginationEndIndex = lastPaginationRecord.endIndex;
        if ((lastPaginationEndIndex - lastPaginationStartIndex) == (state.rowsPerPage)) // if last page has more than rowsPerPage Records, than add new page to pagination array
        {
          updatedPaginationCurrentPage = lastPaginationPage + 1;
          oldPaginations[lastPaginationPage + 1] = { startIndex: lastPaginationEndIndex, endIndex: lastPaginationEndIndex + 1 }
        }
        else { // update the lastPaginationEndIndex to get the new record added
          oldPaginations[lastPaginationPage] = { startIndex: lastPaginationStartIndex, endIndex: lastPaginationEndIndex + 1 }
        }
      }
      return {
        ...state,
        categories: newCategoriesArray,
        totalRecords: state.totalRecords + 1,
        paginationArray: oldPaginations,
        allRecordsLoaded: updatedAllRecordsLoaded,
        paginationCurrentPage: updatedPaginationCurrentPage
      }
    case categoryActionTypes.CATEGORIES_LIST:
      let updatedCategoriesArray = [...state.categories, ...action.payload.categories];
      let oldPaginationArray = [...state.paginationArray];

      if (action.payload.categories) {
        let newPageRecord = { startIndex: state.categories.length, endIndex: updatedCategoriesArray.length };
        oldPaginationArray[action.payload.page] = newPageRecord;
      }
      return {
        ...state,
        totalRecords: action.payload.totalRecords,
        allRecordsLoaded: action.payload.allRecordsLoaded,
        categories: updatedCategoriesArray,
        paginationArray: oldPaginationArray
      }
    case categoryActionTypes.UPDATE_CATEGORY:
      let newCategoriesForEditCategory = [...state.categories];
      newCategoriesForEditCategory[action.payload.categoryIndex] = action.payload.category;
      return {
        ...state,
        category: newCategoriesForEditCategory
      }
    // case categoryActionTypes.DELETE_CATEGORY:
    //   const newCategories = [...state.categories];
    //   let categoriesForDeletedRecordPage = state.categories.slice(state.paginationArray[action.payload.page].startIndex, state.paginationArray[action.payload.page].endIndex);
    //   const deletedRecordIndex = categoriesForDeletedRecordPage.findIndex(category => category._id === action.payload.id);
    //   let deletedRecord = categoriesForDeletedRecordPage[deletedRecordIndex];
    //   deletedRecord.is_deleted = true;
    //   newCategories[deletedRecordIndex] = deletedRecord;

    //   //code to be reviewed started
    //   // const deletedRecordIndex = state.users.findIndex(user => user._id === action.payload.id);
    //   // let updatedUsersArrayAfterUserDeleted = [...state.users];

    //   // let deleteRecordNextPage = state.paginationArray[action.payload.page + 1];
    //   // if (deleteRecordNextPage) {
    //   //     let deleteRecordNextUser = updatedUsersArrayAfterUserDeleted[deleteRecordNextPage.startIndex];
    //   //     updatedUsersArrayAfterUserDeleted[deletedRecordIndex] = deleteRecordNextUser;//assign the next page first user to the index where user will be deleted

    //   //     //remove the user from the next index of deleted record as this next index user is now shifted to the deleted record index
    //   //     updatedUsersArrayAfterUserDeleted.splice(deleteRecordNextPage.startIndex, 1);

    //   //     let lastPage = Math.ceil(parseInt(state.totalRecords) / parseInt(state.rowsPerPage)) - 1;
    //   //     state.paginationArray.map((paginationArrayObject, page) => {
    //   //         if (page > action.payload.page && page !== lastPage) {
    //   //             updatedUsersArrayAfterUserDeleted[paginationArrayObject.endIndex] = updatedUsersArrayAfterUserDeleted[state.paginationArray[page + 1].startIndex];
    //   //             updatedUsersArrayAfterUserDeleted.splice(state.paginationArray[page + 1].startIndex, 1);
    //   //         }
    //   //         return paginationArrayObject;
    //   //     })
    //   // }
    //   //code to be reviewed later: ended

    //   return {
    //     ...state,
    //     categories: newCategories,
    //     // totalRecords: state.totalRecords - 1
    //   }
    case categoryActionTypes.DELETE_CATEGORY:
      let newCategories = [...state.categories];
      let categoriesForDeletedRecordPage = state.categories.slice(state.paginationArray[action.payload.page].startIndex, state.paginationArray[action.payload.page].endIndex);
      let deletedRecordIndex = categoriesForDeletedRecordPage.findIndex(user => user._id === action.payload.id);
      let deletedRecord = categoriesForDeletedRecordPage[deletedRecordIndex];
      deletedRecord.is_deleted = true;
      newCategories[deletedRecordIndex] = deletedRecord;

      //code to be reviewed started
      // const deletedRecordIndex = state.users.findIndex(user => user._id === action.payload.id);
      // let updatedUsersArrayAfterUserDeleted = [...state.users];

      // let deleteRecordNextPage = state.paginationArray[action.payload.page + 1];
      // if (deleteRecordNextPage) {
      //     let deleteRecordNextUser = updatedUsersArrayAfterUserDeleted[deleteRecordNextPage.startIndex];
      //     updatedUsersArrayAfterUserDeleted[deletedRecordIndex] = deleteRecordNextUser;//assign the next page first user to the index where user will be deleted

      //     //remove the user from the next index of deleted record as this next index user is now shifted to the deleted record index
      //     updatedUsersArrayAfterUserDeleted.splice(deleteRecordNextPage.startIndex, 1);

      //     let lastPage = Math.ceil(parseInt(state.totalRecords) / parseInt(state.rowsPerPage)) - 1;
      //     state.paginationArray.map((paginationArrayObject, page) => {
      //         if (page > action.payload.page && page !== lastPage) {
      //             updatedUsersArrayAfterUserDeleted[paginationArrayObject.endIndex] = updatedUsersArrayAfterUserDeleted[state.paginationArray[page + 1].startIndex];
      //             updatedUsersArrayAfterUserDeleted.splice(state.paginationArray[page + 1].startIndex, 1);
      //         }
      //         return paginationArrayObject;
      //     })
      // }
      //code to be reviewed later: ended

      return {
          ...state,
          categories: newCategories,
          // totalRecords: state.totalRecords - 1
      }
    case categoryActionTypes.RESET_CATEGORY:
      return initialState
    case categoryActionTypes.UPDATE_ROWS_PREPARE:
      return { ...state, rowsPerPage: action.payload }
    case categoryActionTypes.UPDATE_PAGINATION_CURRENT_PAGE:
      return {
          ...state,
          paginationCurrentPage: action.payload
      }
    default:
      return state;
  }
}

export default categoryReducer