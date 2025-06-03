'use client'

import { useState } from 'react'

export const MerkButton: React.FC<{ id: string }> = ({ id }) => {
	const merkliste = JSON.parse(
		localStorage.getItem('merkliste') || '[]',
	) as string[]
	const istGemerkt = merkliste.includes(id)

	const [gemerkt, setGemerkt] = useState<boolean>(istGemerkt)

	function onButtonClick() {
		if (gemerkt) {
			const neueMerkliste = merkliste.filter((item: string) => item !== id)
			localStorage.setItem('merkliste', JSON.stringify(neueMerkliste))
			setGemerkt(false)
		} else {
			merkliste.push(id)
			localStorage.setItem('merkliste', JSON.stringify(merkliste))
			setGemerkt(true)
		}
	}

	return (
		<button onClick={onButtonClick}>
			{gemerkt ? 'Vorlesung merken ✅' : 'Vorlesung merken'}
		</button>
	)
}
