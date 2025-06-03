export type Vorlesung = {
	id: string
	name: string
	beschreibung: string
	dozent: string
	ects: number
}

export interface Post {
	id: string
	title: string
	content: string
}

export type Params = {
  params: Promise<{
    id: string;
  }>;
};