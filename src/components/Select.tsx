import { Select, SelectProps } from "@material-ui/core";

const StyledSelect = ({ ...props }: SelectProps): JSX.Element => {
  return <Select {...props} />;
};

export default StyledSelect;
