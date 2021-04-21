import {
  Card,
  CardHeader,
  Collapse,
  IconButton,
  makeStyles,
} from "@material-ui/core";
import clsx from "clsx";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  clearSubcategories,
  getCategorySelector,
  getSubcategories,
} from "../redux/categories";
import { ICategory } from "../types";
import { NewBadge } from "./badges";
import { ExpandMoreIcon } from "./Icons";
import Loader from "./Loader";
import SubcategoryCard from "./SubcategoryCard";

const useStyles = makeStyles({
  card: {
    borderRadius: 12,
    marginBottom: 16,
    padding: 16,
  },
  header: {
    cursor: "pointer",
    padding: 0,
    color: "#1C1C2E",
  },
  title: {
    fontSize: "24px",
    fontWeight: 700,
    margin: 0,
  },
  expandIcon: {
    transition: "0.3s",
    color: "#1C1C2E",
  },
  open: {
    transform: "rotate(180deg)",
    transition: "0.3s",
  },
  flex: {
    display: "flex",
    alignItems: "center",
  },
  badge: {
    marginLeft: 16,
  },
  collapse: {
    display: "flex",
    alignItems: "center",
    gap: 27,
    flexWrap: "wrap",
  },
  loaderPlaceholder: {
    position: "relative",
    width: "100%",
    height: 100,
  },
});

const CategoryCard = ({ id }: ICategory): JSX.Element => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [expanded, toggleExpanded] = useState<boolean>(false);
  const category = useSelector(getCategorySelector(id));

  const handleExpandClick = (): void => {
    if (expanded) {
      dispatch(clearSubcategories(id));
    } else {
      dispatch(getSubcategories(id));
    }
    toggleExpanded((prevState) => !prevState);
  };

  const generateName = (name: string, isNew: boolean): React.ReactNode => {
    return (
      <div className={classes.flex}>
        <h1 className={classes.title}>{name}</h1>
        {isNew && <NewBadge className={classes.badge} />}
      </div>
    );
  };

  return category ? (
    <Card className={classes.card}>
      <CardHeader
        onClick={handleExpandClick}
        className={classes.header}
        classes={{ title: classes.title }}
        title={generateName(category.name, true)}
        action={
          <IconButton aria-label="more">
            <ExpandMoreIcon
              className={clsx(classes.expandIcon, { [classes.open]: expanded })}
            />
          </IconButton>
        }
      />
      <Collapse classes={{ wrapperInner: classes.collapse }} in={expanded}>
        {category.subcategoriesLoading ? (
          <div className={classes.loaderPlaceholder}>
            <Loader transparent />
          </div>
        ) : (
          category.subcategories.map((s, id) => (
            <SubcategoryCard
              key={s.id}
              title={s.name}
              subcategoryId={s.id}
              categoryId={category.id}
            />
          ))
        )}
      </Collapse>
    </Card>
  ) : (
    <></>
  );
};

export default CategoryCard;
