import React, { PropsWithChildren, useState } from "react";

type IconColors = {
    a: string | null;
    b: string | null;
    c: string | null;
};

interface IconState {
    look_and_feel: string;
    colors: IconColors;
}

interface IconInfoContext extends IconState {
    look_and_feel: string;
    colors: IconColors;
    updateLookAndFeel: (look: string) => void;
    updateColors: (colors: IconColors) => void;
}

const initialState = {
    look_and_feel: "",
    colors: {
        a: null,
        b: null,
        c: null,
    },
};

const initialContext: IconInfoContext = {
    ...initialState,
    updateLookAndFeel: (look: string) => {},
    updateColors: (colors: IconColors) => {},
};

export const IconInfoContext = React.createContext(initialContext);

const IconInfoProvider = ({ children }: PropsWithChildren) => {
    const [state, setState] = useState<IconState>(initialState);

    const updateLookAndFeel = React.useCallback((look: string) => {
        setState((prevState) => {
            const newState: IconState = { ...prevState, look_and_feel: look };
            return newState;
        });
    }, []);

    const updateColors = React.useCallback((colors: IconColors) => {
        setState((prevState) => {
            const newState: IconState = { ...prevState, colors };
            return newState;
        });
    }, []);

    const context = React.useMemo<IconInfoContext>(
        () => ({
            look_and_feel: state.look_and_feel,
            colors: state.colors,
            updateLookAndFeel,
            updateColors,
        }),
        [state.look_and_feel, state.colors, updateLookAndFeel, updateColors]
    );

    return (
        <IconInfoContext.Provider value={context}>
            {children}
        </IconInfoContext.Provider>
    );
};

export default IconInfoProvider;
