import { routes } from '@/app/routes'
import logo from '@/assets/logo.png'
import Image from 'next/image'
import Link from 'next/link'

export const Navbar = () => {
	const links = [
		{ href: routes.vorlesungen.overview, label: 'Vorlesungen' },
		{ href: routes.vorlesungen.erstellen, label: 'Vorlesung erstellen' },
		{ href: routes.vorlesungen.merkliste, label: 'Meine Merkliste' },
		{ href: routes.faq, label: 'FAQ' },
	]

	return (
		<nav className="container">
			<ul>
				<li>
					<Image src={logo} alt="Logo" height={50} width={50} />
				</li>
				{links.map((link) => (
					<li key={link.href}>
						<Link href={link.href}>{link.label}</Link>
					</li>
				))}
			</ul>
		</nav>
	)
}
