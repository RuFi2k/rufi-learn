import { IState } from "../../types";

export const getLikedSelector = ({ user }: IState) => user.likedThemes;
export const getCompletedSelector = ({ user }: IState) => user.completedThemes;
