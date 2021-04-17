import { IAction } from "../../types";

const actions = {
  SET_LOAING: 'categories/SET_LOADING',

  GET_CATEGORIES: 'categories/GET_CATERORIES',
  GET_CATEGORIES_SUCCESS: 'categories/GET_CATERORIES_SUCCESS',
  GET_CATEGORIES_ERROR: 'categories/GET_CATERORIES_ERROR',

  GET_SUBCATEGORIES: 'categories/GET_SUBCATEGORIES',
  GET_SUBCATEGORIES_SUCCESS: 'categories/GET_SUBCATEGORIES_SUCCESS',
  GET_SUBCATEGORIES_ERROR: 'categories/_ERROR',
};

export const setLoading = (data: boolean): IAction => ({
  type: actions.SET_LOAING,
  data,
});

export const getCategories = (): IAction => ({
  type: actions.GET_CATEGORIES,
});

export const getCategoriesSuccess = (data: any): IAction => ({
  type: actions.GET_CATEGORIES_SUCCESS,
  data,
});

export const getCategoriesError = (error: string): IAction => ({
  type: actions.GET_CATEGORIES_ERROR,
  error,
});

export const getSubcategories = (): IAction => ({
  type: actions.GET_SUBCATEGORIES,
});

export const getSubcategoriesSuccess = (data: any): IAction => ({
  type: actions.GET_SUBCATEGORIES_SUCCESS,
  data,
});

export const getSubcategoriesError = (error: string): IAction => ({
  type: actions.GET_SUBCATEGORIES_ERROR,
  error,
});

export default actions;