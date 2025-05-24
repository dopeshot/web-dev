'use client'

import { useEffect } from 'react'

export default function Error({
	error,
	reset,
}: {
	error: Error & { digest?: string }
	reset: () => void
}) {
	useEffect(() => {
		console.error(error)
	}, [error])

	return (
		<main className="container">
			<p>Vorlesungsdetail Seite</p>
			<h2>Etwas ist schiefgelaufen!</h2>
			<p>
				Beim Aufrufen der Vorlesungsdetail Seite ist ein Fehler passiert. Bitte
				versuche es erneut.
			</p>
			<button onClick={() => reset()}>Erneut versuchen</button>
		</main>
	)
}
