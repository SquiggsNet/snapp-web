/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{gjs,gts,hbs,html,js,ts}',
    './node_modules/snapp-ui/app/**/*.{gjs,gts,hbs,html,js,ts}',
    './node_modules/snapp-ui/addon/**/*.{gjs,gts,hbs,html,js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-700': 'var(--primary-700)',
        'primary-800': 'var(--primary-800)',
        'primary-900': 'var(--primary-900)',
        secondary: 'var(--secondary)',
        background: 'var(--background)',
        text: 'var(--text)',
      },
    },
  },
  plugins: [],
};
