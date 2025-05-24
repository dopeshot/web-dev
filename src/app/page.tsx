import { getVorlesungen } from '@/database/db'
import { Vorlesung } from '@/types/types'
import Link from 'next/link'
import { routes } from './routes'

export default function VorlesungenOverviewPage() {
	const vorlesungenData: Vorlesung[] = getVorlesungen()

	return (
		<main className="container">
			<header>
				<h1>Vorlesungen</h1>
			</header>
			<section>
				{vorlesungenData.map((vorlesung) => (
					<article key={vorlesung.edvnr}>
						<h4>{vorlesung.name}</h4>
						<Link href={`/vorlesungen/${vorlesung.edvnr}`}>Mehr erfahren</Link>
					</article>
				))}
			</section>
			<section>
				<Link role="button" href={routes.vorlesungen.erstellen}>
					Neue Vorlesung erstellen
				</Link>
			</section>
		</main>
	)
}
