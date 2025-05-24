import { Vorlesung } from '@/types/types'
import Database from 'better-sqlite3'
import path from 'path'

const db = new Database(path.join(process.cwd(), 'data', 'dev.db'))

export function getVorlesungen(): Vorlesung[] {
	const statement = db.prepare('SELECT * FROM vorlesungen')
	return statement.all() as Vorlesung[]
}

export function getVorlesungByEdvnr(edvnr: string): Vorlesung | null {
	const statement = db.prepare('SELECT * FROM vorlesungen WHERE edvnr = ?')
	const result = statement.get(edvnr)
	return result ? (result as Vorlesung) : null
}

export function createVorlesung(name: string, edvnr: string) {
	const statement = db.prepare(
		'INSERT INTO vorlesungen (name, edvnr) VALUES (?, ?)',
	)
	statement.run(name, edvnr)
}
