import type {Config} from 'tailwindcss'

const config: Config = {
    content: [
        './src/*/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            backgroundImage: {},
            colors: {},
            fontFamily:{}
        },
    },
    plugins: [],
}
export default config
