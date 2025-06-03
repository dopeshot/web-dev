'use client'

import dynamic from 'next/dynamic'

export const MerkButtonClientOnly = dynamic(
	() => import('./MerkButton').then((module) => module.MerkButton),
	{
		ssr: false,
		loading: () => <span aria-busy="true">Laden...</span>,
	},
)
