import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = (): {
	elements: {
		alt: string;
		text: string;
		svg_src?: string;
		href?: string;
	}[];
} => {
	return {
		elements: [
			{
				alt: 'home',
				text: 'SmartHome',
				href: '/'
			},
			{
				alt: 'admin_dash',
				text: 'Admin',
				href: '/admin'
			}
		]
	};
};
