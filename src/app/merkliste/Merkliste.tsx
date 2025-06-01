'use client'

import { Vorlesung } from '@/types/types'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import useSWR from 'swr'

const fetcher = (url: string) => fetch(url).then((res) => res.json())

export const MerkListe = () => {
	const [ids, setIds] = useState<string[]>([])

	const key = ids.length > 0 ? `/api/vorlesungen?ids=${ids.join(',')}` : null
	const {
		data: vorlesungen,
		error,
		isLoading,
	} = useSWR<Vorlesung[]>(key, fetcher)

	useEffect(() => {
		const merkliste = JSON.parse(localStorage.getItem('merkliste') || '[]')
		setIds(merkliste)
	}, [])

	if (error) {
		return <p>Fehler beim Laden der Merkliste: {error.message}</p>
	}

	if (isLoading) {
		return <p>Lade Merkliste...</p>
	}

	if (vorlesungen?.length === 0) {
		return <p>Deine Merkliste ist leer.</p>
	}

	return (
		<section>
			{vorlesungen?.map((vorlesung) => (
				<article key={vorlesung.id}>
					<h4>{vorlesung.name}</h4>
					<Link href={`/vorlesungen/${vorlesung.id}`}>Mehr erfahren</Link>
				</article>
			))}
		</section>
	)
}
