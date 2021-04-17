import { IState } from "../../types";

export const getButtonDisabled = ({ auth }: IState) =>
  auth.actionButtonDisabled;
