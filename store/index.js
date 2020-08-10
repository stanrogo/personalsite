export const state = () => ({
	navItems: [
		{
			name: 'Home',
			to: '#home',
			exact: true,
		},
		{
			name: 'About Me',
			to: '#about',
		},
		{
			name: 'Projects',
			to: '#projects',
		},
	],
	contactLinks: [
		{
			link: 'https://twitter.com/stanrogo',
			name: 'Twitter',
		},
		{
			link: 'https://www.linkedin.com/in/stanleyclark/',
			name: 'LinkedIn',
		},
		{
			link: 'https://github.com/stanrogo',
			name: 'GitHub',
		},
		{
			link: 'mailto:me@stanrogo.com?Subject=Hey%20Stanley!%20I%20was%20looking%20for%20me%20information',
			name: 'Email',
		},
		{
			link: 'tel:+31647051992',
			name: 'Phone',
		},
	],
});
