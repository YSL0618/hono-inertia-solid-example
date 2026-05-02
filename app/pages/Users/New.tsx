import { Title } from '@solidjs/meta'
import { Link, useForm } from 'inertia-adapter-solid'
import type { PageProps } from '../../pages.gen'
import Layout from '../Layout'

export default function UsersNew({ values, errors }: PageProps<'Users/New'>) {
	const form = useForm({
		name: values?.name ?? '',
		email: values?.email ?? '',
		bio: values?.bio ?? '',
	})

	const fieldErrors = errors

	return (
		<Layout>
			<Title>New user</Title>
			<p>
				<Link href="/users">← Back to users</Link>
			</p>
			<h1>New user</h1>
			<form
				onSubmit={(e) => {
					e.preventDefault()
					form.post('/users')
				}}
			>
				<div>
					<label for="name">Name</label>
					<input
						id="name"
						type="text"
						value={form.data.name}
						onInput={(e) => form.setData('name', e.currentTarget.value)}
					/>
					{fieldErrors.name && <p class="error">{fieldErrors.name}</p>}
				</div>
				<div>
					<label for="email">Email</label>
					<input
						id="email"
						type="email"
						value={form.data.email}
						onInput={(e) => form.setData('email', e.currentTarget.value)}
					/>
					{fieldErrors.email && <p class="error">{fieldErrors.email}</p>}
				</div>
				<div>
					<label for="bio">Bio</label>
					<textarea
						id="bio"
						value={form.data.bio}
						onInput={(e) => form.setData('bio', e.currentTarget.value)}
					/>
					{fieldErrors.bio && <p class="error">{fieldErrors.bio}</p>}
				</div>
				<button type="submit" disabled={form.processing}>
					Create
				</button>
			</form>
		</Layout>
	)
}
