import { database } from '@/app/lib/datenbank'
import { Vorlesung } from '@/types/types'
import { notFound } from 'next/navigation'

export default async function VorlesungDetailPage({
	params,
}: {
	params: Promise<{ edvnr: string }>
}) {
	// Edvnr aus den URL Parametern lesen
	const edvnr = (await params).edvnr

	// Aktuelle Vorlesung aus der Datenbank laden
	function getVorlesungByEdvnr(edvnr: string): Vorlesung | undefined {
		const statement = database.prepare<string, Vorlesung>(
			'SELECT * FROM vorlesungen WHERE edvnr = ?',
		)
		const result = statement.get(edvnr)
		return result
	}
	const vorlesung = getVorlesungByEdvnr(edvnr)

	// Wenn die Vorlesung nicht gefunden wurde, 404 Fehler zurückgeben
	if (!vorlesung) {
		notFound()
	}

	return (
		<main className="container">
			<h1>
				{vorlesung.name} ({vorlesung.edvnr})
			</h1>
			<p>{vorlesung.beschreibung}</p>
			<p>Dozent: {vorlesung.dozent}</p>
			<p>ECTS: {vorlesung.ects}</p>
		</main>
	)
}
