import { IState } from "../../types";

export const getStepper = ({ stepper }: IState) => stepper;
export const getStepperPayload = ({ stepper }: IState) => {
  const { links, category, subcategory, description, name } = stepper;

  return {
    links,
    category,
    subcategory,
    description,
    name,
  };
};

export const getCategory = ({ stepper }: IState) => stepper.category;
export const getSubcategory = ({ stepper }: IState) => stepper.subcategory;
export const getName = ({ stepper }: IState) => stepper.name;
export const getLinks = ({ stepper }: IState) => stepper.links;
