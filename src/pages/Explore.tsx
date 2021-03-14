import { makeStyles } from "@material-ui/core";
import { MainLayout } from "../layouts";
import data from "../data.json";
import { CategoryCard } from "../components";
import { IInternalData } from "../types/data";

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

const Explore = (): JSX.Element => {
  const classes = useStyles();

  const { categories }: IInternalData = data;

  return (
    <MainLayout withNavbar>
      <div className={classes.content}>
        <h1 className={classes.heading}>Select category</h1>
        {categories.map((c) => (
          <CategoryCard {...c} />
        ))}
      </div>
    </MainLayout>
  );
};

export default Explore;
