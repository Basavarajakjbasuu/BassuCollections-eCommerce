module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				poppins: ['Poppins', 'sans-serif']
			}
		}
		// colors: {
		// 	// 'salmon-Pink': 'hsl(353, 100%, 78%)'
		// }
	},
	plugins: [require('tailwind-scrollbar-hide')]
};
