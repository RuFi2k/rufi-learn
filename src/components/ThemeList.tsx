import { makeStyles } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { ThemeRow } from ".";
import { getCategoriesSelector, setActiveTheme } from "../redux/categories";
import { ITheme } from "../types";

const useStyles = makeStyles({
  wrapper: {},
});

type Props = {
  themes: ITheme[];
};

const ThemeList = ({ themes }: Props): JSX.Element => {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const { activeCategory, activeSubcategory } = useSelector(
    getCategoriesSelector
  );

  const handleRedirect = (id: string): void => {
    dispatch(setActiveTheme(id));
    history.push(`/details/${activeCategory}/${activeSubcategory}/${id}`);
  };

  return (
    <div className={classes.wrapper}>
      {themes.map((theme) => (
        <ThemeRow name={theme.name} timestamp={theme.timestamp} onClick={() => handleRedirect(theme.id)} />
      ))}
    </div>
  );
};

export default ThemeList;
