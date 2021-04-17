export interface IRoute {
  path: string;
  exact: boolean;
  private?: boolean;
  component: () => JSX.Element;
}
