import { makeStyles, Select, SelectProps } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    // padding: "10px 32px 10px 14px",
  },
});

const StyledSelect = ({ ...props }: SelectProps): JSX.Element => {
  const classes = useStyles();

  return (
    <Select
      {...props}
      classes={{
        root: classes.root,
      }}
    />
  );
};

export default StyledSelect;
