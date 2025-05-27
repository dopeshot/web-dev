import { Vorlesung } from '@/types/types'

export default async function VorlesungDetailPage({
	params,
}: {
	params: Promise<{ id: string }>
}) {
	// id aus den URL Parametern lesen
	const id = (await params).id

	const vorlesung: Vorlesung = {
		id: '1',
		name: 'Web Application Architecture',
		beschreibung:
			'Architekturprinzipien moderner Webanwendungen, Frameworks, Microservices und Deployment.',
		dozent: 'Fridtjof Toenniessen',
		ects: 5,
	}

	return (
		<main className="container">
			<h1>
				{vorlesung.name} ({id})
			</h1>
			<p>{vorlesung.beschreibung}</p>
			<p>Dozent: {vorlesung.dozent}</p>
			<p>ECTS: {vorlesung.ects}</p>
		</main>
	)
}
