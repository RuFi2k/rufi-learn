import { makeStyles } from "@material-ui/core";
import clsx from "clsx";

type Props = {
  className?: string;
};

const useStyles = makeStyles({
  badge: {
    padding: "5px 11px",
    borderRadius: 30,
    fontSize: "12px",
    fontWeight: 700,
    backgroundColor: "#5BCB51",
    color: "#FFF",
    textTransform: "uppercase",
  },
});

const NewBadge = ({ className }: Props): JSX.Element => {
  const classes = useStyles();

  return <span className={clsx(className, classes.badge)}>new</span>;
};

export default NewBadge;
