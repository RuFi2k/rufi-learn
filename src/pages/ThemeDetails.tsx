import { makeStyles } from "@material-ui/core";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { DetailsTitle, Loader, ThemeActions, UsefulLink } from "../components";
import { MainLayout } from "../layouts";
import { getActiveTheme, getLoading, getTheme, unsetActiveTheme } from "../redux/categories";

const useStyles = makeStyles({
  wrapper: {
    paddingBottom: 52,
    position: "relative",
    height: '100%',
  },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    position: "sticky",
    top: 0,
    left: 0,
    background: "#F2F2F2",
  },
  description: {
    fontSize: "20px",
  },
  links: {
    display: "flex",
    flexDirection: "column",
  },
  footer: {
    position: "fixed",
    bottom: 0,
    left: 0,
    borderTop: "1px solid #C4C4C4",
    width: "100%",
    padding: "14px 24px",
    background: "#F2F2F2",
  },
});

type Params = {
  category: string,
  subcategory: string,
  id: string,
}

const ThemeDetails = (): JSX.Element => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { category, subcategory, id } = useParams<Params>();
  const item = useSelector(getActiveTheme);
  const loading = useSelector(getLoading);

  useEffect(() => {
    if(!item) {
      dispatch(getTheme({ category, subcategory, id }));
    }
    return () => {
      dispatch(unsetActiveTheme());
    }
    // eslint-disable-next-line
  }, [])

  return (
    <MainLayout>
      <div className={classes.wrapper}>
        {loading
          ? <Loader transparent />
          : (<>
          <div className={classes.header}>
            <DetailsTitle title={item?.name || "No title available"} />
            <ThemeActions id={id} />
          </div>
          <p className={classes.description}>{item?.description}</p>
          <h2>Useful links</h2>
          <div className={classes.links}>
            {item?.useful_links.map((link: string) => (
              <UsefulLink key={link} text={link} />
            ))}
          </div>
          <div className={classes.footer}>
            Authored by {item?.author}, {(item && new Date(item.timestamp).toLocaleString()) || ''}
          </div>
        </>)}
      </div>
    </MainLayout>
  );
};

export default ThemeDetails;
