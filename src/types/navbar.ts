import { SvgIconProps } from "@material-ui/core";

export interface IMenuSection {
  title?: string;
  items: IMenuItem[];
}

export interface IMenuItem {
  icon: ((props: SvgIconProps) => JSX.Element) | null;
  to: string;
  text: string;
}
