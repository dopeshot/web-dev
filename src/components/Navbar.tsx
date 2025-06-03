import { Post } from '@/types/types'
import Link from 'next/link'

export const Navbar = async () => {
	const posts: Post[] = await fetch('https://api.vercel.app/blog').then((res) =>
		res.json(),
	)

	const links = posts.map((post) => ({
		href: `/blog/${post.id}`,
		label: post.id,
	}))
	links.unshift({ href: '/', label: 'Home' })

	return (
		<nav className="container">
			<ul>
				<li>
					{/* <Image loading="eager" src={logo} alt="Logo" height={50} width={50} /> */}
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
