import { withStyles, StepConnector } from "@material-ui/core";

const Connector = withStyles({
  alternativeLabel: {
    top: 10,
    left: "calc(-50% + 16px)",
    right: "calc(50% + 16px)",
  },
  active: {
    opacity: 0.5,
    "& $line": {
      backgroundColor: "#1C1C2E",
    },
  },
  completed: {
    "& $line": {
      borderColor: "#1C1C2E",
    },
  },
  line: {
    borderColor: "#eaeaf0",
    borderTopWidth: 3,
    borderRadius: 1,
  },
})(StepConnector);

export default Connector;
