/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        sm:'576px',
        md:'768px',
        lg:'992px',
        xl:'1200px',
        'xxl':'1400px'
      },
      boxShadow :{
          "3xl":"0px 0px 14px 0px #b5a5a5"
      }

    },
  },
  plugins: [],
}

