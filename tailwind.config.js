/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx,html}", "./index.html"],
	theme: {
		extend: {
			fontFamily: {
				"neue-montreal": ['"Neue Montreal"', "sans-serif"],
			},
		},
	},
	plugins: [],
};
