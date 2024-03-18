/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
   content: ["./src/**/*.{js,jsx,ts,tsx}"],
   theme: {
    extend: {
      colors:{
        cherryRed: 'rgb(229, 9, 20)',
      },
      fontFamily:{
        'nsans-light':["Nsans Light"],
        'nsans-medium':["Nsans Medium"],
        'nsans-bold':["Nsans Bold"],
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}); 