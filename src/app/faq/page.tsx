import Link from 'next/link'

export default async function Faq() {
	return (
		<main className="container">
			<h1>Häufig gestellte Fragen (FAQ)</h1>

			<details name="faq" open>
				<summary>Wie melde ich mich für eine Vorlesung an?</summary>
				<p>
					Die Anmeldung erfolgt über den{' '}
					<Link href="https://splan.hdm-stuttgart.de/" target="_blank">
						splan
					</Link>{' '}
					und über das Hochschulportal. Bitte beachte die jeweiligen Fristen und
					Voraussetzungen.
				</p>
			</details>

			<hr />

			<details name="faq">
				<summary>Wie viele ECTS-Punkte erhalte ich für eine Vorlesung?</summary>
				<p>
					Die Anzahl der ECTS-Punkte findest du direkt im Vorlesungsverzeichnis
					bei der jeweiligen Veranstaltung. Es sind jedoch meistens 5 ECTS.
				</p>
			</details>

			<hr />

			<details name="faq">
				<summary>
					Kann ich Veranstaltungen aus anderen Studiengängen belegen?
				</summary>
				<p>
					Das hängt von deinem Studiengang ab. In vielen Fällen ist eine
					Belegung als Wahlfach möglich, sofern keine Zugangsbeschränkungen
					bestehen.
				</p>
			</details>

			<hr />

			<details name="faq">
				<summary>Was passiert, wenn eine Veranstaltung ausfällt?</summary>
				<p>
					Dozierende informieren in der Regel per E-Mail über Ausfälle und
					Nachholtermine. Prüfe regelmäßig dein Hochschulpostfach.
				</p>
			</details>
		</main>
	)
}
