import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import { z } from 'zod';

export default defineConfig({
	integrations: [tailwind()],
	content: {
		collections: {
			docs: {
				schema: z.object({
					title: z.string(),
					description: z.string(),
					level: z.string(),
					order: z.number()
				})
			}
		}
	}
});
