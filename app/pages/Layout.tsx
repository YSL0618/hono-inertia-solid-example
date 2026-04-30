import { Link } from "inertia-adapter-solid";
import type { JSX } from "solid-js";

type LayoutProps = {
	children: JSX.Element;
};

export default function Layout(props: LayoutProps) {
	return (
		<div class="app">
			<header>
				<nav>
					<Link href="/">Home</Link>
					<span>|</span>
					<Link href="/users">Users</Link>
				</nav>
			</header>
			<main>{props.children}</main>
		</div>
	);
}
