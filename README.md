# Beispielprojekt Vorlesungsverzeichnis 📚

Ein einfaches Beispielprojekt für die Vorlesung "143404a Entwicklung von Web-Anwendungen". Ein Vorlesungsverzeichnis mit den Vorlesungen aus Computer Science and Media an der Hdm.

## Starten

```bash
npm install
npm run dev
```

Projekt öffnen unter: [http://localhost:3000](http://localhost:3000)

## Verwendete Packages

- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Pico.css](https://picocss.com/) (Minimal-Styles für schnelle UI)
- [ESLint](https://eslint.org/) – Linter für sauberen Code
- [Prettier](https://prettier.io/) – Code Formatter

## Features

- **Übersicht aller Vorlesungen** (`/`)
- **Detailseite einer Vorlesung** (`/vorlesungen/:id`)
  - Mit Titel, Beschreibung, Dozent, ECTS
  - „Merken“-Button (Speichern im Browser)
- **Merkliste** (`/merkliste`)
  - Anzeige aller gemerkten Vorlesungen (localStorage-basiert)
- **FAQ-Seite** (`/faq`)
  - Statische Liste von Fragen und Antworten

## Struktur

app/
├─ layout.js # Globales Layout (Header/Footer)
├─ page.js # Startseite – Übersicht aller Vorlesungen
├─ vorlesungen/
│ └─ [id]/
│ └─ page.js # Dynamische Detailseite pro Vorlesung
├─ merkliste/
│ └─ page.js # Client-seitige Merkliste
├─ faq/
│ └─ page.js # Statische FAQ-Seite
