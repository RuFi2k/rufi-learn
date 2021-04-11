import {
  FormControl,
  FormHelperText,
  makeStyles,
  TextField,
} from "@material-ui/core";
import { useFormik } from "formik";
import React, { createRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { object, string } from "yup";
import { Button, Input } from "..";
import { addLink, getLinks } from "../../redux/stepper";
import UsefulLink from "../UsefulLink";

const useStyles = makeStyles({
  button: {
    width: 120,
    height: 40,
    fontSize: "20px",
    fontWeight: 500,
    "&:first-child": {
      marginRight: 10,
    },
  },
  buttonGroup: {
    marginTop: 12,
  },
  linksInput: {
    marginTop: 12,
  },
  linksList: {
    marginTop: 12,
  },
});

type Props = {
  submit: () => void;
  prev: () => void;
};

export const AdditionalInformation = ({ submit, prev }: Props): JSX.Element => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const linkInputRef = createRef<HTMLInputElement>();

  const links = useSelector(getLinks);

  useEffect(() => {
    console.log(links);
  }, [links]);

  const schema = object().shape({
    description: string().required("Description is required."),
  });

  const initialValues = { description: "", link: "" };
  const {
    values,
    errors,
    touched,
    isValid,
    setFieldValue,
    setTouched,
  } = useFormik({
    initialValues,
    validateOnMount: true,
    onSubmit: () => undefined,
    validationSchema: schema,
  });

  const touch = (e: React.FocusEvent<HTMLInputElement>) => {
    setTouched({
      ...touched,
      [e.target.name]: true,
    });
  };

  const handleDescriptionChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setFieldValue("description", e.target.value);
  };

  const handleAddLink = (e: React.FormEvent): void => {
    e.preventDefault();
    if (
      linkInputRef.current?.value &&
      !links.some((l) => l === linkInputRef.current?.value)
    ) {
      console.log("dispatch");
      dispatch(addLink(linkInputRef.current.value));
    }
    setFieldValue("link", "");
  };

  return (
    <div>
      <div>
        <FormControl
          error={!!errors.description && touched.description}
          fullWidth
        >
          <TextField
            multiline
            label="Description"
            value={values.description}
            onBlur={touch}
            variant="outlined"
            name="description"
            error={!!errors.description && touched.description}
            onChange={handleDescriptionChange}
          />
          {errors.description && touched.description && (
            <FormHelperText>{errors.description}</FormHelperText>
          )}
        </FormControl>
        <form onSubmit={handleAddLink}>
          <input
            value={values.link}
            ref={linkInputRef}
            style={{ display: "none" }}
          />
          <Input
            value={values.link}
            label="Add some links (not required)"
            className={classes.linksInput}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setFieldValue("link", e.target.value)
            }
            onBlur={handleAddLink}
          />
          <button type="submit" style={{ display: "none" }}>
            submit
          </button>
        </form>
        <div className={classes.linksList}>
          {links.map((link) => (
            <UsefulLink text={link} key={link} />
          ))}
        </div>
      </div>
      <div className={classes.buttonGroup}>
        <Button className={classes.button} onClick={prev}>
          Back
        </Button>
        <Button className={classes.button} onClick={submit} disabled={!isValid}>
          Submit
        </Button>
      </div>
    </div>
  );
};

export default AdditionalInformation;
