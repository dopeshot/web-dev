import { Params, Post } from '@/types/types'

export async function generateStaticParams() {
	// 25 blogs
	const posts: Post[] = await fetch('https://api.vercel.app/blog').then((res) =>
		res.json(),
	)
	return posts.map((post) => ({
		id: String(post.id),
	}))
}

export default async function Page(props: Params) {
	const { id } = await props.params
	const post: Post = await fetch(`https://api.vercel.app/blog/${id}`).then(
		(res) => res.json(),
	)
	return (
		<main className="container">
			<h1>{post.title}</h1>
			<p>{post.content}</p>
		</main>
	)
}
