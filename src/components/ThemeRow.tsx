import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  row: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 8,
    borderRadius: 8,
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: '#C4C4C444',
    }
  },
  name: {},
  actions: {},
});

type Props = {
  name: string;
  onClick: () => void;
};

const ThemeRow = ({ name, onClick }: Props): JSX.Element => {
  const classes = useStyles();

  return <div className={classes.row} onClick={onClick}>
    <span className={classes.name}>{name}</span>
    <div className={classes.actions}></div>
  </div>;
}

export default ThemeRow;
