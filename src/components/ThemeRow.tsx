import { makeStyles } from "@material-ui/core";
import { NewBadge } from "./badges";

const useStyles = makeStyles({
  row: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 8,
    borderRadius: 8,
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#C4C4C444",
    },
  },
  badge: {
    marginLeft: 16,
  },
  flex: {
    display: 'flex',
  },
  name: {},
  actions: {},
});

type Props = {
  name: string;
  onClick: () => void;
  timestamp: number;
};

const ThemeRow = ({ name, timestamp, onClick }: Props): JSX.Element => {
  const classes = useStyles();

  const isNew = (time: number): boolean => {
    const deadline = new Date();
    deadline.setDate(deadline.getDate() - 3);
    return deadline.getTime() < time;
  }

  return (
    <div className={classes.row} onClick={onClick}>
      <div className={classes.flex}>
        <span className={classes.name}>{name}</span>
        {isNew(timestamp) && <NewBadge className={classes.badge} />}
      </div>
      <div className={classes.actions}></div>
    </div>
  );
};

export default ThemeRow;
