import { actions } from ".";
import { IAction } from "../../types";

const initialState = {
  categories: [],
  isLoading: false,
  subcategoriesLoading: false,
};

const categoriesReducer = (state: any = initialState, action: IAction): any => {
  switch(action.type) {
    case actions.SET_LOAING: {
      return {
        ...state,
        isLoading: action.data,
      };
    }
    case actions.GET_CATEGORIES: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case actions.GET_CATEGORIES_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        categories: action.data,
      };
    }
    case actions.GET_CATEGORIES_ERROR: {
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    }
    case actions.GET_SUBCATEGORIES: {
      return {
        ...state,
        subcategoriesLoading: true,
      };
    }
    case actions.GET_SUBCATEGORIES_SUCCESS: {
      const newCategories = state.categories.map((x: any) => {
        return x.id === action.data.categoryId
          ? { ...x, subcategories: action.data.subcategories }
          : x;
      });
      
      return {
        ...state,
        subcategoriesLoading: false,
        categories: newCategories,
      };
    }
    case actions.GET_SUBCATEGORIES_ERROR: {
      return {
        ...state,
        subcategoriesLoading: false,
        error: action.error,
      };
    }
    default: {
      return state;
    }
  }
};

export default categoriesReducer;
