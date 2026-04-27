import { Head } from '@inertiajs/react'
import type { PageProps } from '../pages.gen'
import Layout from './Layout'

export default function About({ title }: PageProps<'About'>) {
  return (
    <Layout>
      <Head title="About" />
      <h1>{title}</h1>
      <p>Hono + Inertia.js on Cloudflare Workers.</p>
    </Layout>
  )
}
