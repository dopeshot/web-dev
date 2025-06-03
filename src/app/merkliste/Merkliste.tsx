'use client'

import { Vorlesung } from '@/types/types'
import Link from 'next/link'
import useSWR from 'swr'

const fetcher = (url: string) => fetch(url).then((res) => res.json())

const Merkliste = () => {
	const merklisteIds = JSON.parse(localStorage.getItem('merkliste') || '[]')

	const hasIdsInLocalstorage = merklisteIds > 0
	const key = hasIdsInLocalstorage
		? `/api/vorlesungen?ids=${merklisteIds.join(',')}`
		: null

	const {
		data: vorlesungen,
		error,
		isLoading,
	} = useSWR<Vorlesung[]>(key, fetcher)

	if (error) {
		return <p>Fehler beim Laden der Merkliste: {error.message}</p>
	}

	if (isLoading) {
		return <span aria-busy={true}>Lade Merkliste...</span>
	}

	if (!vorlesungen || vorlesungen.length === 0) {
		return <p>Deine Merkliste ist leer.</p>
	}

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

export default Merkliste
