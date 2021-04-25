import { IState } from "../../types";
import { IThemeIdentifier } from "../../types/redux/user";

export const getLikedSelector = ({ user }: IState): IThemeIdentifier[] => user.likedThemes;
export const getCompletedSelector = ({ user }: IState): string[] => user.completedThemes;
