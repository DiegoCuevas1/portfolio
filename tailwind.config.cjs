defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
    content: [
      "./src/**/*.{html,js,jsx,ts,tsx}",
    ],
    theme:
    {
      extend: {
        colors:{
          'darkblue':'#191970',
          'white':'#ededed'
        },
        fontFamily: {
          proxima: ['"Proxima Nova"', ...defaultTheme.fontFamily.sans]
        }
      }
    }
  };