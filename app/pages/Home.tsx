import { Title } from '@solidjs/meta'
import type { PageProps } from '../pages.gen'
import Layout from './Layout'

export default function Home({ message }: PageProps<'Home'>) {
	return (
		<Layout>
			<Title>Home</Title>
			<h1>{message}</h1>
		</Layout>
	)
}
