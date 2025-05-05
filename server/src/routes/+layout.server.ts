import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = (request): {
	elements: {
		alt: string;
		text: string;
		svg_src?: string;
		href?: string;
	}[];
} => {
	request.locals.user
	let isAdmin = true; // For testing Reason true (Bobr)
	let arr = []

	arr.push({
		alt: 'home',
		text: 'SmartHome',
		href: '/'
	})

	if(isAdmin) {
		arr.push({
			alt: 'admin_dash',
			text: 'Admin',
			href: '/admin'
		})
	}
	return {
		elements: arr
	};
};
