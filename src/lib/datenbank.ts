import os from 'os'
import path from 'path'
import { AsyncDatabase } from 'promised-sqlite3'

const datenbankPath = path.join(os.tmpdir(), 'datenbank.db')
console.log(`Datenbankpfad: ${datenbankPath}`)
let instance: AsyncDatabase | null = null

export async function getDatabase(): Promise<AsyncDatabase> {
	if (!instance) {
		instance = await AsyncDatabase.open(datenbankPath)
	}
	return instance
}
