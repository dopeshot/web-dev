import { getDatabase } from '@/lib/datenbank'
import { Vorlesung } from '@/types/types'

export default async function VorlesungDetailPage({
	params,
}: {
	params: Promise<{ id: string }>
}) {
	// id aus den URL Parametern lesen
	const id = (await params).id

	// Aktuelle Vorlesung aus der Datenbank laden
	async function getVorlesungById(): Promise<Vorlesung | undefined> {
		const database = await getDatabase()
		const vorlesung = await database.get<Vorlesung>(
			'SELECT * FROM vorlesungen WHERE id = ?',
			[id],
		)
		return vorlesung ?? undefined
	}
	const vorlesung = await getVorlesungById()

	// Wenn die Vorlesung nicht gefunden wurde, Fehler anzeigen
	if (!vorlesung) {
		return <p>Vorlesung nicht gefunden!</p>
	}

	return (
		<main className="container">
			<h1>{vorlesung.name}</h1>
			<p>{vorlesung.beschreibung}</p>
			<p>Dozent: {vorlesung.dozent}</p>
			<p>ECTS: {vorlesung.ects}</p>
		</main>
	)
}
