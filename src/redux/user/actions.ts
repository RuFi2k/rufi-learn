import { IAction } from "../../types";

const actions = {
  GET_LIKED: "user/GET_LIKED",
  SET_LIKED: "user/SET_LIKED",
  ADD_LIKED: "user/ADD_LIKED",
  CHANGE_LIKE_STATUS: "user/CHANGE_LIKE_STATUS",

  GET_COMPLETED: "user/GET_COMPLETED",
  SET_COMPLETED: "user/SET_COMPLETED",
  ADD_COMPLETED: "user/ADD_COMPLETED",
  CHANGE_COMPLETE_STATUS: "user/CHANGE_COMPLETE_STATUS",
};

export const getLiked = (data: string): IAction => ({
  type: actions.GET_LIKED,
  data,
});

export const setLiked = (data: string[]): IAction => ({
  type: actions.SET_LIKED,
  data,
});

export const addLiked = (data: string): IAction => ({
  type: actions.ADD_LIKED,
  data,
});

export const getCompleted = (data: string): IAction => ({
  type: actions.GET_COMPLETED,
  data,
});

export const setCompleted = (data: string[]): IAction => ({
  type: actions.SET_COMPLETED,
  data,
});

export const addCompleted = (data: string): IAction => ({
  type: actions.ADD_COMPLETED,
  data,
});

export const changeLikeStatus = (data: boolean): IAction => ({
  type: actions.CHANGE_LIKE_STATUS,
  data,
});

export const changeCompleteStatus = (data: boolean): IAction => ({
  type: actions.CHANGE_COMPLETE_STATUS,
  data,
});

export default actions;
