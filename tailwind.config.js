module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Path to all your template files
  ],
  theme: {
    extend: {
       keyframes: {
        fadeInUp: {
          "0%": {
            opacity: 0,
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        fadeInUp: "fadeInUp 0.30s ease forwards",
      },
       fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}