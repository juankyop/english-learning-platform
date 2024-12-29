import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import { z } from 'zod';

export default defineConfig({
	integrations: [react(), tailwind()],
	content: {
		collections: {
			docs: {
				schema: z.object({
					title: z.string(),
					description: z.string(),
				})
			}
		}
	}
});
