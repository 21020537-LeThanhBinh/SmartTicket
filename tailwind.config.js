/** @type {import("tailwindcss").Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    // "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "absolute-red": "#FF0000",
        "absolute-blue": "#0000FF",
        "pink": "#FFBBBB",
        "light-yellow": "#FFEEC4",
        "light-green": "#CCF7EF",
        "light-blue": "#B8E1FF",
      }
    },
  },
  plugins: [],
}

