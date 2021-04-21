import { ICategory, ITheme } from "../data";

export interface ICategoriesState {
  items: ICategory[];
  isLoading: boolean;
  error: string;
  activeCategory: string;
  activeSubcategory: string;
  activeTheme: ITheme | null;
}
