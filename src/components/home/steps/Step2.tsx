import React from "react";

type StepProps = {
    updatePrevious: () => void;
    updateNextSteps: () => void;
};

const Step2 = ({ updatePrevious, updateNextSteps }: StepProps) => {
    return (
        <>
            <div className="text-xl mb-5">
                Explain your business a little bit
            </div>
            <textarea className="h-[20vh] w-[30vw] border-[1px] focus:border-[1px]" />

            <button
                onClick={() => updatePrevious()}
                type="button"
                className="border-[1px] px-10 py-5 rounded-full mt-5 text-lg font-medium focus:ring-1 focus:border-2 hover:ring-1 hover:border-2"
            >
                Previous
            </button>
            <button
                onClick={() => updateNextSteps()}
                type="button"
                className="border-[1px] px-10 py-5 rounded-full mt-5 text-lg font-medium focus:ring-1 focus:border-2 hover:ring-1 hover:border-2"
            >
                Continue
            </button>
        </>
    );
};
export default Step2;
