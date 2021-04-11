import { rootReducer } from "../../redux";
import { INavbarState } from "./navbar";
import { IStepperState } from "./stepper";

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
}
