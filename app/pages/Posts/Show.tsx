import { Head, Link } from '@inertiajs/react'
import type { PageProps } from '../../pages.gen'
import Layout from '../Layout'

export default function Show({ post }: PageProps<'Posts/Show'>) {
  return (
    <Layout>
      <Head title={post.title} />
      <article>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
      </article>
      <p>
        <Link href="/posts">← Back to list</Link>
      </p>
    </Layout>
  )
}
