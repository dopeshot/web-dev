import Link from 'next/link'

export type Vorlesung = {
	name: string
	beschreibung: string
	dozent: string
	ects: number
	slug: string
}

export default function VorlesungenOverviewPage() {
	const vorlesungenData: Vorlesung[] = [
		{
			name: 'Web Application Architecture',
			beschreibung:
				'Architekturprinzipien moderner Webanwendungen, Frameworks, Microservices und Deployment.',
			dozent: 'Fridtjof Toenniessen',
			ects: 5,
			slug: 'web-application-architecture',
		},
		{
			name: 'Machine-Learning',
			beschreibung:
				'Einführung in maschinelles Lernen, inklusive überwachtem und unüberwachtem Lernen, sowie Anwendungsszenarien.',
			dozent: 'Johannes Maucher',
			ects: 5,
			slug: 'machine-learning',
		},
		{
			name: 'Mobile Applications',
			beschreibung:
				'Entwicklung mobiler Apps für Android/iOS, inklusive UX-Design und Performanceoptimierung.',
			dozent: 'Ansgar Gerlicher, Zack Walker',
			ects: 5,
			slug: 'mobile-applications',
		},
		{
			name: 'Advanced Game Development',
			beschreibung:
				'Vertiefung in moderne Spieleentwicklungstechniken mit Fokus auf Physik, Grafik und Interaktion.',
			dozent: 'Stefan Radicke',
			ects: 5,
			slug: 'advanced-game-development',
		},
	]

	return (
		<main className="container">
			<header className="pb-4">
				<h1 className="text-2xl font-bold mb-2">Vorlesungen</h1>
				<p>
					Das Vorlesungsverzeichnis für den Studiengang Computer Science and
					Media an der Hochschule der Medien. Mit allen Vorlesungen die im
					nächsten Semester angeboten werden.
				</p>
			</header>
			<section className="grid grid-cols-1 sm:grid-cols-2">
				{vorlesungenData.map((vorlesung) => (
					<div key={vorlesung.slug} className="border rounded-lg p-4 ">
						<h2 className="font-bold mb-1">{vorlesung.name}</h2>
						<Link
							href={`/vorlesungen/${vorlesung.slug}`}
							className="text-primary-500 hover:text-primary-600"
						>
							Mehr erfahren
						</Link>
					</div>
				))}
			</section>
		</main>
	)
}
