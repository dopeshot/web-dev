import type { Metadata } from 'next'
import './globals.scss'

export const metadata: Metadata = {
	title: 'Vorlesungsverzeichnis',
	description:
		'Vorlesungsverzeichnis für Vorlesungen aus dem Studiengang Computer Science and Media an der Hdm.',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="de">
			<body>{children}</body>
		</html>
	)
}
