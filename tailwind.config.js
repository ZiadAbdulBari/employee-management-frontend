/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors:{
        primary:"#0B2447",
        secondary:{
          1:'#FFC93C',
        }
        
      },
      shadow: {
        1:"0px_0px_5px_2px_rgba(138,138,138,1)",
        2:'0px_-4px_5px_rgba(0, 0, 0, 0.05)'
      }
    }
  },
  plugins: [],
}

