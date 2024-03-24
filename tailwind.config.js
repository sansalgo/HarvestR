/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      borderRadius: {
        small: 'var(--r-radius-small)',
        medium: 'var(--r-radius-medium)',
        large: 'var(--r-radius-large)',
      },
      opacity: {
        disabled: 'var(--r-disabled-opacity)',
      },
    },
  },
  plugins: [],
};
