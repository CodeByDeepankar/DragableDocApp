// tailwind.config.js
exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  safelist: [
    {
      pattern: /bg-(red|blue|green|yellow|purple|pink|gray)-(100|200|300|400|500|600|700|800|900)/,
    },
  ],
};
