import { getDatabase } from '@/lib/datenbank'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

export default function VorlesungErstellenPage() {
	// TODO: Mache aus dieser Funktion eine Server Action und vervollständige sie
	const save = async (formData: FormData) => {
		const name = formData.get('name')

		const database = await getDatabase()
		await database.run(`INSERT INTO vorlesungen (name) VALUES (?)`, [name])

		// revalidatePath('/') sorgt dafür, dass die Startseite neu geladen wird
		revalidatePath('/')
		// Nach dem Speichern der Vorlesung, zur Startseite weiterleiten
		redirect('/')
	}
	return (
		<main className="container">
			<h1>Vorlesung erstellen</h1>

			{/* TODO: save hinzufügen */}
			<form>
				{/* Name der Vorlesung */}
				<label>Name der Vorlesung</label>
				<input type="text" name="name" />

				{/* TODO: Restliche Felder hinzufügen */}

				{/* Submit Button */}
				<button type="submit">Vorlesung erstellen</button>
			</form>
		</main>
	)
}
