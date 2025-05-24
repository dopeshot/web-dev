import { routes } from '@/app/routes'
import Link from 'next/link'

export default async function VorlesungDetailPage({
	params,
}: {
	params: Promise<{ slug: string }>
}) {
	const { slug } = await params
	const vorlesung = {
		name: 'Web Application Architecture',
		beschreibung:
			'Architekturprinzipien moderner Webanwendungen, Frameworks, Microservices und Deployment.',
		dozent: 'Fridtjof Toenniessen',
		ects: 5,
		slug: 'web-application-architecture',
	}

	return (
		<main className="container">
			<section>
				<p>Current Slug: {slug}</p>
			</section>

			<section>
				<Link href={routes.vorlesungen.overview}>Zurück zur Übersicht</Link>
			</section>

			<section>
				<h1>{vorlesung.name}</h1>
				<p>{vorlesung.beschreibung}</p>
				<p>Dozent: {vorlesung.dozent}</p>
				<p>ECTS: {vorlesung.ects}</p>
			</section>
		</main>
	)
}
