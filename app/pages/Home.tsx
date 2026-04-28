import { Head } from '@inertiajs/react'
import type { PageProps } from '../pages.gen'
import Layout from './Layout'

export default function Home({ message }: PageProps<'Home'>) {
  return (
    <Layout>
      <Head title="Home" />
      <h1>{message}</h1>
    </Layout>
  )
}
