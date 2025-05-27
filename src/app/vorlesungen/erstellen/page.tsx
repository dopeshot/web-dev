import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

export default function VorlesungErstellenPage() {
	const save = async (formData: FormData) => {
		// TODO: Server Actions hinzufügen um Vorlesungen in der Datenbank zu speichern
		// TIPP: Mit formData.get('name') einzelne Formulardaten auslesen

		// revalidatePath('/') sorgt dafür, dass die Startseite neu geladen wird
		revalidatePath('/')
		// Nach dem Speichern der Vorlesung, zur Startseite weiterleiten
		redirect('/')
	}
	return (
		<main className="container">
			<h1>Vorlesung erstellen</h1>

			{/* TODO: Formular erstellen */}
		</main>
	)
}
