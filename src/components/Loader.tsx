import { CircularProgress, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  wrapper: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#00000011',
  },
  loader: {
    color: '#1C1C2E',
  }
});

const Loader = (): JSX.Element => {
  const classes = useStyles();

  return <div className={classes.wrapper}>
    <CircularProgress className={classes.loader} />
  </div>
}

export default Loader;
