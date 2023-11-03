defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
    content: [
      "./src/**/*.{html,js,jsx,ts,tsx}",
    ],
    // Other Tailwind CSS configuration options here
    theme:
    {
      extend: {
        colors:{
          'darkblue':'#00336D',
        },
        fontFamily: {
          proxima: ['"Proxima Nova"', ...defaultTheme.fontFamily.sans]
        }
      }
    }
  };