import { IAction } from "../../types/redux";

const actions = {
  SET_LOADING: "navbar/SET_LOADING",
};

export const setLoading = (): IAction => ({
  type: actions.SET_LOADING,
});

export default actions;
