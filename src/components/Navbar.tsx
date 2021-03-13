import { makeStyles } from "@material-ui/core";
import clsx from "clsx";

const useStyles = makeStyles({
  navbar: {
    width: 250,
    padding: "20px 15px",
    background: "#1C1C2E",
    hieght: "100%",
    overflowY: "scroll",
  },
});

const Navbar = (): JSX.Element => {
  const classes = useStyles();

  return <div className={clsx(classes.navbar, "no-scroll")}></div>;
};

export default Navbar;
