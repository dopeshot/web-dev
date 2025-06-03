'use client'

import { useState } from 'react'

export const MerkButton: React.FC = () => {
	const [gemerkt, setGemerkt] = useState<boolean>(false)

	function onButtonClick() {
		setGemerkt((prev) => !prev)
	}

	return (
		<button onClick={onButtonClick}>
			{gemerkt ? 'Vorlesung merken' : 'Vorlesung merken ✅'}
		</button>
	)
}
