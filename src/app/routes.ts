export const routes = {
	vorlesungen: {
		overview: '/',
		detail: (slug: string) => `/vorlesungen/${slug}`,
		erstellen: '/vorlesungen/erstellen',
	},
	faq: '/faq',
}
