import { Navbar } from '@/components/Navbar'
import type { Metadata } from 'next'
import './globals.scss'

export const metadata: Metadata = {
	title: {
		template: '%s | Blog',
		default: 'Post | Blog',
	},
	description: 'Static site',
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
