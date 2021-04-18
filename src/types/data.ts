export interface IInternalData {
  categories: ICategory[];
}

export interface ICategory {
  name: string;
  id: string;
  subcategories: ISubcategory[];
  subcategoriesLoading: boolean,
}

export interface ISubcategory {
  id: string;
  name: string;
  themes: ITheme[];
}

export interface ITheme {
  name: string;
  description: string;
  icon: string;
  useful_links: ILink[] | string[]; //update data and remove string array from interface soon TODO
  author: string;
  timestamp: number;
}

export interface ILink {
  name: string;
  url: string;
}

export interface ICategoryResponse {
  id: string;
  data: () => { name: string };
}

export interface ISubcategoryResponse {
  id: string;
  data: () => { name: string };
}

export interface ISubcategorySuccess {
  categoryId: string;
  subcategories: ISubcategory[];
}
