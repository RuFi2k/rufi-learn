export interface IInternalData {
  categories: ICategory[];
}

export interface ICategory {
  name: string;
  id: string;
  subcategories: ISubcategory[];
  lastModified: number;
  subcategoriesLoading: boolean;
}

export interface ISubcategory {
  id: string;
  name: string;
  themesLoading: boolean;
  themes: ITheme[];
}

export interface ITheme {
  id: string;
  name: string;
  description: string;
  icon: string;
  useful_links: string[];
  author: string;
  timestamp: number;
}

export interface IThemePayload {
  category: string;
  subcategory: string;
  theme: object;
}

export interface ILink {
  name: string;
  url: string;
}

export interface ICategoryResponse {
  id: string;
  data: () => { name: string; lastModified: number };
}

export interface ISubcategoryResponse {
  id: string;
  data: () => { name: string };
}

export interface ISubcategorySuccess {
  categoryId: string;
  subcategories: ISubcategory[];
}
