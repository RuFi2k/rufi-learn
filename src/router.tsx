import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { PrivateRoute } from "./components";
import { Explore, Login, Register, CreateTheme, ThemeDetails } from "./pages";
import { IRoute } from "./types";

const routes: IRoute[] = [
  {
    path: "/login",
    exact: true,
    component: Login,
  },
  {
    path: "/register",
    exact: true,
    component: Register,
  },
  {
    path: "/explore",
    exact: true,
    private: true,
    component: Explore,
  },
  {
    path: "/create",
    exact: true,
    private: true,
    component: CreateTheme,
  },
  {
    path: "/details/:id",
    exact: true,
    private: true,
    component: ThemeDetails,
  },
];

const renderRouter = (): JSX.Element => {
  return (
    <Switch>
      {routes.map((r, i) => {
        const props = {
          key: i,
          path: r.path,
          exact: r.exact,
          component: r.component,
        };
        return r.private ? <PrivateRoute {...props} /> : <Route {...props} />;
      })}
      <Redirect to="/login" />
    </Switch>
  );
};

export default renderRouter;
