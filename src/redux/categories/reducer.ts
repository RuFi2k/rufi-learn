import { actions } from ".";
import { IAction, ICategory } from "../../types";

const initialState = {
  items: [],
  isLoading: false,
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
        items: action.data,
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
      const newCategories = state.items.map((c: ICategory) => {
        return c.id === action.data
          ? { ...c, subcategoriesLoading: true, }
          : c;
      });
      return {
        ...state,
        items: newCategories,
      };
    }
    case actions.GET_SUBCATEGORIES_SUCCESS: {
      const newCategories = state.items.map((x: ICategory) => {
        return x.id === action.data.categoryId
          ? { ...x, subcategories: action.data.subcategories, subcategoriesLoading: false, }
          : x;
      });

      return {
        ...state,
        items: newCategories,
      };
    }
    case actions.GET_SUBCATEGORIES_ERROR: {
      const newCategories = state.items.map((x: ICategory) => {
        return x.id === action.data.categoryId
          ? { ...x, subcategoriesLoading: false, }
          : x;
      });

      return {
        ...state,
        items: newCategories,
        error: action.error,
      };
    }
    case actions.CLEAR_SUBCATEGORIES: {
      const newCategories = state.items.map((x: ICategory) => {
        return x.id === action.data
          ? { ...x, subcategories: [], }
          : x;
      });

      return {
        ...state,
        items: newCategories,
      };
    }
    default: {
      return state;
    }
  }
};

export default categoriesReducer;
