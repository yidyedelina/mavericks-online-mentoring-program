const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {

 
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],

  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/tailwind-datepicker-react/dist/**/*.js',
  ],
  plugins: [require('@tailwindcss/forms')],

  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
}
