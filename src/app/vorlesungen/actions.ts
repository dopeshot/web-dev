'use server'

import Database from 'better-sqlite3'
import { redirect } from 'next/navigation'
import { routes } from '../routes'

export async function handleCreateVorlesung(formData: FormData) {
	// Formulardaten auslesen
	const edvnr = formData.get('edvnr')
	const name = formData.get('name')
	const beschreibung = formData.get('beschreibung')
	const dozent = formData.get('dozent')
	const ects = formData.get('ects')

	// Neue Vorlesung in der Datenbank speichern
	const database = new Database('datenbank.db')
	const statement = database.prepare(
		`INSERT INTO vorlesungen (edvnr, name, beschreibung, dozent, ects) VALUES (?, ?, ?, ?, ?)`,
	)
	statement.run(edvnr, name, beschreibung, dozent, ects)

	console.log('Vorlesung erstellen:', {
		edvnr,
		name,
		beschreibung,
		dozent,
		ects,
	})

	// Nach dem Speichern der Vorlesung zur Detailseite der neuen Vorlesung weiterleiten
	redirect(routes.vorlesungen.detail(edvnr as string))
}
