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
      green: "hsl(163, 72%, 41%)", // Lime Green
      red: "hsl(356, 69%, 56%)", // Bright Red
      "facebook-blue": "hsl(208, 92%, 53%)", // Facebook Blue
      "twitter-blue": "hsl(203, 89%, 53%)", // Twitter Blue
      "instagram-yellow": "hsl(37, 97%, 70%)", // Instagram Gradient Start
      "instagram-pink": "hsl(329, 70%, 58%)", // Instagram Gradient End
      "youtube-red": "hsl(348, 97%, 39%)", // YouTube Red

      teal: "hsl(210, 78%, 56%)", // Toggle Gradient Start
      emerald: "hsl(146, 68%, 55%)", // Toggle Gradient End
      gray: "hsl(230, 22%, 74%)", // Toggle Light Theme

      charcoal: "hsl(230, 17%, 14%)", // Very Dark Blue (BG and Text)
      navy: "hsl(232, 19%, 15%)", // Very Dark Blue (Top BG Pattern)
      "dark-blue": "hsl(228, 28%, 20%)", // Dark Desaturated Blue (Card BG)
      "muted-blue": "hsl(228, 34%, 66%)", // Desaturated Blue (Text)

      "pale-blue": "hsl(225, 100%, 98%)", // Very Pale Blue (Top BG Pattern)
      "light-blue": "hsl(227, 47%, 96%)", // Light Grayish Blue (Card BG)
      "subdued-blue": "hsl(228, 12%, 44%)", // Dark Grayish Blue (Text)
      white: "hsl(0, 0%, 100%)", // (BG and Text)
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
