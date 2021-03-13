import { makeStyles } from "@material-ui/core";
import { useHistory } from "react-router";
import clsx from "clsx";

const useStyles = makeStyles({
  link: {
    cursor: "pointer",
    color: "#2E76EE",
    textDecoration: "underline",
  },
});

type Props = {
  to?: string;
  children: JSX.Element | string;
  onClick?: () => void;
  className?: string;
};

const Link = ({ className, to, children, onClick }: Props): JSX.Element => {
  const classes = useStyles();
  const history = useHistory();

  const handleClick = (): void => {
    onClick?.();
    to && history.push(to);
  };

  return (
    <span className={clsx(className, classes.link)} onClick={handleClick}>
      {children}
    </span>
  );
};

export default Link;
