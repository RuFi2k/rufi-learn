import { makeStyles } from "@material-ui/core";
import { MainLayout } from "../layouts";
import { CategoryCard, Loader } from "../components";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getCategoriesSelector,
  getFavouriteCategories,
  getFavouriteSubcategories,
} from "../redux/categories";
import { getLikedLoading, getLikedSelector } from "../redux/user";

const useStyles = makeStyles({
  content: {},
  heading: {
    fontSize: "36px",
    fontWeight: 700,
    margin: "0 0 16px 0",
  },
  card: {
    width: "100%",
  },
});

const Favourites = (): JSX.Element => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const likedLoading = useSelector(getLikedLoading);
  const categories = useSelector(getCategoriesSelector);
  const liked = useSelector(getLikedSelector);

  useEffect(() => {
    if (!likedLoading) {
      dispatch(getFavouriteCategories());
    }
    // eslint-disable-next-line
  }, [likedLoading]);

  return (
    <MainLayout withNavbar>
      <div className={classes.content}>
        <h1 data-testid="favourites-header" className={classes.heading}>Favourites</h1>
        {categories.isLoading ? (
          <Loader />
        ) : (
          categories.items.map((c) => (
            <CategoryCard
              key={c.id}
              favourite
              get={getFavouriteSubcategories}
              {...c}
            />
          ))
        )}
      </div>
    </MainLayout>
  );
};

export default Favourites;
