import { Backdrop, makeStyles, Modal, ModalProps } from "@material-ui/core";

const useStyles = makeStyles({
  container: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    background: "#FFF",
    borderRadius: 16,
    padding: 20,
    boxShadow: "0px 0px 10px 2px rgba(0, 0, 0, 0.25)",
    color: "#1C1C2E",
    "&:focus": {
      outline: "none",
    },
  },
});

const ModalLayout = (props: ModalProps): JSX.Element => {
  const classes = useStyles();

  return (
    <Modal {...props} BackdropComponent={Backdrop}>
      <div className={classes.container}>{props.children}</div>
    </Modal>
  );
};

export default ModalLayout;
