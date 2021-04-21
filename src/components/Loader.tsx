import { CircularProgress, makeStyles } from "@material-ui/core";
import clsx from "clsx";

const useStyles = makeStyles({
  wrapper: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#00000011",
  },
  loader: {
    color: "#1C1C2E",
  },
  transparent: {
    background: "transparent",
  },
});

type Props = {
  transparent?: boolean;
};

const Loader = ({ transparent = false }: Props): JSX.Element => {
  const classes = useStyles();

  return (
    <div className={clsx(classes.wrapper, transparent && classes.transparent)}>
      <CircularProgress className={classes.loader} />
    </div>
  );
};

export default Loader;
