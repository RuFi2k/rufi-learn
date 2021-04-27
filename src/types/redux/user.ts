export interface IUserState {
  likedThemes: IThemeIdentifier[];
  completedThemes: string[];
  likedLoading: boolean;
}

export interface IThemeIdentifier {
  theme: string;
  category: string;
  subcategory: string;
}

export interface IActionPayload extends IThemeIdentifier {
  user: string;
}
