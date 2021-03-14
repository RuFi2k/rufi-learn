export interface IInternalData {
  categories: ICategory[];
}

export interface ICategory {
  name: string;
  subcategories: ISubcategory[];
}

export interface ISubcategory {
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
