import { Vorlesung } from '@/types/types'

export default async function VorlesungenOverviewPage() {
	const vorlesungen: Vorlesung[] = [
		{
			id: '1',
			name: 'Web Application Architecture',
			beschreibung:
				'Architekturprinzipien moderner Webanwendungen, Frameworks, Microservices und Deployment.',
			dozent: 'Fridtjof Toenniessen',
			ects: 5,
		},
		{
			id: '2',
			name: 'Machine-Learning',
			beschreibung:
				'Einführung in maschinelles Lernen, inklusive überwachtem und unüberwachtem Lernen, sowie Anwendungsszenarien.',
			dozent: 'Johannes Maucher',
			ects: 5,
		},
		{
			id: '3',
			name: 'Mobile Applications',
			beschreibung:
				'Entwicklung mobiler Apps für Android/iOS, inklusive UX-Design und Performanceoptimierung.',
			dozent: 'Ansgar Gerlicher, Zack Walker',
			ects: 5,
		},
		{
			id: '4',
			name: 'Advanced Game Development',
			beschreibung:
				'Vertiefung in moderne Spieleentwicklungstechniken mit Fokus auf Physik, Grafik und Interaktion.',
			dozent: 'Stefan Radicke',
			ects: 5,
		},
	]

	return (
		<main className="container">
			<h1>Vorlesungen</h1>

			{/* Vorlesung Liste */}
			{vorlesungen.map((vorlesung) => (
				<article key={vorlesung.id}>
					<h4>{vorlesung.name}</h4>
					{/* TODO: übung 1 routing und linking: hier einen link zur Vorlesung Detail Seite einfügen */}
				</article>
			))}
		</main>
	)
}
