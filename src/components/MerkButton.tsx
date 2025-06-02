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



// 'use client'
// import { useEffect, useState } from 'react'

// type Props = {
// 	id: string
// }

// export const MerkButton: React.FC<Props> = ({ id }) => {
// 	// ───────────────
// 	// State definitions:
// 	// 1) `mounted` tracks whether we've run our effect yet.
// 	// 2) `gemerkt` holds “is this ID in localStorage?” once we know we’re on the client.
// 	// ───────────────
// 	const [gemerkt, setGemerkt] = useState(false)

// 	// ───────────────
// 	// On mount (client‐only), read from localStorage and update both flags.
// 	// ───────────────
// 	useEffect(() => {
// 		const raw = localStorage.getItem('merkliste') as string
// 		console.log(raw)
// 		let list: string[]
// 		try {
// 			list = JSON.parse(raw)
// 		} catch {
// 			list = []
// 		}
// 		setGemerkt(list.includes(id))
// 	}, [id])

// 	// ───────────────
// 	// Once `mounted === true`, we know `gemerkt` reflects localStorage.
// 	// Toggling will update localStorage + state.
// 	// ───────────────
// 	function merklisteToggle() {
// 		const raw = localStorage.getItem('merkliste') || '[]'
// 		let list: string[]
// 		try {
// 			list = JSON.parse(raw)
// 		} catch {
// 			list = []
// 		}

// 		if (gemerkt) {
// 			// remove
// 			const filtered = list.filter((x) => x !== id)
// 			localStorage.setItem('merkliste', JSON.stringify(filtered))
// 			setGemerkt(false)
// 			console.log(`Vorlesung ${id} wurde aus der Merkliste entfernt.`)
// 		} else {
// 			// add
// 			list.push(id)
// 			localStorage.setItem('merkliste', JSON.stringify(list))
// 			setGemerkt(true)
// 			console.log(`Vorlesung ${id} wurde zur Merkliste hinzugefügt.`)
// 		}
// 	}

// 	return (
// 		<button
// 			onClick={merklisteToggle}
// 			className={gemerkt ? 'secondary' : ''}
// 		>
// 			{gemerkt ? '✅ ' : ''}Vorlesung merken
// 		</button>
// 	)
// }
