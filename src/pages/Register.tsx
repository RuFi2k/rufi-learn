import { makeStyles } from "@material-ui/core";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { object, ref, string } from "yup";
import { Button, Input, Link } from "../components";
import { AuthLayout } from "../layouts";
import { IRegister } from "../types/forms";

const useStyles = makeStyles({
  loginForm: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
  },
  input: {
    marginBottom: 20,
  },
  button: {
    marginTop: 60,
  },
  link: {
    marginTop: 12,
  },
});

const Register = (): JSX.Element => {
  const classes = useStyles();

  const [disabled, toggleDisabled] = useState<boolean>(false);

  const handleSubmit = (values: IRegister): void => {
    toggleDisabled(true)
    console.log(values)
    setTimeout(() => {
      toggleDisabled(false)
    }, 1500)
  };

  const schema = object().shape({
    username: string().required("Field is required"),
    email: string()
      .required("Field is required")
      .email("Incorrect email format"),
    password: string().required("Field is required"),
    confirmPassword: string()
      .oneOf([ref("password")], "Passwords do not match")
      .required("Passwords do not match"),
  });

  const initialValues: IRegister = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const {
    values,
    errors,
    touched,
    isValid,
    setFieldValue,
    setTouched,
  } = useFormik<IRegister>({
    initialValues,
    validateOnMount: true,
    onSubmit: handleSubmit,
    validationSchema: schema,
  });

  const touch = (e: React.FocusEvent<HTMLInputElement>) => {
    setTouched({
      ...touched,
      [e.target.name]: true,
    });
  };

  return (
    <AuthLayout>
      <form className={classes.loginForm}>
        <Input
          className={classes.input}
          label="User name"
          name="username"
          onBlur={touch}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setFieldValue("username", e.target.value)
          }
          error={!!errors.username && touched.username}
          helperText={touched.username && errors.username}
        />
        <Input
          className={classes.input}
          label="Email"
          name="email"
          onBlur={touch}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setFieldValue("email", e.target.value)
          }
          error={!!errors.email && touched.email}
          helperText={touched.email && errors.email}
        />
        <Input
          className={classes.input}
          label="Password"
          type="password"
          name="password"
          onBlur={touch}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setFieldValue("password", e.target.value)
          }
          error={!!errors.password && touched.password}
          helperText={touched.password && errors.password}
        />
        <Input
          label="Confirm Password"
          type="password"
          name="confirmPassword"
          onBlur={touch}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setFieldValue("confirmPassword", e.target.value)
          }
          error={!!errors.confirmPassword && touched.confirmPassword}
          helperText={touched.confirmPassword && errors.confirmPassword}
        />
        <Button
          onClick={(e: React.MouseEvent) => handleSubmit(values)}
          className={classes.button}
          disabled={disabled || !isValid}
        >
          Create an account
        </Button>
        <Link className={classes.link} to="/login">
          Already have an account? Login
        </Link>
      </form>
    </AuthLayout>
  );
};

export default Register;
