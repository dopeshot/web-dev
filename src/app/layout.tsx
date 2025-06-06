import { Navbar } from '@/components/Navbar'
import type { Metadata } from 'next'
import './globals.scss'

export const metadata: Metadata = {
	title: {
		template: '%s | Vorlesungsverzeichnis',
		default: 'Vorlesungen | Vorlesungsverzeichnis',
	},
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
			<body>
				<Navbar />
				{children}
			</body>
		</html>
	)
}
