import { ICategory, IState, ISubcategory, ITheme } from "../../types";
import { ICategoriesState } from "../../types/redux/categories";

export const getCategoriesSelector = ({
  categories,
}: IState): ICategoriesState => categories;

export const getSubcategoriesSelector = (category: string) => ({
  categories,
}: IState): Array<ISubcategory> =>
  categories.items.find((x) => x.id === category)?.subcategories || [];

export const getCategorySelector = (id: string) => ({
  categories,
}: IState): ICategory | undefined => categories.items.find((x) => x.id === id);

export const getSubcategorySelector = (
  categoryId: string,
  subcategoryId: string
) => ({ categories }: IState): ISubcategory | undefined =>
  categories.items
    .find((x) => x.id === categoryId)
    ?.subcategories.find((x) => x.id === subcategoryId);

export const getThemeSelector = (
  categoryId: string,
  subcategoryId: string,
  themeId: string
) => ({ categories }: IState): ITheme | undefined =>
  categories.items
    .find((x) => x.id === categoryId)
    ?.subcategories.find((x) => x.id === subcategoryId)
    ?.themes.find((x) => x.id === themeId);

export const getLoading = ({ categories }: IState): boolean =>
  categories.isLoading;

export const getActiveTheme = ({ categories }: IState): ITheme | null =>
  categories.activeTheme;
