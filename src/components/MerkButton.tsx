'use client'
import { useState } from 'react'

type Props = {
	edvnr: string
}

export const MerkButton: React.FC<Props> = ({ edvnr }) => {
	const merkliste = JSON.parse(localStorage.getItem('merkliste') || '[]')
	const [gemerkt, setGemerkt] = useState(merkliste.includes(edvnr))

	function merklisteToggle() {
		if (gemerkt) {
			// Vorlesung aus der Merkliste entfernen
			const neueMerkliste = merkliste.filter((item: string) => item !== edvnr)
			localStorage.setItem('merkliste', JSON.stringify(neueMerkliste))
			setGemerkt(false)

			console.log(`Vorlesung ${edvnr} wurde aus der Merkliste entfernt.`)
		} else {
			// Vorlesung zur Merkliste hinzufügen
			merkliste.push(edvnr)
			localStorage.setItem('merkliste', JSON.stringify(merkliste))
			setGemerkt(true)

			console.log(`Vorlesung ${edvnr} wurde zur Merkliste hinzugefügt.`)
		}
	}

	return (
		<button
			onClick={() => merklisteToggle()}
			className={`${gemerkt ? 'secondary' : ''}`}
		>
			Vorlesung {gemerkt ? 'nicht mehr merken' : 'merken'}
		</button>
	)
}
