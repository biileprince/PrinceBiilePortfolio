import forms from "@tailwindcss/forms";
import typography from "@tailwindcss/typography";
import plugin from "tailwindcss/plugin"; // Import the plugin function

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backdropBlur: {
        xs: "2px",
        sm: "4px",
        DEFAULT: "8px",
        md: "12px",
        lg: "16px",
        xl: "24px", // Merged from the duplicate definition
      },
      backgroundOpacity: {
        10: "0.1",
        20: "0.2",
      },
      borderOpacity: {
        20: "0.2",
      },
      zIndex: {
        60: "60",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    forms,
    typography,
    plugin(({ addVariant }) => {
      addVariant("children", "& > *"); // Fixed the plugin usage
    }),
  ],
};
