import Link from 'next/link'

// Next.js will invalidate the cache when a
// request comes in, !!at most!! once every 20 seconds.

// export const revalidate = 20
export default async function VorlesungenOverviewPage() {
	const names = await (await fetch('http://localhost:3001/data')).json()
	return (
		<main className="container">
			<h1>Vorlesungen</h1>
			{names.map((name: string) => (
				<article key={name}>
					<h4>{name}</h4>
				</article>
			))}
			{/* Neue Vorlesung erstellen */}
			<Link role="button" href="/vorlesungen/erstellen">
				Neue Vorlesung erstellen
			</Link>
		</main>
	)
}
