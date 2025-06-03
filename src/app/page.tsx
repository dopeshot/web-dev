import Link from 'next/link'

export default async function VorlesungenOverviewPage() {
	return (
		<main className="container">
			<h1>Blogs</h1>
			{/* Neue Vorlesung erstellen */}
			<Link role="button" href="/blog/1">
				Zu Blog 1
			</Link>
		</main>
	)
}
