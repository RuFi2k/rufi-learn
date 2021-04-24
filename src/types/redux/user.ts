export interface IUserState {
  likedThemes: string[];
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
