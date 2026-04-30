import { createInertiaApp } from 'inertia-adapter-solid'
import { hydrate } from 'solid-js/web'

createInertiaApp({
  resolve: async (name) => {
    const pages = import.meta.glob<{ default: unknown }>('./pages/**/*.tsx')
    const page = await pages[`./pages/${name}.tsx`]()
    return page?.default
  },
  setup({ el, App, props }) {
    hydrate(() => <App {...props} />, el)
  }
})
