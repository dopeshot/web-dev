export default async function VorlesungErstellenPage() {
	return (
		<main className="container">
			<section>
				<h1 className="text-2xl font-bold mb-2">Vorlesung erstellen</h1>
				<p className="mb-2">
					Hier kannst du eine neue Vorlesung erstellen. Bitte fülle alle
					erforderlichen Felder aus.
				</p>
			</section>

			<section>
				<form className="flex flex-col gap-4">
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
				</form>
			</section>
		</main>
	)
}
