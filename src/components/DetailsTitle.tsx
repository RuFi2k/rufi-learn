import { makeStyles } from "@material-ui/core";
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded';
import { useHistory } from "react-router";

const useStyles = makeStyles({
  wrapper: {
    display: 'flex',
    alignItems: 'center',
  },
  back: {
    fontSize: '24px',
    cursor: "pointer",
  },
  title: {
    fontSize: "36px",
    fontWeight: "bold",
    margin: 0,
    marginLeft: 10,
  },
});

type Props = {
  title: string;
};

const DetailsTitle = ({ title }: Props): JSX.Element => {
  const classes = useStyles();
  const history = useHistory();

  const handleBack = (): void => {
    history.goBack();
  };
  
  return <div className={classes.wrapper}>
    <ArrowBackIosRoundedIcon onClick={handleBack} className={classes.back} />
    <p className={classes.title}>{title}</p>
  </div>
}

export default DetailsTitle;
