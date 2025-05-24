import { getDatabase } from './datenbank'

async function seed() {
	const database = await getDatabase()
	await database.run(`
        CREATE TABLE IF NOT EXISTS vorlesungen (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            beschreibung TEXT,
            dozent TEXT,
            ects INTEGER
        )
    `)

	const vorlesungen = [
		{
			name: 'Web Application Architecture',
			beschreibung:
				'Architekturprinzipien moderner Webanwendungen, Frameworks, Microservices und Deployment.',
			dozent: 'Fridtjof Toenniessen',
			ects: 5,
		},
		{
			name: 'Machine-Learning',
			beschreibung:
				'Einführung in maschinelles Lernen, inklusive überwachtem und unüberwachtem Lernen, sowie Anwendungsszenarien.',
			dozent: 'Johannes Maucher',
			ects: 5,
		},
		{
			name: 'Mobile Applications',
			beschreibung:
				'Entwicklung mobiler Apps für Android/iOS, inklusive UX-Design und Performanceoptimierung.',
			dozent: 'Ansgar Gerlicher, Zack Walker',
			ects: 5,
		},
		{
			name: 'Advanced Game Development',
			beschreibung:
				'Vertiefung in moderne Spieleentwicklungstechniken mit Fokus auf Physik, Grafik und Interaktion.',
			dozent: 'Stefan Radicke',
			ects: 5,
		},
	]

	try {
		await database.run('BEGIN')

		const statement = await database.prepare(`
            INSERT OR IGNORE INTO vorlesungen (name, beschreibung, dozent, ects)
            VALUES (?, ?, ?, ?)
        `)

		for (const vorlesung of vorlesungen) {
			await statement.run([
				vorlesung.name,
				vorlesung.beschreibung,
				vorlesung.dozent,
				vorlesung.ects,
			])
		}

		await statement.finalize()
		await database.run('COMMIT')
		console.log('Seed-Daten eingefügt.')
	} catch (err) {
		await database.run('ROLLBACK')
		console.error('Fehler beim Einfügen der Seed-Daten:', err)
	} finally {
		await database.close()
	}
}
seed()
