'use client'
import { useState } from 'react'

export const MerkButton = () => {
	const [gemerkt, setGemerkt] = useState(false)

	return (
		<button
			onClick={() => setGemerkt(true)}
			className={`${gemerkt ? 'secondary' : ''}`}
		>
			Vorlesung Merken
		</button>
	)
}
