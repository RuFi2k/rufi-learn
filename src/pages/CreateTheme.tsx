import {
  makeStyles,
  Stepper,
  Step,
  StepLabel,
  StepContent,
  StepConnector,
  StepIconProps,
} from "@material-ui/core";
import { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Steps, StepIcon, AuthContext } from "../components";
import { MainLayout } from "../layouts";
import { createTheme, getCategories } from "../redux/categories";
import { getStepperPayload } from "../redux/stepper";
import { IStep } from "../types/forms";

const useStyles = makeStyles({
  stepper: {
    borderRadius: 12,
    boxShadow: "0px 0px 5px 1px rgba(0, 0, 0, 0.25)",
  },
});

const CreateTheme = (): JSX.Element => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [step, setStep] = useState<number>(0);
  const stepper = useSelector(getStepperPayload);
  const auth = useContext(AuthContext);

  const handleNext = (): void => {
    setStep((prev) => ++prev);
  };

  const handlePrev = (): void => {
    setStep((prev) => --prev);
  };

  const handleSubmit = (): void => {
    const { category, subcategory } = stepper;
    const theme = {
      description: stepper.description,
      timestamp: new Date().getTime(),
      name: stepper.name,
      author: auth?.currentUser?.email || "Unknown user",
      useful_links: stepper.links,
    };
    dispatch(
      createTheme({
        category,
        subcategory,
        theme,
      })
    );
  };
  useEffect(() => {
    dispatch(getCategories());
    // eslint-disable-next-line
  }, []);

  const stepProps = {
    next: handleNext,
    prev: handlePrev,
    submit: handleSubmit,
  };

  const steps: IStep[] = [
    {
      title: "Type a theme name",
      component: <Steps.Name {...stepProps} />,
    },
    {
      title: "Select a category",
      component: <Steps.Category {...stepProps} />,
    },
    {
      title: "Add some information",
      component: <Steps.AdditionalInformation {...stepProps} />,
    },
  ];

  return (
    <MainLayout withNavbar>
      <Stepper
        activeStep={step}
        classes={{ root: classes.stepper }}
        orientation="vertical"
        connector={<StepConnector />}
      >
        {steps.map((s, idx) => (
          <Step key={s.title}>
            <StepLabel
              StepIconComponent={(props: StepIconProps) => (
                <StepIcon props={props} number={idx + 1} />
              )}
            >
              {s.title}
            </StepLabel>
            <StepContent>{s.component}</StepContent>
          </Step>
        ))}
      </Stepper>
    </MainLayout>
  );
};

export default CreateTheme;
