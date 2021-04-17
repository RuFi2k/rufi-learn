import { IAction } from "../../types";

const actions = {
  SET_NAME: "stepper/SET_NAME",
  SET_CATEGORY: "stepper/SET_CATEGORY",
  SET_SUBCATEGORY: "stepper/SET_SUBCATEGORY",
  SET_DESCRIPTION: "stepper/SET_DESCRIPTION",
  SET_LINK_TEXT: "stepper/SET_LINK_TEXT",
  ADD_LINK: "stepper/ADD_LINK",
  REMOVE_LINK: "stepper/REMOVE_LINK",

  LOAD_SUBCATEGORIES: "stepper/LOAD_SUBCATEGORIES",
  LOAD_SUBCATEGORIES_SUCCESS: "stepper/LOAD_SUBCATEGORIES_SUCCESS",
  LOAD_SUBCATEGORIES_ERROR: "stepper/LOAD_SUBCATEGORIES_ERROR",

  REFRESH_STATE: "stepper/REFRESH_STATE",
};

export const setName = (data: string): IAction => ({
  type: actions.SET_NAME,
  data,
});

export const setCategory = (data: string): IAction => ({
  type: actions.SET_CATEGORY,
  data,
});

export const setSubcategory = (data: string): IAction => ({
  type: actions.SET_SUBCATEGORY,
  data,
});

export const setDescription = (data: string): IAction => ({
  type: actions.SET_DESCRIPTION,
  data,
});

export const addLink = (data: string): IAction => ({
  type: actions.ADD_LINK,
  data,
});

export const removeLink = (data: string): IAction => ({
  type: actions.REMOVE_LINK,
  data,
});

export const loadSubcategories = (data: string): IAction => ({
  type: actions.LOAD_SUBCATEGORIES,
  data,
});

export const loadSubcategoriesSuccess = (data: string[]): IAction => ({
  type: actions.LOAD_SUBCATEGORIES_SUCCESS,
  data,
});

export const loadSubcategoriesError = (error: string): IAction => ({
  type: actions.LOAD_SUBCATEGORIES_ERROR,
  error,
});

export const refreshStepperState = (): IAction => ({
  type: actions.REFRESH_STATE,
});

export default actions;
