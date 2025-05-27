/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                accent: '#0077cc',
                'accent-light': '#4da6ff',
                dark: '#13151a',
                'gray-darker': '#4a4a4a',
                'gray-light': '#f5f5f5',
            },
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
}
