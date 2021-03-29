import { Button, makeStyles } from "@material-ui/core";

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
  submit: () => void;
  prev: () => void;
};

export const AdditionalInformation = ({ submit, prev }: Props): JSX.Element => {
  const classes = useStyles();

  return (
    <div>
      <Button className={classes.button} onClick={prev}>
        Back
      </Button>
      <Button className={classes.button} onClick={submit}>
        Submit
      </Button>
    </div>
  );
};

export default AdditionalInformation;
