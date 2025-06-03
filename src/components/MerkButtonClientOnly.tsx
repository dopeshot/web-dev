'use client'

import dynamic from 'next/dynamic'

const MerkButtonDynamic = dynamic(
	() => import('./MerkButton').then((module) => module.MerkButton),
	{
		ssr: false,
		loading: () => <span aria-busy="true">Laden...</span>,
	},
)

export const MerkButtonClientOnly: React.FC<{ id: string }> = ({ id }) => {
	return <MerkButtonDynamic id={id} />
}
