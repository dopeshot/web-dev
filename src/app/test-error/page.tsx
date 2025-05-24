'use client'
import { useEffect } from 'react'

export default function TestErrorPage() {
	useEffect(() => {
		throw new Error('Runtime-Testfehler')
	}, [])

	return <div>Diese Seite wirft absichtlich einen Fehler.</div>
}
