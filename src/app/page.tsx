import { getDatabase } from '@/lib/datenbank'
import { Vorlesung } from '@/types/types'
import Link from 'next/link'

export default async function VorlesungenOverviewPage() {
	// Alle Vorlesungen aus der Datenbank laden
	async function fetchVorlesungen(): Promise<Vorlesung[]> {
		const database = await getDatabase()
		const vorlesungen = await database.all('SELECT * FROM vorlesungen')
		return vorlesungen as Vorlesung[]
	}
	const vorlesungenData = await fetchVorlesungen()

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
		</main>
	)
}
