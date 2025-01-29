
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Your project files
    "./node_modules/flowbite/**/*.js", // Flowbite integration
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("flowbite/plugin"), // Add Flowbite plugin
  ],
};
