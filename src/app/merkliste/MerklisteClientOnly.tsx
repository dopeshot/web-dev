'use client'

import dynamic from 'next/dynamic'

const MerklisteDynamic = dynamic(() => import('./Merkliste'), {
	ssr: false,
	loading: () => <span aria-busy="true">Laden...</span>,
})

export const MerklisteClientOnly = () => {
	return <MerklisteDynamic />
}
