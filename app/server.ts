import { Hono } from 'hono'
import { inertia } from '@hono/inertia'
import { rootView } from './root-view'

const app = new Hono()

app.use(inertia({ rootView }))

const routes = app.get('/', (c) => c.render('Home', { message: 'Hono x Inertia' }))

export default routes
