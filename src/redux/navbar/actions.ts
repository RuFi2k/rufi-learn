import { IAction } from "../../types";

const actions = {
  SET_LOADING: "navbar/SET_LOADING",
};

export const setLoading = (data: boolean): IAction => ({
  type: actions.SET_LOADING,
  data,
});

export default actions;
