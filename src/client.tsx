import { createInertiaApp, type ResolvedComponent } from '@inertiajs/react'
import { createRoot } from 'react-dom/client'

createInertiaApp({
  resolve: async (name) => {
    const pages = import.meta.glob<{ default: ResolvedComponent }>('../app/Pages/**/*.tsx')
    const page = await pages[`../app/Pages/${name}.tsx`]()
    return page.default
  },
  setup({ el, App, props }) {
    createRoot(el).render(<App {...props} />)
  }
})
