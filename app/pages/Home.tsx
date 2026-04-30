import type { PageProps } from '../pages.gen'
import Layout from './Layout'

export default function Home({ message }: PageProps<'Home'>) {
  return (
    <Layout>
      <h1>{message}</h1>
    </Layout>
  )
}
