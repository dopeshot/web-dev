import { Vorlesung } from '@/types/types'
import Link from 'next/link'
import { database } from '../lib/datenbank'

export default function VorlesungenOverviewPage() {
	// Alle Vorlesungen aus der Datenbank laden
	function fetchVorlesungen(): Vorlesung[] {
		const statement = database.prepare('SELECT * FROM vorlesungen')
		return statement.all() as Vorlesung[]
	}
	const vorlesungenData = fetchVorlesungen()

	return (
		<main className="container">
			<h1>Vorlesungen</h1>

			{/* Vorlesung Liste */}
			{vorlesungenData.map((vorlesung) => (
				<article key={vorlesung.id}>
					<h4>{vorlesung.name}</h4>
					<Link href={`/vorlesungen/${vorlesung.id}`}>Mehr erfahren</Link>
				</article>
			))}

			{/* Neue Vorlesung erstellen */}
			<Link role="button" href="/vorlesungen/erstellen">
				Neue Vorlesung erstellen
			</Link>
		</main>
	)
}
