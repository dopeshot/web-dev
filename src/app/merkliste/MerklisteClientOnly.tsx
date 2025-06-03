'use client'

import dynamic from 'next/dynamic'

export const MerklisteClientOnly = dynamic(
	() => import('./Merkliste').then((module) => module.Merkliste),
	{
		ssr: false,
		loading: () => <span aria-busy="true">Laden...</span>,
	},
)
