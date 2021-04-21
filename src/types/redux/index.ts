import { IAuthState } from "./auth";
import { INavbarState } from "./navbar";
import { IStepperState } from "./stepper";
import { ICategoriesState } from "./categories";
import { IUserState } from "./user";

export * from "./navbar";
export * from "./stepper";

export interface IAction {
  type: string;
  data?: any;
  error?: string;
}

export interface IState {
  navbar: INavbarState;
  stepper: IStepperState;
  auth: IAuthState;
  categories: ICategoriesState;
  user: IUserState;
}
