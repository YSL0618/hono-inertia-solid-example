import type { MiddlewareHandler, TypedResponse } from 'hono'
import { renderToString } from 'react-dom/server'
import { Link, Script, ViteClient } from 'vite-ssr-components/react'
import type { PageName } from '../app/pages.gen'

type PageObject = {
  component: string
  props: Record<string, unknown>
  url: string
  version: string | null
}

declare module 'hono' {
  interface ContextRenderer {
    <C extends PageName, P = Record<string, never>>(
      component: C,
      props?: P
    ): Response & TypedResponse<{ component: C; props: P }, 200, 'html'>
  }
  interface NotFoundResponse extends Response, TypedResponse<string, 404, 'text'> {}
}

const serializePage = (page: PageObject) => JSON.stringify(page).replace(/</g, '\\u003c')

const Document = ({ page }: { page: PageObject }) => (
  <html>
    <head>
      <ViteClient />
      <Script src="/src/client.tsx" />
      <Link href="/src/style.css" rel="stylesheet" />
    </head>
    <body>
      <script type="application/json" data-page="app" dangerouslySetInnerHTML={{ __html: serializePage(page) }} />
      <div id="app" />
    </body>
  </html>
)

export const renderer = (options: { version?: string | null } = {}): MiddlewareHandler => {
  return async (c, next) => {
    c.setRenderer(((component: string, props: Record<string, unknown> = {}) => {
      const url = new URL(c.req.url)
      const page: PageObject = {
        component,
        props,
        url: url.pathname + url.search,
        version: options.version ?? null
      }

      if (c.req.header('X-Inertia')) {
        c.header('X-Inertia', 'true')
        c.header('Vary', 'X-Inertia')
        return c.json(page)
      }

      return c.html('<!DOCTYPE html>' + renderToString(<Document page={page} />))
    }) as Parameters<typeof c.setRenderer>[0])
    await next()
  }
}
