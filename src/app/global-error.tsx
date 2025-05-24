'use client'
import { useEffect } from 'react'

export default function GlobalError({
	error,
	reset,
}: {
	error: Error & { digest?: string }
	reset: () => void
}) {
	useEffect(() => {
		console.error('Global Error:', error)
	}, [error])

	return (
		<html>
			<body className="container">
				<p>Global</p>
				<h2>Etwas ist schiefgelaufen!</h2>
				<p>Irgendwo ist ein Fehler aufgetreten. Bitte versuche es erneut.</p>
				<button onClick={() => reset()}>Erneut versuchen</button>
			</body>
		</html>
	)
}
