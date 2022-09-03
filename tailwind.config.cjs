/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "light-primary": "hsl(0,0%,100%)",
        "light-secondary": "hsl(220, 35%,100%)",
        "light-content": "hsl(0,0%,9%)",
        "light-content-secondary": "hsl(0,0%,30%)",
        "dark-primary": "hsl(0, 0%, 13%)",
        "dark-secondary": "hsl(220, 12%, 20%)",
        "dark-content": "hsl(0, 0%, 100%)",
        "dark-content-secondary": "hsl(220, 12%, 70%)",
      },
    },
  },
  plugins: [],
};
