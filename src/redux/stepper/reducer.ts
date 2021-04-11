import { IAction, IStepperState } from "../../types";
import actions from "./actions";

const initialState: IStepperState = {
  links: [],
  category: "",
  subcategory: "",
  description: "",
  linkText: "",
  name: "",
  subcategoriesLoading: false,
  subcategories: [],
};

const reducer = (
  state: IStepperState = initialState,
  action: IAction
): IStepperState => {
  switch (action.type) {
    case actions.ADD_LINK:
      console.log("add link", action.data);
      return {
        ...state,
        links: [action.data, ...state.links],
      };

    case actions.REMOVE_LINK:
      return {
        ...state,
        links: state.links.filter((x) => x !== action.data),
      };

    case actions.SET_CATEGORY:
      return {
        ...state,
        category: action.data,
        subcategory: "",
      };

    case actions.SET_DESCRIPTION:
      return {
        ...state,
        description: action.data,
      };

    case actions.SET_LINK_TEXT:
      return {
        ...state,
        linkText: action.data,
      };

    case actions.SET_NAME:
      return {
        ...state,
        name: action.data,
      };

    case actions.SET_SUBCATEGORY:
      return {
        ...state,
        subcategory: action.data,
      };
    case actions.LOAD_SUBCATEGORIES:
      return {
        ...state,
        subcategoriesLoading: true,
      };

    case actions.LOAD_SUBCATEGORIES_SUCCESS:
      return {
        ...state,
        subcategories: action.data,
      };

    case actions.LOAD_SUBCATEGORIES_ERROR:
      return {
        ...state,
      };

    case actions.REFRESH_STATE:
      return {
        ...state,
        ...initialState,
      };

    default:
      return state;
  }
};

export default reducer;
