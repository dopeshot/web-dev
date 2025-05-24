export const routes = {
	vorlesungen: {
		overview: '/',
		detail: (id: string) => `/vorlesungen/${id}`,
		erstellen: '/vorlesungen/erstellen',
		merkliste: '/merkliste',
	},
	faq: '/faq',
}
