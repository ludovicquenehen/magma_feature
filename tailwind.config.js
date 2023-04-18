/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  theme: {
    extend: {
      colors: {
        light: '#FFFFFF',
        dark: '#1C1F27',
        gray: '#5F6C85',
        neutral: '#E2E8F0',
        'neutral-light': '#F8FAFC',
        // status background
        'highly-active-light': '#F4F3FF',
        'active-light': '#ECFDF3',
        'overbooked-light': '#FEF3F2',
        'observer-light': '#EEF4FF',
        'sleeper-light': '#FFFAEB',
        'invited-light': '#F8F9FC',
        // status font
        'highly-active': '#6938EF',
        active: '#03874C',
        overbooked: '#D92D20',
        observer: '#444CE7',
        sleeper: '#B25504',
        invited: '#3E4784',
        // ripple
        'ripple-1': '#EEF4FF',
        'ripple-2': '#E0EAFF'
      }
    },
  },
  plugins: []
}

