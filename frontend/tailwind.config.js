/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#5F6FFF",
            },
            gridTemplateColumns: {
                auto: "repeat(auto-fill, minmax(200px, 1fr))",
            },
        },
    },
    plugins: [],
}
