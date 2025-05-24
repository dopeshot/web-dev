import { MerkListe } from './Merkliste'

export const metadata = {
	title: 'Meine Merkliste',
	description: 'Hier findest du alle Vorlesungen, die du dir gemerkt hast.',
}

export default async function MerkListePage() {
	return (
		<main className="container">
			<h1>Meine Merkliste</h1>
			<MerkListe />
		</main>
	)
}
