import { IAction, INavbarState } from "../../types/redux";
import actions from "./actions";

const initialState: INavbarState = {
  loading: false,
  error: null,
};

const navbarReducer = (state: INavbarState = initialState, action: IAction) => {
  switch (action.type) {
    case actions.SET_LOADING:
      return {
        ...state,
        loading: action.data,
        error: null,
      };
    default:
      return state;
  }
};

export default navbarReducer;
