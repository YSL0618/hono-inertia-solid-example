import type { RootView } from '@hono/inertia'
import { renderPage } from './ssr'

export const rootView: RootView = async (page) => {
	const { head, body } = await renderPage(page)
	const headHtml =
		'<script type="module" src="/@vite/client"></script>' +
		'<link rel="stylesheet" href="/app/styles.css">' +
		'<script type="module" src="/app/client.tsx"></script>' +
		head.join('')
	return `<!DOCTYPE html><html><head>${headHtml}</head><body>${body}</body></html>`
}
