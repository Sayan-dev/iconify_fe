import Chip from "@/components/common/Chip";
import { IconInfoContext } from "@/context/IconInfo";
import { useAnimate } from "framer-motion";
import React, { useContext, useEffect } from "react";

type StepProps = {
    updateNextSteps: () => void;
};

const looks = [
    "Elegant",
    "Flashy",
    "Colorful",
    "Minimalist",
    "Vintage",
    "Playful",
    "Modern",
    "Organic",
    "Industrial",
    "Abstract",
];

const Step1 = ({ updateNextSteps }: StepProps) => {
    const [, animate] = useAnimate();
    const { look_and_feel, updateLookAndFeel } = useContext(IconInfoContext);
    const refs = React.useRef([React.createRef<HTMLDivElement>()]);

    refs.current = looks.map(() => React.createRef<HTMLDivElement>());

    useEffect(() => {
        refs.current.forEach((ref, index) => {
            if (ref.current) {
                animate(
                    ref.current,
                    {
                        y: [0, -20, 0],
                    },
                    { duration: 0.2 * index, ease: "easeOut" }
                );
            }
        });
    }, []);

    console.log("Ohho", look_and_feel);

    const handleSelectChip = (look: string) => {
        console.log("Hi");
        updateLookAndFeel(look);
    };

    const isActiveChip = (look: string) => {
        console.log(look_and_feel, look, "Hello");
        return look_and_feel === look;
    };
    return (
        <>
            <div className="text-xl mb-5">
                Choose how you want your Icons Look should be
            </div>
            <div className="flex flex-row justify-center flex-wrap px-4 w-[60%]">
                {looks.map((look, index) => (
                    <Chip
                        ref={refs.current[index]}
                        isActive={isActiveChip(look)}
                        selectChip={() => handleSelectChip(look)}
                        key={look}
                        name={look}
                    />
                ))}
            </div>

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

export default Step1;
