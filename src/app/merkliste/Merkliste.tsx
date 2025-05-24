'use client'

import { Vorlesung } from '@/types/types'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export const MerkListe = () => {
	const [vorlesungen, setVorlesungen] = useState<Vorlesung[]>([])
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		const merkliste = JSON.parse(localStorage.getItem('merkliste') || '[]')

		// Merkliste Items Fetchen
		const fetchMerkliste = async () => {
			const ids = merkliste.join(',')
			const response = await fetch(`/api/vorlesungen?ids=${ids}`)
			const data = await response.json()
			setVorlesungen(data)
			setLoading(false)
		}

		fetchMerkliste()
	}, [])

	if (loading) {
		return <p>Lade Merkliste...</p>
	}
	return (
		<section>
			{vorlesungen.length > 0 ? (
				vorlesungen.map((vorlesung) => (
					<article key={vorlesung.id}>
						<h4>{vorlesung.name}</h4>
						<Link href={`/vorlesungen/${vorlesung.id}`}>Mehr erfahren</Link>
					</article>
				))
			) : (
				<p>Deine Merkliste ist leer.</p>
			)}
		</section>
	)
}
