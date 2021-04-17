import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core";
import { AuthContext } from "../components";
import { useHistory } from "react-router";

const useStyles = makeStyles({
  wrapper: {
    background: "#F2F2F2",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
  },
  form: {
    padding: "24px 30px",
    boxShadow: "0px 0px 20px 5px rgba(0, 0, 0, 0.25)",
    borderRadius: 12,
    width: 420,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    background: "#fff",
  },
  logo: {
    paddingBottom: 60,
  },
});

type Props = {
  children: JSX.Element;
};

const AuthLayout = ({ children }: Props): JSX.Element => {
  const classes = useStyles();
  const auth = useContext(AuthContext);
  const history = useHistory();

  if (auth && auth.currentUser) {
    history.push("/explore");
  }

  return (
    <section className={classes.wrapper}>
      <div className={classes.form}>
        <img src="/assets/logo.svg" alt="logo" className={classes.logo} />
        {children}
      </div>
    </section>
  );
};

export default AuthLayout;
