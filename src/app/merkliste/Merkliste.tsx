'use client'

import { Vorlesung } from '@/types/types'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import useSWR from 'swr'

const fetcher = (url: string) => fetch(url).then((res) => res.json())

const Merkliste = () => {
	const [ids, setIds] = useState<string[]>([])
	const [isMounted, setIsMounted] = useState(false)

	// TODO: Joy das kann man jetzt refacroten, local storage ist immer da! 
	useEffect(() => {
		const merkliste = JSON.parse(localStorage.getItem('merkliste') || '[]')
		setIsMounted(true)

		setIds(merkliste)
	}, [])

	const hasIdsInLocalstorage = ids.length > 0
	const key = hasIdsInLocalstorage ? `/api/vorlesungen?ids=${ids.join(',')}` : null

	const {
		data: vorlesungen,
		error,
		isLoading,
	} = useSWR<Vorlesung[]>(key, fetcher)

	if (error) {
		return <p>Fehler beim Laden der Merkliste: {error.message}</p>
	}

	if (!isMounted || isLoading) {
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
