import { database } from '@/app/lib/datenbank'
import { Vorlesung } from '@/types/types'
import { NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
	const idsParam = request.nextUrl.searchParams.get('ids')

	if (!idsParam) {
		return new Response(JSON.stringify([]), { status: 200 })
	}

	// idsParam ist z. B. "123,456,789"
	// Wir machen daraus ein Array: ['123', '456', '789']
	const ids = idsParam.split(',')

	// Wir brauchen für jeden Wert ein ? als Platzhalter für SQL, also z. B.: "?, ?, ?"
	const placeholders = ids.map(() => '?').join(', ')

	// Wir bauen das SQL-Statement mit den Platzhaltern
	const query = `SELECT * FROM vorlesungen WHERE edvnr IN (${placeholders})`

	// Jetzt bereiten wir das Statement vor und geben die echten IDs als Parameter rein
	const statement = database.prepare(query)
	const vorlesungen = statement.all(...ids) as Vorlesung[]

	return Response.json(vorlesungen)
}
