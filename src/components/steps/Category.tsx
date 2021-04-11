import {
  FormControl,
  FormHelperText,
  InputLabel,
  makeStyles,
  MenuItem,
} from "@material-ui/core";
import { useFormik } from "formik";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { object, string } from "yup";
import { Button, Select } from "..";
import { setLoading } from "../../redux/navbar";
import {
  getCategory,
  getSubcategory,
  loadSubcategories,
  setCategory,
  setSubcategory,
} from "../../redux/stepper";

const useStyles = makeStyles({
  content: {},
  buttonGroup: {
    marginTop: 12,
  },
  control: {
    width: "100%",
  },
  button: {
    width: 120,
    height: 40,
    fontSize: "20px",
    fontWeight: 500,
    "&:first-child": {
      marginRight: 10,
    },
  },
});

type Props = {
  next: () => void;
  prev: () => void;
};

export const Category = ({ next, prev }: Props): JSX.Element => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const category = useSelector(getCategory);
  const subcategory = useSelector(getSubcategory);

  const schema = object().shape({
    category: string().required("No category selected"),
    subcategory: string().required("No subcategory selected"),
  });

  const initialValues = { category: "", subcategory: "" };

  useEffect(() => {
    setFieldValue("category", category);
    setFieldValue("subcategory", subcategory);
    // eslint-disable-next-line
  }, []);

  const {
    values,
    errors,
    touched,
    isValid,
    setFieldValue,
    setTouched,
    validateForm,
    setErrors,
  } = useFormik({
    initialValues,
    validateOnMount: true,
    onSubmit: () => undefined,
    validationSchema: schema,
  });

  useEffect(() => {
    validateForm(values).then((errors) => setErrors(errors));
    // eslint-disable-next-line
  }, [values]);

  useEffect(() => {
    dispatch(setCategory(values.category));
    dispatch(setLoading(true));
    dispatch(loadSubcategories(values.category));
  }, [values.category, dispatch]);

  useEffect(() => {
    dispatch(setSubcategory(values.subcategory));
  }, [values.subcategory, dispatch]);

  const items: Array<{ val: string; text: string }> = [
    { val: "10", text: "Ten" },
  ];

  const touch = (e: React.FocusEvent<HTMLInputElement>) => {
    setTouched({
      ...touched,
      [e.target.name]: true,
    });
  };

  return (
    <div>
      <div className={classes.content}>
        <FormControl
          className={classes.control}
          error={!!errors.category && touched.category}
        >
          <InputLabel id="category">Category</InputLabel>
          <Select
            labelId="category"
            value={values.category}
            onChange={(
              e: React.ChangeEvent<{ name?: string; value: unknown }>
            ) => {
              setFieldValue("category", e.target.value);
            }}
            name="category"
            onBlur={touch}
          >
            {items.map((item) => (
              <MenuItem value={item.val}>{item.text}</MenuItem>
            ))}
          </Select>
          {errors.category && touched.category && (
            <FormHelperText>{errors.category}</FormHelperText>
          )}
        </FormControl>
        <FormControl
          className={classes.control}
          error={!!errors.subcategory && touched.subcategory}
        >
          <InputLabel id="subcategory">Subategory</InputLabel>
          <Select
            labelId="subcategory"
            value={values.subcategory}
            onChange={(
              e: React.ChangeEvent<{ name?: string; value: unknown }>
            ) => {
              setFieldValue("subcategory", e.target.value);
            }}
            name="subcategory"
            onBlur={touch}
          >
            {items.map((item) => (
              <MenuItem value={item.val}>{item.text}</MenuItem>
            ))}
          </Select>
          {errors.subcategory && touched.subcategory && (
            <FormHelperText>{errors.subcategory}</FormHelperText>
          )}
        </FormControl>
      </div>
      <div className={classes.buttonGroup}>
        <Button className={classes.button} onClick={prev}>
          Back
        </Button>
        <Button className={classes.button} onClick={next} disabled={!isValid}>
          Next
        </Button>
      </div>
    </div>
  );
};

export default Category;
