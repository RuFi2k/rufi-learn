import firebase from "firebase";

export interface ILogin {
  email: string;
  password: string;
}

export interface IRegister {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface IUserContext {
  currentUser?: firebase.User | null;
}
