import Database from 'better-sqlite3'
import path from 'path'

const datenbankPath = path.join('datenbank.db')
export const database = new Database(datenbankPath)
