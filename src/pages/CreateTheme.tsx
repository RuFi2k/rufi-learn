import {
  makeStyles,
  Stepper,
  Step,
  StepLabel,
  StepContent,
  StepConnector,
} from "@material-ui/core";
import { useState } from "react";
import { Steps } from "../components";
import { MainLayout } from "../layouts";
import { IStep } from "../types/forms";

const useStyles = makeStyles({
  stepper: {
    borderRadius: 12,
    boxShadow: "0px 0px 5px 1px rgba(0, 0, 0, 0.25)",
  },
});

const CreateTheme = (): JSX.Element => {
  const classes = useStyles();

  const [step, setStep] = useState<number>(0);

  const handleNext = (): void => {
    setStep((prev) => ++prev);
  };

  const handlePrev = (): void => {
    setStep((prev) => --prev);
  };

  const handleSubmit = (): void => undefined;

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
        {steps.map((s) => (
          <Step key={s.title}>
            <StepLabel>{s.title}</StepLabel>
            <StepContent>{s.component}</StepContent>
          </Step>
        ))}
      </Stepper>
    </MainLayout>
  );
};

export default CreateTheme;
