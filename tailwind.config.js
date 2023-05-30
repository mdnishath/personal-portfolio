/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2FF093",
        surfece: "#1a222c",
        overlay: "#24303F",
        border: "#2e3742",
        borderLight: "#545f6c",
        text: "#E2E8F0",
        "text-dark": "#aeb7c0",
        "overlay-light": "#313D4A ",
      },
      boxShadow: {
        "sidbar-left": "2px 80px 10px  rgba(0, 0, 0, 0.15)",
        "dark-bottom": "0px 2px 10px rgba(0, 0, 0, 0.15)",
      },
    },
  },
  variants: {
    scrollbar: ["rounded"],
  },
  plugins: [
    require("tailwind-scrollbar"),
    require("daisyui"), // Enable the scrollbar plugin
    // ...
  ],
  daisyui: {
    styled: true,
    themes: false,
    base: true,
    utils: true,
    logs: true,
    rtl: true,
    prefix: "",
    darkTheme: "dark",
  },
};
