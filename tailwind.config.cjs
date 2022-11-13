/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: { dark: '#A48146', DEFAULT: '#C7A467' },
				secondary: '#6A6A6A',
				thirdly: { dark: '#85ab8140', DEFAULT: '#85AB81' },
				fourthly: { light: '#88403E', DEFAULT: '#552322' },
				bg: {
					light: '#444444',
					DEFAULT: '#303030',
					dark: '#292929',
				},
			},
			fontFamily: {
				ubuntu: ['Ubuntu', 'sans-serif'],
				montserrat: ['Montserrat', 'sans-serif'],
			},
			boxShadow: {
				check: '0px 0px 6px 1px #85ab81;',
			},
		},
	},
	plugins: [],
};
