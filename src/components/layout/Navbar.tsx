import { routes } from '@/app/routes'
import Link from 'next/link'

export const Navbar = () => {
	const links = [
		{ href: routes.vorlesungen.overview, label: 'Vorlesungen' },
		{ href: routes.faq, label: 'FAQ' },
	]

	return (
		<nav className="container flex justify-end">
			<ul className="menu">
				{links.map((link) => (
					<li key={link.href}>
						<Link href={link.href}>{link.label}</Link>
					</li>
				))}
			</ul>
		</nav>
	)
}
