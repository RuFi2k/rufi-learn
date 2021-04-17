import { IAction } from "../../types";
import { actions } from '.';
import { IAuthState } from "../../types/redux/auth";

const initialState: IAuthState = {
  actionButtonDisabled: false,
  error: '',
};

const AuthReducer = (state: IAuthState = initialState, action: IAction): IAuthState => {
  switch(action.type) {
    case actions.LOGIN_ACTION: {
      return {
        ...state,
        actionButtonDisabled: true,
      };
    }
    case actions.LOGIN_ACTION_SUCCESS: {
      return {
        ...state,
        actionButtonDisabled: false,
      };
    }
    case actions.LOGIN_ACTION_ERROR: {
      return {
        ...state,
        actionButtonDisabled: false,
        error: action.error || 'Unknown error',
      };
    }
    case actions.REMOVE_SNACKBAR: {
      return {
        ...state,
        error: '',
      };
    }
    default: {
      return state;
    }
  }
}

export default AuthReducer;
