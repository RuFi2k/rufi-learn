import firebase from "firebase";
import { createContext, useEffect, useState } from "react";
import { app } from "../services";
import { IUserContext } from "../types";

export const AuthContext = createContext<IUserContext>({});

type Props = {
  children: JSX.Element;
};

const AuthProvider = ({ children }: Props): JSX.Element => {
  const [currentUser, setUser] = useState<firebase.User | null>(null);

  useEffect(() => {
    app.auth().onAuthStateChanged(setUser);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        currentUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
