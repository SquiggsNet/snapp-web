/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{gjs,gts,hbs,html,js,ts}',
    // './node_modules/snapp-ui-beta/app/**/*.{gjs,gts,hbs,html,js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        background: 'var(--background)',
        text: 'var(--text)',
      },
    },
  },
  plugins: [],
};
