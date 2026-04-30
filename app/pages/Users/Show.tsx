import { Title } from "@solidjs/meta";
import { Link } from "inertia-adapter-solid";
import type { PageProps } from "../../pages.gen";
import Layout from "../Layout";

export default function UsersShow({ user }: PageProps<"Users/Show">) {
	return (
		<Layout>
			<Title>{user.name}</Title>
			<p>
				<Link href="/users">← Back to users</Link>
			</p>
			<h1>{user.name}</h1>
			<dl>
				<dt>Email</dt>
				<dd>{user.email}</dd>
				<dt>Bio</dt>
				<dd>{user.bio}</dd>
			</dl>
		</Layout>
	);
}
