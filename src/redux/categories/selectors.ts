import { ICategory, IState } from "../../types";
import { ICategoriesState } from "../../types/redux/categories";

export const getCategoriesSelector = ({ categories }: IState): ICategoriesState => categories;
export const getCategorySelector = (id: string) => ({ categories }: IState): ICategory | undefined => categories.items.find(x => x.id === id);
export const getSubcategorySelector = (categoryId: string, subcategoryId: string) => ({ categories }: IState) => 
  categories.items.find(x => x.id === categoryId)
  ?.subcategories.find(x => x.id === subcategoryId);