import {
  IAction,
  ICategory,
  ISubcategorySuccess,
  ITheme,
  IThemePayload,
} from "../../types";

const actions = {
  SET_LOAING: "categories/SET_LOADING",

  GET_CATEGORIES: "categories/GET_CATERORIES",
  GET_CATEGORIES_SUCCESS: "categories/GET_CATERORIES_SUCCESS",
  GET_CATEGORIES_ERROR: "categories/GET_CATERORIES_ERROR",

  GET_SUBCATEGORIES: "categories/GET_SUBCATEGORIES",
  GET_SUBCATEGORIES_SUCCESS: "categories/GET_SUBCATEGORIES_SUCCESS",
  GET_SUBCATEGORIES_ERROR: "categories/GET_SUBCATEGORIES_ERROR",
  CLEAR_SUBCATEGORIES: "categories/CLEAR_SUBCATEGORIES",
  SET_ACTIVE_SUBCATEGORY: "categories/SET_ACTIVE_SUBCATEGORY",
  RESET_ACTIVE_SUBCATEGORY: "categories/RESET_ACTIVE_SUBCATEGORY",

  GET_THEMES: "categories/GET_THEMES",
  GET_THEMES_SUCCESS: "categories/GET_THEMES_SUCCESS",
  GET_THEMES_ERROR: "categories/GET_THEMES_ERROR",
  CLEAR_THEMES: "categories/CLEAR_THEMES",
  ADD_THEME: "categories/ADD_THEME",

  GET_THEME: "categories/GET_THEME",
  GET_THEME_SUCCESS: "categories/GET_THEME_SUCCESS",
  GET_THEME_ERROR: "categories/GET_THEME_ERROR",

  SET_ACTIVE_THEME: "categories/SET_ACTIVE_THEME",
  UNSET_ACIVE_THEME: "categories/UNSET_ACTIVE_THEME",

  GET_FAVOURITE_CATEGORIES: "categories/GET_FAVOURITE_CATEGORIES",
  GET_FAVOURITE_CATEGORIES_SUCCESS:
    "categories/GET_FAVOURITE_CATEGORIES_SUCCESS",
  GET_FAVOURITE_CATEGORIES_ERROR: "categories/GET_FAVOURITE_CATEGORIES_ERROR",

  GET_FAVOURITE_SUBCATEGORIES: "categories/GET_FAVOURITE_SUBCATEGORIES",
  GET_FAVOURITE_SUBCATEGORIES_SUCCESS:
    "categories/GET_FAVOURITE_SUBCATEGORIES_SUCCESS",
  GET_FAVOURITE_SUBCATEGORIES_ERROR:
    "categories/GET_FAVOURITE_SUBCATEGORIES_ERROR",

  GET_FAVOURITE_THEMES: "categories/GET_FAVOURITE_THEMES",
  GET_FAVOURITE_THEMES_SUCCESS: "categories/GET_FAVOURITE_THEMES_SUCCESS",
  GET_FAVOURITE_THEMES_ERROR: "categories/GET_FAVOURITE_THEMES_ERROR",

  CREATE_THEME: "categories/CREATE_THEME",
  CREATE_THEME_SUCCESS: "categories/CREATE_THEME_SUCCESS",
  CREATE_THEME_ERROR: "categories/CREATE_THEME_ERROR",
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

export const getSubcategoriesSuccess = (
  data: ISubcategorySuccess
): IAction => ({
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

export type ThemesPayload = {
  categoryId: string;
  subcategoryId: string;
};

export const getThemes = (data: ThemesPayload): IAction => ({
  type: actions.GET_THEMES,
  data,
});

export const getThemesSuccess = (data: any): IAction => ({
  type: actions.GET_THEMES_SUCCESS,
  data,
});

export const getThemesError = (error: string): IAction => ({
  type: actions.GET_THEMES_ERROR,
  error,
});

export const clearThemes = (data: ThemesPayload): IAction => ({
  type: actions.CLEAR_THEMES,
  data,
});

export type ActiveSubcategoryPayload = {
  categoryId: string;
  subcategoryId: string;
};

export const setActiveSubcategory = (
  data: ActiveSubcategoryPayload
): IAction => ({
  type: actions.SET_ACTIVE_SUBCATEGORY,
  data,
});

export const resetActiveSubcategory = (): IAction => ({
  type: actions.RESET_ACTIVE_SUBCATEGORY,
});

export type ThemeData = {
  category: string;
  subcategory: string;
  id: string;
};

export const getTheme = (data: ThemeData): IAction => ({
  type: actions.GET_THEME,
  data,
});

export const getThemeSuccess = (data: ITheme): IAction => ({
  type: actions.GET_THEME_SUCCESS,
  data,
});

export const getThemeError = (error: string): IAction => ({
  type: actions.GET_THEME_ERROR,
  error,
});

export const setActiveTheme = (data: string): IAction => ({
  type: actions.SET_ACTIVE_THEME,
  data,
});

export const unsetActiveTheme = (): IAction => ({
  type: actions.UNSET_ACIVE_THEME,
});

export const getFavouriteCategories = (): IAction => ({
  type: actions.GET_FAVOURITE_CATEGORIES,
});

export const getFavouriteCategoriesSuccess = (data: ICategory[]): IAction => ({
  type: actions.GET_FAVOURITE_CATEGORIES_SUCCESS,
  data,
});

export const getFavouriteCategoriesError = (error: string): IAction => ({
  type: actions.GET_FAVOURITE_CATEGORIES_ERROR,
  error,
});

export const getFavouriteSubcategories = (data: string): IAction => ({
  type: actions.GET_FAVOURITE_SUBCATEGORIES,
  data,
});

export const getFavouriteSubcategoriesSuccess = (
  data: ISubcategorySuccess
): IAction => ({
  type: actions.GET_FAVOURITE_SUBCATEGORIES_SUCCESS,
  data,
});

export const getFavouriteSubcategoriesError = (error: string): IAction => ({
  type: actions.GET_FAVOURITE_SUBCATEGORIES_ERROR,
  error,
});

export const getFavouriteThemes = (data: ThemesPayload): IAction => ({
  type: actions.GET_FAVOURITE_THEMES,
  data,
});

export const getFavouriteThemesSuccess = (data: ITheme[]): IAction => ({
  type: actions.GET_FAVOURITE_THEMES_SUCCESS,
  data,
});

export const getFavouriteThemesError = (error: string): IAction => ({
  type: actions.GET_FAVOURITE_THEMES_ERROR,
  error,
});

export const createTheme = (data: IThemePayload & { history: unknown }): IAction => ({
  type: actions.CREATE_THEME,
  data,
});

export const createThemeSuccess = (): IAction => ({
  type: actions.CREATE_THEME_SUCCESS,
});

export const createThemeError = (error: string): IAction => ({
  type: actions.CREATE_THEME_ERROR,
  error,
});

export const addTheme = (data: any): IAction => ({
  type: actions.ADD_THEME,
  data,
});

export default actions;
