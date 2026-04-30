import type { PageObject } from "@hono/inertia";
import type { Page } from "@inertiajs/core";
import { createInertiaApp } from "inertia-adapter-solid";

const pages = import.meta.glob<{ default: unknown }>("./pages/**/*.tsx");

export const renderPage = (page: PageObject) =>
	createInertiaApp({
		page: page as Page,
		resolve: async (name) => {
			const loader = pages[`./pages/${name}.tsx`];
			if (!loader) {
				throw new Error(`Inertia page not found: ${name}`);
			}
			const mod = await loader();
			return mod.default;
		},
	});
