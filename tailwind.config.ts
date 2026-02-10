import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                navy: "#0C2C47",
                mint: "#ABC8CA",
                orange: "#BF512C",
                gold: "#C5A059",
                mauve: "#D6C9C5",
                testimonialGreen: "#2E5749",
                "dark-green": "#0B3D2E",
                forest: "#2E5749",
                light: "#F9FBFB",
                yellow: "#DA9B2B",
                text: {
                    body: "#0C2C47",
                },
            },
            fontFamily: {
                sans: ["var(--font-inter)", "sans-serif"],
                display: ["var(--font-display)", "serif"],
            },
            boxShadow: {
                "premium": "0 20px 50px rgba(12, 44, 71, 0.1)",
                "premium-hover": "0 30px 60px rgba(12, 44, 71, 0.15)",
                "premium-navy": "0 10px 30px rgba(12, 44, 71, 0.2)",
            },
            animation: {
                "fade-in": "fadeIn 0.5s ease-out forwards",
                "fade-in-up": "fadeInUp 0.8s ease-out forwards",
            },
            keyframes: {
                fadeIn: {
                    "0%": { opacity: "0" },
                    "100%": { opacity: "1" },
                },
                fadeInUp: {
                    "0%": { opacity: "0", transform: "translateY(20px)" },
                    "100%": { opacity: "1", transform: "translateY(0)" },
                },
            },
        },
    },
    plugins: [],
};
export default config;
