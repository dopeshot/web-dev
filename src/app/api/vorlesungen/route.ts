import { getDatabase } from '@/lib/datenbank'
import { Vorlesung } from '@/types/types'
import { NextRequest } from 'next/server'

// /api/vorlesungen?ids=123,456,789
export async function GET(request: NextRequest) {
	// TODO: Hole aus der URL den Parameter "ids" mit dem request.
	const idsParam = null

	if (!idsParam) {
		// TODO: Wenn kein Parameter "ids" in der URL ist, dann gebe eine leere Liste zurück.
	}

	// idsParam ist z. B. "123,456,789"
	// Wir machen daraus ein Array: ['123', '456', '789']
	const ids = idsParam.split(',')

	// Wir brauchen für jeden Wert ein ? als Platzhalter für SQL, also z. B.: "?, ?, ?"
	const placeholders = ids.map(() => '?').join(', ')

	// Wir bauen das SQL-Statement mit den Platzhaltern
	const query = `SELECT * FROM vorlesungen WHERE id IN (${placeholders})`

	// Jetzt bereiten wir das Statement vor und geben die echten IDs als Parameter rein
	const database = await getDatabase()
	const vorlesungen = await database.all<Vorlesung>(query, ids)

	// TODO: Gebe die Vorlesungen als JSON zurück.
}
