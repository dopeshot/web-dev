import { Navbar } from '@/components/layout/Navbar'
import type { Metadata } from 'next'
import './globals.scss'

export const metadata: Metadata = {
	title: 'Vorlesungsverzeichnis | Vorlesungen',
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
