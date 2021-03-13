import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import { Button, Input, Link } from "../components";
import { AuthLayout } from "../layouts";
import { useFormik } from "formik";
import { object, string } from "yup";
import { ILogin } from "../types/forms";
import { ConfirmGuestLoginModal } from "../components/modals";

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

const Login = (): JSX.Element => {
  const classes = useStyles();

  const [disabled, toggleDisabled] = useState<boolean>(false);

  const [modal, toggleModal] = useState<boolean>(false);

  const handleGuestClick = (): void => {
    toggleModal(true);
  };

  const handleSubmit = (values: ILogin): void => {
    toggleDisabled(true);
    console.log(values);
    setTimeout(() => {
      toggleDisabled(false);
    }, 1500);
  };

  const schema = object().shape({
    email: string()
      .required("Field is required")
      .email("Incorrect email format"),
    password: string().required("Field is required"),
  });

  const initialValues: ILogin = { email: "", password: "" };
  const {
    values,
    errors,
    touched,
    isValid,
    setFieldValue,
    setTouched,
  } = useFormik<ILogin>({
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
        <Button
          onClick={(e: React.MouseEvent) => handleSubmit(values)}
          className={classes.button}
          disabled={disabled || !isValid}
        >
          Login
        </Button>
        <Link className={classes.link} to="/register">
          Don't have an account? Register
        </Link>
        <Link className={classes.link} onClick={handleGuestClick}>
          Guest login
        </Link>
        <ConfirmGuestLoginModal
          open={modal}
          onClose={() => {
            toggleModal(false);
          }}
        />
      </form>
    </AuthLayout>
  );
};

export default Login;
