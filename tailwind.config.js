/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    colors: {
      transparent: "transparent",
      black: "hsl(0, 0, 0%)",
      white: "hsl(0, 0%, 100%)",

      red: {
        500: "hsl(356, 69%, 56%)", // bright-red
        700: "hsl(348, 97%, 39%)", // youtube-red
      },
      green: {
        500: "hsl(163, 72%, 41%)", // lime-green
        700: "hsl(146, 68%, 55%)", // toggle-gradient-end
      },
      teal: {
        500: "hsl(210, 78%, 56%)", // toggle-gradient-start
      },
      blue: {
        50: "hsl(232, 33%, 91%)", // hover-state (card-bg)
        100: "hsl(227, 47%, 96%)", // light-grayish-blue (card-bg)
        200: "hsl(225, 100%, 98%)", // very-pale-blue (top-bg-pattern)
        300: "hsl(228, 12%, 44%)", // dark-grayish-blue (Text)
        400: "hsl(228, 34%, 66%)", // desaturated-blue (text)
        500: "hsl(208, 92%, 53%)", // facebook-blue
        600: "hsl(203, 89%, 53%)", // twitter-blue
        700: "hsl(228, 28%, 20%)", // dark-desaturated-blue (card-bg)
        800: "hsl(232, 19%, 15%)", // very-dark-blue (top-bg-pattern)
        900: "hsl(230, 17%, 14%)", // very-dark-blue (bg-text)
      },
      navy: {
        600: "hsl(228, 26%, 27%)", // hover-state (card-bg)
      },
      yellow: {
        500: "hsl(37, 97%, 70%)", // instagram-gradient-start
      },
      pink: {
        500: "hsl(329, 70%, 58%)", // instagram-gradient-end
      },
      gray: {
        500: "hsl(230, 22%, 74%)", // toggle-light-theme
      },
    },

    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
