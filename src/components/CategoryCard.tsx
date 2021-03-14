import {
  Card,
  CardHeader,
  Collapse,
  IconButton,
  makeStyles,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import clsx from "clsx";
import { useState } from "react";
import { ICategory } from "../types/data";
import { NewBadge } from "./badges";

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
});

const CategoryCard = ({ name, subcategories }: ICategory): JSX.Element => {
  const classes = useStyles();
  const [expanded, toggleExpanded] = useState<boolean>(false);

  const handleExpandClick = (): void => {
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

  return (
    <Card className={classes.card}>
      <CardHeader
        onClick={handleExpandClick}
        className={classes.header}
        classes={{ title: classes.title }}
        title={generateName(name, true)}
        action={
          <IconButton aria-label="more">
            <ExpandMoreIcon
              className={clsx(classes.expandIcon, { [classes.open]: expanded })}
            />
          </IconButton>
        }
      />
      <Collapse in={expanded}>
        {subcategories.map((s) => (
          <p>{s.name}</p>
        ))}
      </Collapse>
    </Card>
  );
};

export default CategoryCard;
