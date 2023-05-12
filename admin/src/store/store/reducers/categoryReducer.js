import { categoryActionTypes } from "../actions/categoryActions";

const initialState = {
    categories: []
}

function categoryReducer(state = initialState, action) {
    switch (action.type) {
      case categoryActionTypes.ADD_CATEGORY :
        return {
          ...state,
          categories: [...state.categories, action.category]
        }
        default:
            return state;
    }
}

export default categoryReducer