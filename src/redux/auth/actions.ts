import { IAction } from "../../types";

const actions = {
  LOGIN_ACTION: "auth/LOGIN_ACTION",
  LOGIN_ACTION_SUCCESS: "auth/LOGIN_ACTION_SUCCESS",
  LOGIN_ACTION_ERROR: "auth/LOGIN_ACTION_ERROR",

  LOGOUT_ACTION: 'auth/LOGOUT_ACTION', 
  LOGOUT_ACTION_SUCCESS: 'auth/LOGOUT_ACTION_SUCCESS', 
  LOGOUT_ACTION_ERROR: 'auth/LOGOUT_ACTION_ERROR', 

  REMOVE_SNACKBAR: "auth/REMOVE_SNACKBAR",
};

export const loginAction = (email: string, password: string, history: unknown): IAction => ({
  type: actions.LOGIN_ACTION,
  data: {
    email,
    password,
    history,
  }
});

export const loginActionSuccess = (data: any): IAction => ({
  type: actions.LOGIN_ACTION_SUCCESS,
  data,
});

export const loginActionError = (error: string): IAction => ({
  type: actions.LOGIN_ACTION_ERROR,
  error,
});

export const logoutAction = (): IAction => ({
  type: actions.LOGOUT_ACTION,
});

export const logoutActionSuccess = (): IAction => ({
  type: actions.LOGOUT_ACTION_SUCCESS,
})

export const removeSnackbar = (): IAction => ({
  type: actions.REMOVE_SNACKBAR,
});

export default actions;