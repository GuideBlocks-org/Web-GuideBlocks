const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      zIndex: { 60: '60', 70: '70', 80: '80', 90: '90', 100: '100' },
    },
  },
  plugins: [],
};
