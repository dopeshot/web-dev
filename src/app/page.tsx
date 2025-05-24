import Link from 'next/link'
import { routes } from './routes'

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
			<header className="mb-8">
				<h1>Vorlesungen</h1>
				<p>
					Das Vorlesungsverzeichnis für den Studiengang Computer Science and
					Media an der Hochschule der Medien. Mit allen Vorlesungen die im
					nächsten Semester angeboten werden.
				</p>
			</header>
			<section>
				{vorlesungenData.map((vorlesung) => (
					<article key={vorlesung.slug}>
						<h4>{vorlesung.name}</h4>
						<Link href={`/vorlesungen/${vorlesung.slug}`}>Mehr erfahren</Link>
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
