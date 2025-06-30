/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        text: "#0b052e",
        background: "#F7F9F9",
        primary: "#3E375D",
        secondary: "#f0f9f9",
        accent: "#8ebbc7",
      },
      fontFamily: {
        heading: "Lato",
        body: "Poppins",
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(160deg, rgba(62, 55, 93, 1) 22%, rgba(142, 187, 199, 1) 87%)",
      },
      boxShadow: {
        custom: "0 4px 6px -1px #f0f9f9, 0 2px 4px -2px #f0f9f9",
      },
    },
  },
  plugins: [],
};

