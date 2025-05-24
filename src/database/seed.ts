import Database from 'better-sqlite3'
import fs from 'fs'
import path from 'path'

const dbPath = path.join(process.cwd(), 'data', 'dev.db')
fs.mkdirSync(path.dirname(dbPath), { recursive: true })

const db = new Database(dbPath)

db.exec(`
  CREATE TABLE IF NOT EXISTS vorlesungen (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    beschreibung TEXT,
    dozent TEXT,
    ects INTEGER,
    edvnr TEXT UNIQUE NOT NULL
  );
`)

const vorlesungen = [
	{
		name: 'Web Application Architecture',
		beschreibung:
			'Architekturprinzipien moderner Webanwendungen, Frameworks, Microservices und Deployment.',
		dozent: 'Fridtjof Toenniessen',
		ects: 5,
		edvnr: '143111a',
	},
	{
		name: 'Machine-Learning',
		beschreibung:
			'Einführung in maschinelles Lernen, inklusive überwachtem und unüberwachtem Lernen, sowie Anwendungsszenarien.',
		dozent: 'Johannes Maucher',
		ects: 5,
		edvnr: '143104a',
	},
	{
		name: 'Mobile Applications',
		beschreibung:
			'Entwicklung mobiler Apps für Android/iOS, inklusive UX-Design und Performanceoptimierung.',
		dozent: 'Ansgar Gerlicher, Zack Walker',
		ects: 5,
		edvnr: '143301a',
	},
	{
		name: 'Advanced Game Development',
		beschreibung:
			'Vertiefung in moderne Spieleentwicklungstechniken mit Fokus auf Physik, Grafik und Interaktion.',
		dozent: 'Stefan Radicke',
		ects: 5,
		edvnr: '143402a',
	},
]

const insert = db.prepare(`
  INSERT OR IGNORE INTO vorlesungen (name, beschreibung, dozent, ects, edvnr)
  VALUES (@name, @beschreibung, @dozent, @ects, @edvnr)
`)

const insertMany = db.transaction((vorlesungen) => {
	for (const vorlesung of vorlesungen) insert.run(vorlesung)
})

insertMany(vorlesungen)

console.log('Seed-Daten eingefügt.')
