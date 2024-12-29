/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./*.{html,js}"],
	theme: {
		extend: {
			fontFamily: {
				"din-next": ['"DIN Next"', "sans-serif"],
				caveat: ["Caveat", "cursive"],
			},
		},
	},
	plugins: [],
};
