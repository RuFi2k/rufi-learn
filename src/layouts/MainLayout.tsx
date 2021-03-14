import { Avatar, makeStyles } from "@material-ui/core";
import clsx from "clsx";
import { Navbar } from "../components";

const useStyles = makeStyles({
  wrapper: {
    width: "100vw",
    height: "100vh",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    background: "#FFF",
    boxShadow: "0px 4px 20px 5px rgba(0, 0, 0, 0.25)",
    minHeight: 70,
    padding: "0 20px",
  },
  logo: {
    height: 36,
  },
  page: {
    flex: 1,
    display: "flex",
    overflow: "hidden",
  },
  content: {
    flex: 1,
    height: "100%",
    overflowY: "scroll",
    padding: 20,
  },
  avatar: {
    backgroundColor: "#1C1C2E",
  },
});

type Props = {
  children: JSX.Element;
  withNavbar: boolean;
};

const MainLayout = ({ children, withNavbar = false }: Props): JSX.Element => {
  const classes = useStyles();

  return (
    <section className={classes.wrapper}>
      <div className={classes.header}>
        <img src="/assets/logo.svg" alt="logo" className={classes.logo} />
        <Avatar alt="user" classes={{ colorDefault: classes.avatar }} />
      </div>
      <div className={classes.page}>
        {withNavbar && <Navbar />}
        <div className={clsx(classes.content, "no-scroll")}>{children}</div>
      </div>
    </section>
  );
};

export default MainLayout;
