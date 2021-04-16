import { makeStyles, StepIconProps } from "@material-ui/core";
import clsx from "clsx";
import { CheckIcon } from "./Icons";

const useStyles = makeStyles({
  root: {
    width: 22,
    height: 22,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "50%",
    background: "#C4C4C4",
    fontSize: "14px",
    color: "#FFFFFF",
  },
  active: {
    background: "#1C1C2E",
  },
  completed: {
    background: "#1C1C2E",
  },
  icon: {
    width: "14px",
    height: "14px",
  },
});

type Props = {
  number: number;
  props: StepIconProps;
};

const StepIcon = ({ number, props }: Props): JSX.Element => {
  const classes = useStyles();
  const { active, completed } = props;

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
        [classes.completed]: completed,
      })}
    >
      {completed ? <CheckIcon className={classes.icon} /> : number}
    </div>
  );
};

export default StepIcon;
