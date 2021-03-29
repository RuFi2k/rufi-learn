import { makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
import React from "react";

const useStyles = makeStyles({
  wrapper: {
    border: "1px solid",
    borderRadius: 12,
    padding: 8,
    width: 100,
    height: 100,
    display: "flex",
    alignItems: "flex-end",
    fontSize: "16px",
    position: "relative",
    color: "white",
    background:
      "url(https://images.ctfassets.net/hrltx12pl8hq/4plHDVeTkWuFMihxQnzBSb/aea2f06d675c3d710d095306e377382f/shutterstock_554314555_copy.jpg)",
    backgroundSize: "cover",
    overflow: "hidden",
    "&::after": {
      content: "''",
      position: "absolute",
      top: "50%",
      left: 0,
      width: "100%",
      height: "50%",
      borderRadius: 12,
      background: "linear-gradient(to top, #000000, #00000000)",
    },
  },
  title: {
    color: "#fff",
    zIndex: 2,
    fontWeight: 500,
    width: "100%",
    textOverflow: "ellipsis",
    overflow: "hidden",
    textDecoration: "none",
  },
});

type Props = {
  title: string;
  id: string | number;
};

const SubcategoryCard = ({ title, id }: Props): JSX.Element => {
  const classes = useStyles();

  return (
    <Link to={`details/${id}`} className={classes.wrapper}>
      <span className={classes.title}>{title}</span>
    </Link>
  );
};

export default SubcategoryCard;
