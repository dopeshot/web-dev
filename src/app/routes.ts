export const routes = {
	vorlesungen: {
		overview: '/',
		detail: (edvnr: string) => `/vorlesungen/${edvnr}`,
		erstellen: '/vorlesungen/erstellen',
		merkliste: '/merkliste',
	},
	faq: '/faq',
}
