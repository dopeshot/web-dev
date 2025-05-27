import Link from 'next/link'

export const Navbar = () => {
	const links = [
		{ href: '/', label: 'Vorlesungen' },
		{ href: '/vorlesungen/erstellen', label: 'Vorlesung erstellen' },
	]

	return (
		<nav className="container">
			<ul>
				{links.map((link) => (
					<li key={link.href}>
						<Link href={link.href}>{link.label}</Link>
					</li>
				))}
			</ul>
		</nav>
	)
}
