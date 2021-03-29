import { makeStyles } from "@material-ui/core";
import { Button } from "..";

const useStyles = makeStyles({
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
  prev: () => void;
};

export const Category = ({ next, prev }: Props): JSX.Element => {
  const classes = useStyles();

  return (
    <div>
      <Button className={classes.button} onClick={prev}>
        Back
      </Button>
      <Button className={classes.button} onClick={next}>
        Next
      </Button>
    </div>
  );
};

export default Category;
