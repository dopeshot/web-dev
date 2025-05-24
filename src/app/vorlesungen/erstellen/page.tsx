import Form from 'next/form'

export default async function VorlesungErstellenPage() {
	const handleSubmit = async (formData: FormData) => {
		'use server'
		// Hier kannst du die Logik zum Speichern der Vorlesung implementieren
		// Zum Beispiel: await saveVorlesung(formData)
		console.log('Vorlesung erstellt:', Object.fromEntries(formData.entries()))
	}

	return (
		<main className="container">
			<section>
				<h1>Vorlesung erstellen</h1>
			</section>

			<section>
				<Form action={handleSubmit}>
					<div>
						<label htmlFor="edvnr">Edv Nummer</label>
						<input type="text" id="edvnr" />
					</div>

					<div>
						<label htmlFor="name" className="block mb-1">
							Name der Vorlesung
						</label>
						<input
							type="text"
							id="name"
							className="border border-gray-300 rounded p-2 w-full"
						/>
					</div>

					<div>
						<label htmlFor="beschreibung" className="block mb-1">
							Beschreibung
						</label>
						<textarea
							id="beschreibung"
							className="border border-gray-300 rounded p-2 w-full"
						></textarea>
					</div>

					<div>
						<label htmlFor="dozent" className="block mb-1">
							Name des Dozenten
						</label>
						<input
							type="text"
							id="dozent"
							className="border border-gray-300 rounded p-2 w-full"
						/>
					</div>

					<div>
						<label htmlFor="ects" className="block mb-1">
							ECTS-Punkte
						</label>
						<input
							type="number"
							id="ects"
							className="border border-gray-300 rounded p-2 w-full"
						/>
					</div>

					<button
						type="submit"
						className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200"
					>
						Vorlesung erstellen
					</button>
				</Form>
			</section>
		</main>
	)
}
