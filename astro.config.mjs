import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
import mdx from '@astrojs/mdx';

// https://astro.build/config
import partytown from '@astrojs/partytown';

// https://astro.build/config
import vue from '@astrojs/vue';

// https://astro.build/config
export default defineConfig({
	site: 'https://www.rafaelcetina.github.io',
	base: '/rafaelcetina.dev',
	integrations: [
		tailwind({
			config: {
				applyBaseStyles: false,
			},
		}),
		sitemap(),
		mdx(),
		partytown({
			config: {
				forward: ['dataLayer.push'],
			},
		}),
		vue(),
	],
	markdown: {
		shikiConfig: {
			// Choose from Shiki's built-in themes (or add your own)
			// https://github.com/shikijs/shiki/blob/main/docs/themes.md
			theme: 'slack-dark',
			// Add custom languages
			// Note: Shiki has countless langs built-in, including .astro!
			// https://github.com/shikijs/shiki/blob/main/docs/languages.md
			langs: ['tsx', 'jsx', 'js', 'vue'],
			// Enable word wrap to prevent horizontal scrolling
			wrap: false,
		},
	},
});
