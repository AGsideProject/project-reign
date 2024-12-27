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
        glassWhite: 'rgba(255, 255, 255, 0.18)',
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
      spacing: {
        "1/12": "8.3333%",
        "1/6": "16.6667%",
        "1/5": "20%",
        "1/4": "25%",
        "1/3": "33.3333%",
        "2/5": "40%",
        "1/2": "50%",
        "3/5": "60%",
        "2/3": "66.666667%",
        "3/4": "75%",
        "4/5": "80%",
        "5/6": "83.3333%",
        "11/12": "91.6667%",
        "full": "100%"
      },
      backdropBlur: {
        glass: '7.4px', // Add custom blur
      }

    },

  },
  plugins: [
    require('tailwindcss-animated'),
    // require('@tailwindcss/aspect-ratio')
  ],
};
