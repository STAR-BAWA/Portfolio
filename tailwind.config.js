/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#10B981', // Emerald green
                    light: '#34D399',   // Light green
                    dark: '#059669',    // Dark green
                },
                dark: {
                    DEFAULT: '#0a0a0a',
                    secondary: '#1a1a1a',
                    tertiary: '#0f0f0f',
                },
                accent: {
                    DEFAULT: '#22C55E', // Bright green
                    light: '#4ADE80',
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                heading: ['Playfair Display', 'serif'],
            },
        },
    },
    plugins: [],
}
