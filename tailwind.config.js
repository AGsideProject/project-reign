/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      customShadow: '0px 30px 90px rgba(0, 0, 0, 0.4)',
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
        'custom-lg': '0px 30px 90px rgba(0, 0, 0, 0.4)',
      },
      screens: {
        'iphone': '320px',
        'iphoneMax': '430px',
        'tablet': '768px',
        'laptop': '1024px',
        'desktop': '1280px',
      },
    },

  },
  plugins: [
    require('tailwindcss-animated')
  ],
};
