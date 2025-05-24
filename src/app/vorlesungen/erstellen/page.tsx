import Form from 'next/form'
import { handleCreateVorlesung } from '../actions'

export const metadata = {
	title: 'Vorlesung erstellen',
	description: 'Hier kannst du eine neue Vorlesung erstellen.',
}

export default function VorlesungErstellenPage() {
	return (
		<main className="container">
			<h1>Vorlesung erstellen</h1>

			<Form action={handleCreateVorlesung}>
				{/* Edv Nummer */}
				<label htmlFor="edvnr">Edv Nummer</label>
				<input type="text" name="edvnr" id="edvnr" />

				{/* Name der Vorlesung */}
				<label htmlFor="name">Name der Vorlesung</label>
				<input type="text" name="name" id="name" />

				{/* Beschreibung der Vorlesung */}
				<label htmlFor="beschreibung">Beschreibung</label>
				<textarea id="beschreibung" name="beschreibung"></textarea>

				{/* Name des Dozenten */}
				<label htmlFor="dozent">Name des Dozenten</label>
				<input type="text" id="dozent" name="dozent" />

				{/* ECTS Punkte */}
				<label htmlFor="ects">ECTS-Punkte</label>
				<input type="number" id="ects" name="ects" />

				{/* Submit Button */}
				<button type="submit">Vorlesung erstellen</button>
			</Form>
		</main>
	)
}
