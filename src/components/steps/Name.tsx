import { FormControl, FormHelperText, makeStyles } from "@material-ui/core";
import { useFormik } from "formik";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { object, string } from "yup";
import { Button, Input } from "..";
import { getName, setName } from "../../redux/stepper";

const useStyles = makeStyles({
  wrapper: {},
  buttonGroup: {
    marginTop: 12,
    display: "flex",
    alignItems: "center",
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
  helper: {
    marginLeft: 12,
    color: "#FF6161",
  },
});

type Props = {
  next: () => void;
};

const Name = ({ next }: Props): JSX.Element => {
  const classes = useStyles();
  const dispatch = useDispatch();

  let name = useSelector(getName);

  const schema = object().shape({
    name: string().required("Name is required."),
  });

  const initialValues = { name: "" };

  useEffect(() => {
    setFieldValue("name", name);
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

  const touch = (e: React.FocusEvent<HTMLInputElement>) => {
    setTouched({
      ...touched,
      [e.target.name]: true,
    });
  };

  const handleChange = (e: React.ChangeEvent<{ value: string }>) => {
    setFieldValue("name", e.target.value);
    dispatch(setName(e.target.value));
  };

  const handleNext = (): void => {
    validateForm({ name }).then(next);
  };

  return (
    <div className={classes.wrapper}>
      <FormControl error={!!errors.name && touched.name} fullWidth>
        <Input
          placeholder="Name"
          value={values.name}
          onChange={handleChange}
          error={!!errors.name && touched.name}
          name="name"
          onBlur={touch}
        />
        {errors.name && touched.name && (
          <FormHelperText>{errors.name}</FormHelperText>
        )}
      </FormControl>
      <div className={classes.buttonGroup}>
        <Button className={classes.button} disabled>
          Back
        </Button>
        <Button
          className={classes.button}
          onClick={handleNext}
          disabled={!isValid}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default Name;
