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
  - „Merken“-Button (Speichern im Client)
- **Erstellen einer neuen Vorlesung** (`/vorlesungen/erstellen`)
- **Merkliste** (`/merkliste`)
  - Anzeige aller gemerkten Vorlesungen
- **FAQ-Seite** (`/faq`)

## Projektstruktur

```bash
app/
├─ layout.tsx              # Globales Layout mit Navigation
├─ page.tsx                # Startseite – Übersicht aller Vorlesungen
├─ vorlesungen/
│   └─ [id]/
│       └─ page.tsx        # Dynamische Detailseite pro Vorlesung
├─ vorlesungen/
│   └─ erstellen/
│       └─ page.tsx        # Erstellen einer neuen Vorlesung
├─ merkliste/
│   └─ page.tsx            # Merkliste (Client-seitig)
├─ faq/
│   └─ page.tsx            # Statische FAQ-Seite
```
