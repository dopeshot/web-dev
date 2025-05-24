import { database } from './datenbank'

database.exec(`
    CREATE TABLE IF NOT EXISTS vorlesungen (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      beschreibung TEXT,
      dozent TEXT,
      ects INTEGER
    );
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

const insert = database.prepare(`
    INSERT OR IGNORE INTO vorlesungen (name, beschreibung, dozent, ects)
    VALUES (@name, @beschreibung, @dozent, @ects)
  `)

const insertMany = database.transaction((vorlesungen) => {
	for (const vorlesung of vorlesungen) insert.run(vorlesung)
})

insertMany(vorlesungen)
console.log('Seed-Daten eingefügt.')
