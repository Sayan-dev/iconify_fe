import clsx from "clsx";
import React, { forwardRef } from "react";

type ChipProps = {
    name: String;
    selectChip: () => void;
    isActive: boolean;
};

const Chip = forwardRef<HTMLDivElement, ChipProps>(
    ({ name, selectChip, isActive }, ref) => {
        return (
            <div
                ref={ref}
                onClick={selectChip}
                className={clsx(
                    "border-[1px] px-4 py-2 rounded-full mx-2 my-3 cursor-pointer",
                    isActive ? "bg-black text-white" : null
                )}
            >
                {name}
            </div>
        );
    }
);

Chip.displayName = "Chip";

export default Chip;
