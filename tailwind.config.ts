import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        colors: {
            white: "var(--white)",
            black: "var(--black)",
            primary: "var(--primary)",
        },
        extend: {
            colors: {
                faded: "var(--faded)",
                light: "var(--light)",
                transparent: "transparent",
                dark: "var(--background-dark)",
                "dark-grey": "var(--dark-grey)",
                "dark-grey-2": "var(--dark-grey-2)",
                "dark-line": "var(--dark-line)",
                "faded-dark": "var(--faded-dark)",
                "light-grey": "var(--light-grey)",
                "background-light": "var(--background-light)",
                "background-dark": "var(--background-dark)",
                primary: "var(--primary)",
                accent: "var(--accent)",
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
        },
    },
    plugins: [],
};
export default config;
