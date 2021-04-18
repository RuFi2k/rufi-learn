import { makeStyles } from "@material-ui/core";
import { MainLayout } from "../layouts";
import { CategoryCard } from "../components";
import Loader from "../components/Loader";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories, getCategoriesSelector } from "../redux/categories";

const useStyles = makeStyles({
  content: {
  },
  heading: {
    fontSize: "36px",
    fontWeight: 700,
    margin: "0 0 16px 0",
  },
  card: {
    width: "100%",
  },
});

const Explore = (): JSX.Element => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const categories = useSelector(getCategoriesSelector);

  useEffect(() => {
    dispatch(getCategories());
    // eslint-disable-next-line
  }, []);

  return (
    <MainLayout withNavbar>
      <div className={classes.content}>
        <h1 className={classes.heading}>Select category</h1>
        {categories.isLoading
          ? <Loader />
          : categories.items.map((c) => (
          <CategoryCard key={c.id} {...c} />
        ))}
      </div>
    </MainLayout>
  );
};

export default Explore;
