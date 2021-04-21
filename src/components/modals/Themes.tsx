import { makeStyles } from "@material-ui/core";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ThemeList } from "..";
import {
  clearThemes,
  getSubcategorySelector,
  getThemes,
} from "../../redux/categories";
import { IModalProps } from "../../types";
import Loader from "../Loader";
import ModalLayout from "./ModalLayout";

const useStyles = makeStyles({
  container: {
    width: 350,
    minHeight: 200,
    position: "relative",
  },
});

interface Props extends IModalProps {
  categoryId: string;
  subcategoryId: string;
}

const ThemesModal = ({
  categoryId,
  subcategoryId,
  onClose,
  ...props
}: Props): JSX.Element => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const subcategory = useSelector(
    getSubcategorySelector(categoryId, subcategoryId)
  );

  const handleClose = (
    e: {},
    reason: "backdropClick" | "escapeKeyDown"
  ): void => {
    dispatch(clearThemes({ categoryId, subcategoryId }));
    onClose?.(e, reason);
  };

  useEffect(() => {
    dispatch(getThemes({ categoryId, subcategoryId }));
    // eslint-disable-next-line
  }, []);

  return (
    <ModalLayout {...props} onClose={handleClose}>
      <div className={classes.container}>
        {subcategory?.themesLoading ? (
          <Loader transparent />
        ) : (
          <ThemeList themes={subcategory?.themes || []} />
        )}
      </div>
    </ModalLayout>
  );
};

export default ThemesModal;
