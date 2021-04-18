import { IAction, ICategory, ICategoryResponse, ISubcategory, ISubcategorySuccess } from "../../types";

const actions = {
  SET_LOAING: 'categories/SET_LOADING',

  GET_CATEGORIES: 'categories/GET_CATERORIES',
  GET_CATEGORIES_SUCCESS: 'categories/GET_CATERORIES_SUCCESS',
  GET_CATEGORIES_ERROR: 'categories/GET_CATERORIES_ERROR',

  GET_SUBCATEGORIES: 'categories/GET_SUBCATEGORIES',
  GET_SUBCATEGORIES_SUCCESS: 'categories/GET_SUBCATEGORIES_SUCCESS',
  GET_SUBCATEGORIES_ERROR: 'categories/GET_SUBCATEGORIES_ERROR',
  CLEAR_SUBCATEGORIES: 'categories/CLEAR_SUBCATEGORIES',
};

export const setLoading = (data: boolean): IAction => ({
  type: actions.SET_LOAING,
  data,
});

export const getCategories = (): IAction => ({
  type: actions.GET_CATEGORIES,
});

export const getCategoriesSuccess = (data: ICategory[]): IAction => ({
  type: actions.GET_CATEGORIES_SUCCESS,
  data,
});

export const getCategoriesError = (error: string): IAction => ({
  type: actions.GET_CATEGORIES_ERROR,
  error,
});

export const getSubcategories = (data: string): IAction => ({
  type: actions.GET_SUBCATEGORIES,
  data,
});

export const getSubcategoriesSuccess = (data: ISubcategorySuccess): IAction => ({
  type: actions.GET_SUBCATEGORIES_SUCCESS,
  data,
});

export const getSubcategoriesError = (error: string): IAction => ({
  type: actions.GET_SUBCATEGORIES_ERROR,
  error,
});

export const clearSubcategories = (data: string): IAction => ({
  type: actions.CLEAR_SUBCATEGORIES,
  data,
});

export default actions;