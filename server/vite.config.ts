import { sveltekit } from '@sveltejs/kit/vite';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [tailwindcss(), sveltekit()],
	server: {
		allowedHosts: ['codeserver.shardp001.bedless.dev'],
		host: '0.0.0.0', // make the dev server accessible externally
		port: 5173 // or your custom port
	}
});
