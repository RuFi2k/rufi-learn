export interface IUserState {
  likedThemes: IThemeIdentifier[];
  completedThemes: string[];
}

export interface IThemeIdentifier {
  theme: string;
  category: string;
  subcategory: string;
}

export interface IActionPayload extends IThemeIdentifier {
  user: string;
}
