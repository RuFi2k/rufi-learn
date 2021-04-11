import { IState } from "../../types";

export const getStepper = (state: IState) => state.stepper;

export const getCategory = ({ stepper }: IState) => stepper.category;
export const getSubcategory = ({ stepper }: IState) => stepper.subcategory;
export const getName = ({ stepper }: IState) => stepper.name;
export const getLinks = ({ stepper }: IState) => stepper.links;
