/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                green: {
                    DEFAULT: '#0A2E1A',
                    mid: '#183324',
                    card: '#0d2419',
                },
                beige: {
                    DEFAULT: '#F5F0E8',
                    dark: '#EDE7DB',
                },
                yellow: {
                    DEFAULT: '#FCEE0A',
                },
            },
            fontFamily: {
                bebas: ['"Bebas Neue"', 'cursive'],
                syne: ['"Syne"', 'sans-serif'],
                dm: ['"DM Sans"', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
