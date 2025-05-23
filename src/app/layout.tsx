import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
	subsets: ['latin'],
	weight: ['400', '600', '700'],
})

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
			<body className={`${inter.className} antialiased`}>{children}</body>
		</html>
	)
}
