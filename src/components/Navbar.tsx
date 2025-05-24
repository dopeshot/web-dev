import logo from '@/assets/logo.png'
import Image from 'next/image'
import Link from 'next/link'

export const Navbar = () => {
	const links = [
		{ href: '/', label: 'Vorlesungen' },
		{ href: '/vorlesungen/erstellen', label: 'Vorlesung erstellen' },
		{ href: '/merkliste', label: 'Meine Merkliste' },
		{ href: '/faq', label: 'FAQ' },
	]

	return (
		<nav className="container">
			<ul>
				<li>
					<Image loading='eager' src={logo} alt="Logo" height={50} width={50} />
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
