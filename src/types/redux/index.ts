export * from "./navbar";

export interface IAction {
  type: string;
  data?: any;
  error?: string;
}
