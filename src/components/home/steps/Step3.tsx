import { IconInfoContext } from "@/context/IconInfo";
import { IconCross, IconEye } from "@tabler/icons-react";
import React, { useContext } from "react";

type StepProps = {
    updatePrevious: () => void;
    updateNextSteps: () => void;
};

const app_colors = [
    { name: "White", color: "#FFFFFF" },
    { name: "Black", color: "#000000" },
    { name: "Red", color: "#FF0000" },
    { name: "Lime", color: "#00FF00" },
    { name: "Blue", color: "#0000FF" },
    { name: "Yellow", color: "#FFFF00" },
    { name: "Cyan/Aqua", color: "#00FFFF" },
    { name: "Magenta/Fuchsia", color: "#FF00FF" },
    { name: "Silver", color: "#C0C0C0" },
    { name: "Gray", color: "#808080" },
    { name: "Maroon", color: "#800000" },
    { name: "Olive", color: "#808000" },
    { name: "Green", color: "#008000" },
    { name: "Purple", color: "#800080" },
    { name: "Teal", color: "#008080" },
    { name: "Navy", color: "#000080" },
    { name: "DarkRed", color: "#8B0000" },
    { name: "Brown", color: "#A52A2A" },
    { name: "Firebrick", color: "#B22222" },
    { name: "Crimson", color: "#DC143C" },
    { name: "Tomato", color: "#FF6347" },
    { name: "Coral", color: "#FF7F50" },

    { name: "IndianRed", color: "#CD5C5C" },
    { name: "LightCoral", color: "#F08080" },
    { name: "DarkSalmon", color: "#E9967A" },
    { name: "Salmon", color: "#FA8072" },
    { name: "LightSalmon", color: "#FFA07A" },
    { name: "OrangeRed", color: "#FF4500" },
    { name: "DarkOrange", color: "#FF8C00" },
    { name: "Orange", color: "#FFA500" },
    { name: "Gold", color: "#FFD700" },
    { name: "DarkGoldenRod", color: "#B8860B" },
    { name: "GoldenRod", color: "#DAA520" },
    { name: "PaleGoldenRod", color: "#EEE8AA" },
    { name: "DarkKhaki", color: "#BDB76B" },
    { name: "Khaki", color: "#F0E68C" },
    { name: "YellowGreen", color: "#9ACD32" },
    { name: "DarkOliveGreen", color: "#556B2F" },
    { name: "OliveDrab", color: "#6B8E23" },
    { name: "LawnGreen", color: "#7CFC00" },
    { name: "Chartreuse", color: "#7FFF00" },
    { name: "GreenYellow", color: "#ADFF2F" },
    { name: "DarkGreen", color: "#006400" },
    { name: "ForestGreen", color: "#228B22" },
    { name: "LimeGreen", color: "#32CD32" },
    { name: "LightGreen", color: "#90EE90" },
    { name: "PaleGreen", color: "#98FB98" },
    { name: "DarkSeaGreen", color: "#8FBC8B" },
    { name: "MediumSeaGreen", color: "#3CB371" },
    { name: "SeaGreen", color: "#2E8B57" },
    { name: "LightSeaGreen", color: "#20B2AA" },
    { name: "DarkCyan", color: "#008B8B" },
    { name: "LightCyan", color: "#E0FFFF" },
    { name: "DarkTurquoise", color: "#00CED1" },
    { name: "Turquoise", color: "#40E0D0" },
    { name: "MediumTurquoise", color: "#48D1CC" },
    { name: "PaleTurquoise", color: "#AFEEEE" },
    { name: "AquaMarine", color: "#7FFFD4" },
    { name: "PowderBlue", color: "#B0E0E6" },
    { name: "CadetBlue", color: "#5F9EA0" },
    { name: "SteelBlue", color: "#4682B4" },
    { name: "LightSteelBlue", color: "#B0C4DE" },
    { name: "LightBlue", color: "#ADD8E6" },
    { name: "SkyBlue", color: "#87CEEB" },
];
const Step3 = ({ updatePrevious, updateNextSteps }: StepProps) => {
    const { colors, updateColors } = useContext(IconInfoContext);
    const isColorPresent = (color: string) =>
        Object.keys(colors).findIndex(
            (key) => colors[key as "a" | "b" | "c"] === color
        ) > -1;
    const handleColorPicker = (color: string) => {
        if (isColorPresent(color)) return;
        if (!colors.a && !colors.b && !colors.c) {
            updateColors({
                ...colors,
                a: color,
            });
        }
        if (colors.a && !colors.b && !colors.c) {
            updateColors({
                ...colors,
                b: color,
            });
        }
        if (colors.a && colors.b) {
            updateColors({
                ...colors,
                c: color,
            });
        }
    };

    const removeColors = (key: "a" | "b" | "c") => {
        if (key === "a") {
            updateColors({
                ...colors,
                a: colors.b ?? null,
                b: colors.c ?? null,
                c: null,
            });
        }
        if (key === "b") {
            updateColors({
                ...colors,
                b: colors.c ?? null,
                c: null,
            });
        }
        if (key === "c") {
            updateColors({
                ...colors,
                c: null,
            });
        }
    };
    return (
        <>
            <div className="text-xl mb-5">
                Choose few colors that defines your company
            </div>
            <div className="grid grid-cols-3 my-4">
                {Object.keys(colors).map((colorKey) => (
                    <div
                        key={colorKey}
                        onClick={() =>
                            removeColors(colorKey as "a" | "b" | "c")
                        }
                        style={{
                            backgroundColor:
                                colors[colorKey as "a" | "b" | "c"] || "",
                        }}
                        className="w-24 h-24 mx-2"
                    />
                ))}
            </div>
            <div className="grid grid-cols-8 w-[50%] m-auto ">
                {app_colors.map((color) => {
                    const isActive = isColorPresent(color.color);
                    return (
                        <div
                            key={color.color}
                            className={`w-10 h-10 m-2 rounded`}
                            style={{
                                boxShadow: isActive
                                    ? ""
                                    : "0px 1px 3px #202020",
                            }}
                        >
                            <div
                                onClick={() => handleColorPicker(color.color)}
                                style={{
                                    backgroundColor: color.color,
                                }}
                                className="w-full h-full"
                            />
                            {isActive && (
                                <div className="relative -top-10  w-full h-full opacity-50 bg-black text-white flex items-center justify-center">
                                    <IconEye height={16} />
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
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

export default Step3;
