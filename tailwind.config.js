/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        background: "url('/background.jpg')",
      },
      animation: {
        "fade-in": "fadeIn 0.8s ease-in-out",
        "fade-in-delay": "fadeIn 0.8s ease-in-out 0.2s both",
        "fade-in-delay-2": "fadeIn 0.8s ease-in-out 0.4s both",
        "slide-up": "slideUp 0.8s ease-out",
        "slide-up-delay": "slideUp 0.8s ease-out 0.3s both",
        "slide-up-delay-2": "slideUp 0.8s ease-out 0.6s both",
        "bounce-in": "bounceIn 0.8s ease-out",
        "bounce-in-delay": "bounceIn 0.8s ease-out 0.2s both",
        "bounce-in-delay-2": "bounceIn 0.8s ease-out 0.4s both",
        "bounce-in-delay-3": "bounceIn 0.8s ease-out 0.6s both",
        float: "float 3s ease-in-out infinite",
        "float-delay": "float 3s ease-in-out 0.5s infinite",
        "float-delay-2": "float 3s ease-in-out 1s infinite",
        "float-delay-3": "float 3s ease-in-out 1.5s infinite",
        "float-delay-4": "float 3s ease-in-out 2s infinite",
        "float-delay-5": "float 3s ease-in-out 2.5s infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        bounceIn: {
          "0%": { opacity: "0", transform: "scale(0.3)" },
          "50%": { opacity: "1", transform: "scale(1.05)" },
          "70%": { transform: "scale(0.9)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};
