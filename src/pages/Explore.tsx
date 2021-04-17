import { makeStyles } from "@material-ui/core";
import { MainLayout } from "../layouts";
import data from "../data.json";
import { CategoryCard } from "../components";
import { IInternalData } from "../types";
import Loader from "../components/Loader";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCategories } from "../redux/categories";
import { app } from "../services";

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

  const { categories }: IInternalData = data;

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  return (
    <MainLayout withNavbar>
      <div className={classes.content}>
        <h1 className={classes.heading}>Select category</h1>
        <Loader />
        {/* {categories.map((c) => (
          <CategoryCard {...c} />
        ))} */}
      </div>
    </MainLayout>
  );
};

export default Explore;
