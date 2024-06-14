import React, { PropsWithChildren } from "react";

type StepperContextProps = {
    steps: number;
    updateNextSteps: () => void;
    updatePrevious: () => void;
};

const initialState: StepperContextProps = {
    steps: 0,
    updateNextSteps: () => {},
    updatePrevious: () => {},
};

export const StepperContext = React.createContext(initialState);

const StepperProvider = ({ children }: PropsWithChildren) => {
    const [steps, setSteps] = React.useState(0);

    const handleSetSteps = () => {
        setSteps((prevState) => prevState + 1);
    };
    const handleSetPreviousSteps = () => {
        setSteps((prevState) => {
            if (prevState > 0) return prevState - 1;
            return 0;
        });
    };
    const context = React.useMemo<StepperContextProps>(
        () => ({
            steps,
            updateNextSteps: handleSetSteps,
            updatePrevious: handleSetPreviousSteps,
        }),
        [steps]
    );

    return (
        <StepperContext.Provider value={context}>
            {children}
        </StepperContext.Provider>
    );
};

export default StepperProvider;
