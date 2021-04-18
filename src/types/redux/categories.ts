import { ICategory } from '../data';

export interface ICategoriesState {
  items: ICategory[],
  isLoading: boolean,
}