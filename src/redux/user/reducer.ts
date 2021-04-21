import { IAction } from "../../types"
import { IUserState } from "../../types/redux/user";
import { actions } from '.';

const initialState: IUserState = {
  likedThemes: [],
  completedThemes: [],
}

const userReducer = (state: IUserState = initialState, action: IAction) => {
  switch(action.type) {
    case actions.SET_LIKED: {
      return {
        ...state,
        likedThemes: action.data,
      };
    }
    case actions.ADD_LIKED: {
      return {
        ...state,
        likedThemes: [...state.likedThemes, action.data],
      }
    }
    case actions.SET_COMPLETED: {
      return {
        ...state,
        completedThemes: action.data,
      };
    }
    case actions.ADD_COMPLETED: {
      return {
        ...state,
        completedThemes: [...state.completedThemes, action.data],
      };
    }
    default: {
      return state;
    }
  }
};

export default userReducer;