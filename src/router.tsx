import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
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
    component: Explore,
  },
  {
    path: "/create",
    exact: true,
    component: CreateTheme,
  },
  {
    path: "/details/:id",
    exact: true,
    component: ThemeDetails,
  },
  {
    path: "/",
    exact: true,
    component: () => <Redirect to="/login" />,
  },
];

const renderRouter = (): JSX.Element => {
  return (
    <Switch>
      {routes.map((r, i) => (
        <Route key={i} path={r.path} exact={r.exact} component={r.component} />
      ))}
      <Redirect to="/login" />
    </Switch>
  );
};

export default renderRouter;
