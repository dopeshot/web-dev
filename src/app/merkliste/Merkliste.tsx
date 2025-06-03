'use client'

import Link from 'next/link'

const fetcher = (url: string) => fetch(url).then((res) => res.json())

export const Merkliste = () => {
	const merklisteIds = JSON.parse(localStorage.getItem('merkliste') || '[]')

	const hasIdsInLocalstorage = merklisteIds > 0
	// TODO: Definiere hier den Key für useSWR, nutze "hasIdsInLocalstorage" um zu prüfen ob der fetch gemacht werden soll.
	const key = null

	// TODO: Hole die Daten mit useSWR, nutze den "key" und den fetcher.

	// TODO: Wenn Daten laden gebe einen Ladezustand zurück
	// TODO: Wenn Daten nicht geladen werden konnten, gebe eine Fehlermeldung zurück.
	// TODO: Wenn Vorlesungen leer oder undefiniert sind, zeige an das die Liste leer ist.

	return (
		<section>
			{vorlesungen.map((vorlesung) => (
				<article key={vorlesung.id}>
					<h4>{vorlesung.name}</h4>
					<Link href={`/vorlesungen/${vorlesung.id}`}>Mehr erfahren</Link>
				</article>
			))}
		</section>
	)
}
