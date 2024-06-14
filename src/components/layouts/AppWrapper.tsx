import React, { PropsWithChildren } from "react";

const AppWrapper = ({ children }: PropsWithChildren) => {
    return <div className="max-w-[1080px] mx-auto h-[100vh]">{children}</div>;
};

export default AppWrapper;
