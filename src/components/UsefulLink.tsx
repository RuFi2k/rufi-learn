import { makeStyles } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import { useDispatch } from "react-redux";
import { removeLink } from "../redux/stepper";

const useStyles = makeStyles({
  wrapper: {
    display: "flex",
    justifyContent: "space-between",
    height: 30,
  },
  link: {
    maxWidth: "80%",
    textOverflow: "ellipsis",
    color: "#2E76EE",
  },
  delete: {
    color: "#BDBDBD",
    "&:hover": {
      color: "#FF7B7B",
      cursor: "pointer",
    },
  },
});

type Props = {
  text: string;
};

const UsefulLink = ({ text }: Props): JSX.Element => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleDelete = (): void => {
    dispatch(removeLink(text));
  };

  return (
    <div className={classes.wrapper}>
      <a
        href={`${text}`}
        target="_blank"
        rel="noreferrer"
        className={classes.link}
      >
        {text}
      </a>
      <DeleteIcon className={classes.delete} onClick={handleDelete} />
    </div>
  );
};

export default UsefulLink;
