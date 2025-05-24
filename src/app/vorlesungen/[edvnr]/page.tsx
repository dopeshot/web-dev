import { routes } from '@/app/routes'
import { getVorlesungByEdvnr } from '@/database/db'
import Link from 'next/link'
import { notFound } from 'next/navigation'

export default async function VorlesungDetailPage({
	params,
}: {
	params: Promise<{ edvnr: string }>
}) {
	const { edvnr } = await params
	const vorlesung = getVorlesungByEdvnr(edvnr)

	if (!vorlesung) {
		notFound()
	}

	return (
		<main className="container">
			<section>
				<Link href={routes.vorlesungen.overview} className="secondary">
					Zurück zur Übersicht
				</Link>
			</section>

			<section>
				<h1>
					{vorlesung.name} ({vorlesung.edvnr})
				</h1>
				<p>{vorlesung.beschreibung}</p>
				<p>Dozent: {vorlesung.dozent}</p>
				<p>ECTS: {vorlesung.ects}</p>
			</section>
		</main>
	)
}
