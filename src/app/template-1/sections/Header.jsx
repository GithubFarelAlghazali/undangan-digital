import { imperial } from "../fonts";
import * as motion from "motion/react-client";

export default function Header() {
	return (
		<header className="h-screen bg-[url('/weddings/background.webp')] bg-cover bg-center bg-no-repeat text-white  ">
			<div className="size-full flex justify-center flex-col items-center bg-black/50">
				<main className="size-fit text-center z-50">
					<motion.h1
						initial={{ y: "2em", opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{
							duration: 0.5,
							ease: "easeOut",
						}}
					>
						THE WEDDING OF
					</motion.h1>
					<h2 className={`${imperial.className} text-8xl lg:text-[10em] text-yellow-100`}>
						Fauzi
						<span className="lg:m-5 lg:inline block">&</span>
						Alisa
					</h2>
					<br />
					<br />
					<p className="">Selasa, 20 Januari 2026</p>
				</main>
				<div className="w-full bg-linear-to-b from-transparent to-black p-56 absolute -bottom-5"></div>
			</div>
		</header>
	);
}
