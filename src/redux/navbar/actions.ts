import { IAction } from "../../types";

const actions = {
  SET_LOADING: "navbar/SET_LOADING",
};

export const setLoading = (): IAction => ({
  type: actions.SET_LOADING,
});

export default actions;
