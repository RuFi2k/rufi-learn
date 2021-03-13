import { Button as Btn, ButtonProps, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#1C1C2E",
    color: "#FFF",
    fontWeight: 600,
    textTransform: "none",
    width: "100%",
    borderRadius: 8,
    height: 48,
    fontSize: "20px",
    "&:hover": {
      color: "#1C1C2E",
      border: "1px solid #1C1C2E",
      backgroundColor: "transparent",
    },
  },
  disabled: {
    opacity: 0.5,
    color: "#FFFFFF !important",
  },
});

interface Props extends ButtonProps {
  children: JSX.Element | string;
}

const Button = (props: Props): JSX.Element => {
  const classes = useStyles();

  return (
    <Btn
      {...props}
      classes={{ root: classes.root, disabled: classes.disabled }}
    />
  );
};

export default Button;
