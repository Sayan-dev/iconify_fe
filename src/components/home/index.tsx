import { StepperContext } from "@/context/StepperContext";
import { useAnimate } from "framer-motion";
import React, { useContext, useEffect, useRef } from "react";
import Step1 from "./steps/Step1";
import Step2 from "./steps/Step2";
import Step3 from "./steps/Step3";
import Step0 from "./steps/Step0";
import IconInfoProvider from "@/context/IconInfo";

const LandingRoot = () => {
    const { steps, updateNextSteps, updatePrevious } =
        useContext(StepperContext);

    const StepComponent = () => {
        switch (steps) {
            case 0:
                return <Step0 updateNextSteps={updateNextSteps} />;
            case 1:
                return <Step1 updateNextSteps={updateNextSteps} />;
            case 2:
                return (
                    <Step2
                        updatePrevious={updatePrevious}
                        updateNextSteps={updateNextSteps}
                    />
                );

            case 3:
                return (
                    <Step3
                        updatePrevious={updatePrevious}
                        updateNextSteps={updateNextSteps}
                    />
                );
        }
    };

    return (
        <div className="flex justify-center items-center min-h-full flex-col">
            <IconInfoProvider>
                <StepComponent />
            </IconInfoProvider>
        </div>
    );
};

export default LandingRoot;
