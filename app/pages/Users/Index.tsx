import { Title } from '@solidjs/meta'
import { Link } from 'inertia-adapter-solid'
import { For } from 'solid-js'
import type { PageProps } from '../../pages.gen'
import Layout from '../Layout'

export default function UsersIndex({ users }: PageProps<'Users/Index'>) {
  return (
    <Layout>
      <Title>Users</Title>
      <h1>Users</h1>
      <p>
        <Link href="/users/new">+ New user</Link>
      </p>
      <ul>
        <For each={users}>
          {(user) => (
            <li>
              <Link href={`/users/${user.id}`}>{user.name}</Link> &lt;{user.email}&gt;
            </li>
          )}
        </For>
      </ul>
    </Layout>
  )
}
