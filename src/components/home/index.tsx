import { useAnimate } from "framer-motion";
import React, { useEffect, useRef } from "react";

const LandingRoot = () => {
    

    const ref = useRef<HTMLDivElement>(null);
    const [, animate] = useAnimate();

    useEffect(() => {
        if (ref.current) {
            animate(
                ref.current,
                {
                    opacity: [0, 1],
                    x: [60, 0],
                },
                { duration: 0.8, ease: "easeInOut" }
            );
        }
    }, []);
    return (
        <div className="flex justify-center items-center h-full flex-col">
            <div className="text-6xl mb-5">Iconify</div>
            <div ref={ref} className="text-2xl my-5">
                One stop solution for your perfect logo
            </div>
            <button
                type="button"
                className="border-[1px] px-10 py-5 rounded-full mt-5 text-lg font-medium focus:ring-1 focus:border-2 hover:ring-1 hover:border-2"
            >
                Continue
            </button>
        </div>
    );
};

export default LandingRoot;
