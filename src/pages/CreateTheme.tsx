import {
  makeStyles,
  Stepper,
  Step,
  StepLabel,
  StepContent,
  StepConnector,
  StepIconProps,
} from "@material-ui/core";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Steps, StepIcon } from "../components";
import { MainLayout } from "../layouts";
import { refreshStepperState } from "../redux/stepper";
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

  const handleNext = (): void => {
    setStep((prev) => ++prev);
  };

  const handlePrev = (): void => {
    setStep((prev) => --prev);
  };

  const handleSubmit = (): void => {
    dispatch(refreshStepperState());
    setStep(0);
  };

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
