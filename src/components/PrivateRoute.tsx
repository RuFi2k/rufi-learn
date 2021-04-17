import { useContext } from "react"
import { Redirect, Route, RouteProps } from "react-router";
import { AuthContext } from "./AuthContext"

const PrivateRoute = (routeProps: RouteProps): JSX.Element => {
  const user = useContext(AuthContext);

  return user ? <Route {...routeProps} />
    : <Redirect to="login"/>;
}

export default PrivateRoute;
