import { IAction } from "../../types";
import { IActionPayload } from "../../types/redux/user";

const actions = {
  GET_LIKED: "user/GET_LIKED",
  SET_LIKED: "user/SET_LIKED",
  ADD_LIKED: "user/ADD_LIKED",
  LIKE: "user/LIKE",
  DISLIKE: "user/DISLIKE",

  GET_COMPLETED: "user/GET_COMPLETED",
  SET_COMPLETED: "user/SET_COMPLETED",
  ADD_COMPLETED: "user/ADD_COMPLETED",
  COMPLETE: "user/COMPLETE",
  UNCOMPLETE: "user/UNCOMPLETE",
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

export const likeRequest = (data: IActionPayload): IAction => ({
  type: actions.LIKE,
  data,
});

export const dislikeRequest = (data: IActionPayload): IAction => ({
  type: actions.DISLIKE,
  data,
});

export const completeRequest = (data: IActionPayload): IAction => ({
  type: actions.COMPLETE,
  data,
});

export const uncompleteRequest = (data: IActionPayload): IAction => ({
  type: actions.UNCOMPLETE,
  data,
});

export default actions;
