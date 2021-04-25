import { makeStyles } from "@material-ui/core";
import { useContext, useEffect, useState } from "react";
import clsx from "clsx";
import {
  CheckRoundedIcon,
  FavoriteBorderRoundedIcon,
  FavoriteIcon,
} from "./Icons";
import { useDispatch, useSelector } from "react-redux";
import { completeRequest, dislikeRequest, getCompletedSelector, getLikedSelector, likeRequest, uncompleteRequest } from "../redux/user";
import { IThemeIdentifier } from "../types/redux/user";
import { AuthContext } from "./AuthContext";

const useStyles = makeStyles({
  wrapper: {
    height: 40,
    display: "flex",
    alignItems: "center",
    padding: "8px 12px",
    borderRadius: 12,
    background: "#FFF",
  },
  heart: {
    color: "red",
    cursor: "pointer",
    "&:active": {
      transform: "scale(0.9)",
    },
  },
  completeMarker: {
    borderRadius: 12,
    border: "1px solid #5BCB51",
    display: "flex",
    alignItems: "center",
    padding: "2px 8px 2px 2px",
    cursor: "pointer",
    fontSize: "14px",
    color: "#5BCB51",
    marginLeft: 10,
    transition: "0.3s",
    "&:active": {
      transform: "scale(0.9)",
    },
  },
  completed: {
    background: "#5BCB51",
    color: "#FFF",
  },
  check: {
    borderRadius: "50%",
    border: "1px solid #5BCB51",
    color: "#FFF",
    marginRight: 2,
    fontSize: "16px",
  },
  checked: {
    color: "#5BCB51",
    background: "#FFF",
  },
});

const ThemeActions = ({ category, subcategory, theme }: IThemeIdentifier): JSX.Element => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const likedList = useSelector(getLikedSelector);
  const completedList = useSelector(getCompletedSelector);
  const auth = useContext(AuthContext);

  const [liked, setLiked] = useState<boolean>(false);
  const [checked, setChecked] = useState<boolean>(false);

  useEffect(() => {
    setLiked(likedList.some(x => x.theme === theme));
    setChecked(completedList.includes(theme));
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    setLiked(likedList.some(x => x.theme === theme));
    setChecked(completedList.includes(theme));
    // eslint-disable-next-line
  }, [likedList, completedList]);

  const handleLike = (): void => {
    const props = { category, subcategory, theme, user: auth?.currentUser?.uid || '' };
    if(liked) {
      dispatch(dislikeRequest(props))
    } else{
      dispatch(likeRequest(props));
    }
  };

  const handleCheck = (): void => {
    const props = { category, subcategory, theme, user: auth?.currentUser?.uid || '' };
    if(checked) {
      dispatch(uncompleteRequest(props))
    } else{
      dispatch(completeRequest(props));
    }
  };

  return (
    <div className={classes.wrapper}>
      {liked ? (
        <FavoriteIcon className={classes.heart} onClick={handleLike} />
      ) : (
        <FavoriteBorderRoundedIcon
          className={classes.heart}
          onClick={handleLike}
        />
      )}
      <div
        className={clsx(classes.completeMarker, checked && classes.completed)}
        onClick={handleCheck}
      >
        <CheckRoundedIcon
          className={clsx(classes.check, checked && classes.checked)}
        />
        <span>{checked ? "Completed" : "Mark as completed"}</span>
      </div>
    </div>
  );
};

export default ThemeActions;
