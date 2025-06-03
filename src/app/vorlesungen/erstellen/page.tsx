import { getDatabase } from '@/lib/datenbank'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

export const metadata = {
	title: 'Vorlesung erstellen',
	description: 'Hier kannst du eine neue Vorlesung erstellen.',
}

export default function VorlesungErstellenPage() {
	async function save(formData: FormData) {
		'use server'

		// Formulardaten auslesen
		const name = formData.get('name')
		const beschreibung = formData.get('beschreibung')
		const dozent = formData.get('dozent')
		const ects = formData.get('ects')

		// Neue Vorlesung in der Datenbank speichern
		const database = await getDatabase()
		await database.run(
			`INSERT INTO vorlesungen (name, beschreibung, dozent, ects) VALUES (?, ?, ?, ?)`,
			[name, beschreibung, dozent, ects],
		)
		revalidatePath('/')
		redirect('/')
	}

	return (
		<main className="container">
			<h1>Vorlesung erstellen</h1>

			<form action={save}>
				{/* Name der Vorlesung */}
				<label>Name der Vorlesung</label>
				<input type="text" name="name" />

				{/* Beschreibung der Vorlesung */}
				<label>Beschreibung</label>
				<textarea name="beschreibung"></textarea>

				{/* Name des Dozenten */}
				<label>Name des Dozenten</label>
				<input type="text" name="dozent" />

				{/* ECTS Punkte */}
				<label>ECTS-Punkte</label>
				<input type="number" name="ects" />

				{/* Submit Button */}
				<button type="submit">Vorlesung erstellen</button>
			</form>
		</main>
	)
}
