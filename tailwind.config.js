/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        100: "100px",
        72: "72px",
        48: "48px",
        40: "40px",
        36: "36px",
        30: '30px',
        24: "24px",
        20: "20px",
        18: "18px",
        16: "16px",
        14: "14px",
        12: "12px",
      },

      lineHeight: {
        72: "72px",
        56: "56px",
        32: "32px",
        24: "24px",
        20: "20px",
        18: "18px",
        16: "16px",
      },

      colors: {
        transparent: "transparent",
        current: "currentColor",

        white: "#FFFDF6",
        black: "#353532",
        red: "#FF4242",
        grey: "#D9D7D0",
        light_grey: "#FDFBF4",
        cyan: "#38DDD3",
        pink: "#FF4BC2",
        yellow: "#FFC42B",
        green: "#46C943",
        blue: "#5077FF",
        purple: "#BC67FF"
      },

      screens: {
        mobile: "320px",

        tablet: "768px",

        laptop: "1024px",

        aboutBreak: "1220px",

        desktop: "1440px",

        desktopMax: "1920px",
      },

      keyframes: {
        party: {
          '0%': {
            fill: "#38DDD3",
            transform: "rotate(-360deg)" },
          '17%': { fill: "#FF4BC2" },
          '34%': { fill: "#FFC42B" },
          '41%': { fill: "#FF4242" },
          '58%': { fill: "#46C943" },
          '75%': { fill: "#5077FF" },
          '92%': { fill: "#BC67FF" },
          '100%': { fill: "#38DDD3" },
        },
      },
      animation: {
        'party-mode': 'party 3s linear infinite',
      },
    },
  },
  plugins: [],
};