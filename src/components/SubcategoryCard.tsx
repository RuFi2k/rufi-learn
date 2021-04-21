import { makeStyles } from "@material-ui/core";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  resetActiveSubcategory,
  setActiveSubcategory,
} from "../redux/categories";
import { ThemesModal } from "./modals";

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
    cursor: "pointer",
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
    cursor: "pointer",
  },
});

type Props = {
  title: string;
  categoryId: string;
  subcategoryId: string;
};

const SubcategoryCard = ({
  title,
  categoryId,
  subcategoryId,
}: Props): JSX.Element => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [modalOpen, setModal] = useState<boolean>(false);

  const handleModalOpen = (): void => {
    dispatch(setActiveSubcategory({ categoryId, subcategoryId }));
    setModal(true);
  };

  const handleModalClose = (): void => {
    dispatch(resetActiveSubcategory());
    setModal(false);
  };

  return (
    <>
      <div onClick={handleModalOpen} className={classes.wrapper}>
        <span className={classes.title}>{title}</span>
      </div>
      {modalOpen && (
        <ThemesModal
          open={modalOpen}
          onClose={handleModalClose}
          subcategoryId={subcategoryId}
          categoryId={categoryId}
        />
      )}
    </>
  );
};

export default SubcategoryCard;
