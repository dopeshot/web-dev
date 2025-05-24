import { database } from '@/lib/datenbank'
import Form from 'next/form'
import { redirect } from 'next/navigation'

export const metadata = {
	title: 'Vorlesung erstellen',
	description: 'Hier kannst du eine neue Vorlesung erstellen.',
}

export default function VorlesungErstellenPage() {
	async function handleCreateVorlesung(formData: FormData) {
		'use server'

		// Formulardaten auslesen
		const name = formData.get('name')
		const beschreibung = formData.get('beschreibung')
		const dozent = formData.get('dozent')
		const ects = formData.get('ects')

		// Neue Vorlesung in der Datenbank speichern
		const statement = database.prepare(
			`INSERT INTO vorlesungen (name, beschreibung, dozent, ects) VALUES (?, ?, ?, ?)`,
		)
		statement.run(name, beschreibung, dozent, ects)

		console.log('Vorlesung erstellen:', {
			name,
			beschreibung,
			dozent,
			ects,
		})

		redirect('/')
	}

	return (
		<main className="container">
			<h1>Vorlesung erstellen</h1>

			<Form action={handleCreateVorlesung}>
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
