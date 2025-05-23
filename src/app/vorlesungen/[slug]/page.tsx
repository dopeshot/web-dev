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
				<p className="text-primary-500">Current Slug: {slug}</p>
			</section>

			<section>
				<Link href={routes.vorlesungen.overview}>Zurück zur Übersicht</Link>
			</section>

			<section>
				<h1 className="text-2xl font-bold mb-2">{vorlesung.name}</h1>
				<p className="mb-2">{vorlesung.beschreibung}</p>
				<p className="text-gray-400">Dozent: {vorlesung.dozent}</p>
				<p className="text-gray-400">ECTS: {vorlesung.ects}</p>
			</section>
		</main>
	)
}
