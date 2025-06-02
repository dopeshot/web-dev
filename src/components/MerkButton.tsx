'use client'
import { useState } from 'react'

type Props = {
	id: string
}

const MerkButton: React.FC<Props> = ({ id }) => {
	const merkliste = JSON.parse(localStorage.getItem('merkliste') || '[]')
	const istGemerkt = merkliste.includes(id)

	const [gemerkt, setGemerkt] = useState(istGemerkt)

	function merklisteToggle() {
		if (gemerkt) {
			// Vorlesung aus der Merkliste entfernen
			const neueMerkliste = merkliste.filter((item: string) => item !== id)
			localStorage.setItem('merkliste', JSON.stringify(neueMerkliste))
			setGemerkt(false)

			console.log(`Vorlesung ${id} wurde aus der Merkliste entfernt.`)
		} else {
			// Vorlesung zur Merkliste hinzufügen
			merkliste.push(id)
			localStorage.setItem('merkliste', JSON.stringify(merkliste))
			setGemerkt(true)

			console.log(`Vorlesung ${id} wurde zur Merkliste hinzugefügt.`)
		}
	}

	return (
		<button
			onClick={() => merklisteToggle()}
			className={`${gemerkt ? 'secondary' : ''}`}
		>
			{gemerkt ? '✅' : ''} Vorlesung merken
		</button>
	)
}

export default MerkButton