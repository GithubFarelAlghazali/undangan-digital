import Link from "next/link";

export default function Home() {
	return (
		<main className="bg-gray-100 p-24 text-slate-950 w-screen h-screen">
			<h1 className="text-3xl font-semibold">Undangan Digital</h1>
			<ul>
				<li>
					<Link href="/dark-elegant">Dark Elegant</Link>
				</li>
				<li>
					<Link href="/light-elegant">Light Elegant</Link>
				</li>
			</ul>
		</main>
	);
}
