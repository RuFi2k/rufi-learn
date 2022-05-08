import { makeStyles } from "@material-ui/core";
import clsx from "clsx";
import { Button } from "..";
import { IModalProps } from "../../types";
import ModalLayout from "./ModalLayout";

const useStyles = makeStyles({
  buttonGroup: {
    display: "flex",
    justifyContent: "space-between",
  },
  btn: {
    width: 200,
  },
  red: {
    background: "#FF6161",
    "&:hover": {
      color: "#FF6161",
      border: "1px solid #FF6161",
    },
  },
  description: {
    fontSize: "18px",
    fontWeight: 500,
  },
});

const ConfirmGuestLogin = (props: IModalProps): JSX.Element => {
  const classes = useStyles();

  return (
    <ModalLayout {...props}>
      <div>
        <h2>Are you sure you want to log in as guest?</h2>
        <p className={classes.description}>Some actions can be locked</p>
        <div className={classes.buttonGroup}>
          <Button
            className={clsx(classes.btn, classes.red)}
            onClick={() => props.onClose?.({}, "escapeKeyDown")}
          >
            Cancel
          </Button>
        </div>
      </div>
    </ModalLayout>
  );
};

export default ConfirmGuestLogin;
