import { MerkButtonClientOnly } from '@/components/MerkButtonClientOnly'
import { getDatabase } from '@/lib/datenbank'
import { Vorlesung } from '@/types/types'
import { notFound } from 'next/navigation'

export async function generateMetadata({
	params,
}: {
	params: Promise<{ id: string }>
}) {
	const id = (await params).id
	return {
		title: `Vorlesung ${id}`,
		description: 'Details zur Vorlesung',
	}
}

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

	// Wenn die Vorlesung nicht gefunden wurde, 404 Fehler zurückgeben
	if (!vorlesung) {
		notFound()
	}

	return (
		<main className="container">
			<h1>{vorlesung.name}</h1>
			<p>{vorlesung.beschreibung}</p>
			<p>Dozent: {vorlesung.dozent}</p>
			<p>ECTS: {vorlesung.ects}</p>
			<MerkButtonClientOnly id={vorlesung.id} />
		</main>
	)
}
