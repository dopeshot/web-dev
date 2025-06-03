import { MerklisteClientOnly } from './MerklisteClientOnly'

export default async function MerkListePage() {
	return (
		<main className="container">
			<h1>Meine Merkliste</h1>
			<MerklisteClientOnly />
		</main>
	)
}
