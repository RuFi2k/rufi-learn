import { makeStyles } from "@material-ui/core";
import clsx from "clsx";
import { useHistory } from "react-router";
import { IMenuSection } from "../types";
import { AddRoundedIcon, ExtensionIcon, StarRoundedIcon } from "./Icons";

const useStyles = makeStyles({
  navbar: {
    width: 250,
    padding: "20px 15px",
    background: "#1C1C2E",
    hieght: "100%",
    overflowY: "scroll",
  },
  sectionTitle: {
    color: "#8D8D8D",
    fontSize: "14px",
    marginBottom: 8,
    display: "inline-block",
  },
  item: {
    lineHeight: "30px",
    padding: "0 12px",
    color: "#FFF",
    fontSize: "20px",
    marginBottom: 12,
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    borderRadius: 8,
    "&:hover": {
      background: "#404052",
    },
  },
  icon: {
    marginRight: 16,
  },
});

const menu: IMenuSection[] = [
  {
    title: "Navigation",
    items: [
      {
        icon: ExtensionIcon,
        text: "Explore",
        to: "/explore",
      },
      {
        icon: StarRoundedIcon,
        text: "Selected",
        to: "/favourites",
      },
      {
        icon: AddRoundedIcon,
        text: "Create a theme",
        to: "/create",
      },
    ],
  },
];

const Navbar = (): JSX.Element => {
  const classes = useStyles();

  const history = useHistory();

  const handleClick = (ref: string) => {
    history.push(ref);
  };

  return (
    <div className={clsx(classes.navbar, "no-scroll")}>
      {menu.map((section) => (
        <>
          <span className={classes.sectionTitle}>{section.title}</span>
          {section.items.map((item) => {
            const Icon = item.icon;

            return (
              <div
                className={classes.item}
                key={item.text}
                onClick={() => handleClick(item.to)}
              >
                {Icon && <Icon className={classes.icon} />}
                {item.text}
              </div>
            );
          })}
        </>
      ))}
    </div>
  );
};

export default Navbar;
