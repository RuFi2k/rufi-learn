import { makeStyles } from "@material-ui/core";
import { Button, Input } from "..";

const useStyles = makeStyles({
  wrapper: {},
  buttonGroup: {
    marginTop: 12,
    display: "flex",
    alignItems: "center",
  },
  button: {
    width: 120,
    height: 40,
    fontSize: "20px",
    fontWeight: 500,
    "&:first-child": {
      marginRight: 10,
    },
  },
});

type Props = {
  next: () => void;
};

const Name = ({ next }: Props): JSX.Element => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <Input placeholder="Name" />
      <div className={classes.buttonGroup}>
        <Button className={classes.button} disabled>
          Back
        </Button>
        <Button className={classes.button} onClick={next}>
          Next
        </Button>
      </div>
    </div>
  );
};

export default Name;
