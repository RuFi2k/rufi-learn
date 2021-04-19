import firebase from "firebase";
import { createContext, useEffect, useState } from "react";
import { useHistory } from "react-router";
import { app } from "../services";
import { IUserContext } from "../types";

export const AuthContext = createContext<IUserContext | null>(null);

type Props = {
  children: JSX.Element;
};

const AuthProvider = ({ children }: Props): JSX.Element => {
  const [currentUser, setUser] = useState<firebase.User | null>(null);
  const history = useHistory();

  // useEffect(() => {
  //   console.log(currentUser);
  //   if (!currentUser && window.location.pathname !== "/login") {
  //     history.push("/login");
  //   }
  //   // eslint-disable-next-line
  // }, [currentUser]);

  useEffect(() => {
    app.auth().onAuthStateChanged((user) => {
      setUser(user);
      if (!user) {
        history.push("/login");
      }
    });
    // eslint-disable-next-line
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
