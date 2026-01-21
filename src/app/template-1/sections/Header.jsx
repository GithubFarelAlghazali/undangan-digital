import { imperial } from "../fonts";
import * as motion from "motion/react-client";

const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.3,
			delayChildren: 0.2,
		},
	},
};

const itemVariants = {
	hidden: { y: 30, opacity: 0 },
	visible: {
		y: 0,
		opacity: 1,
		transition: {
			duration: 0.8,
			ease: [0.25, 0.46, 0.45, 0.94],
		},
	},
};

export default function Header() {
	return (
		<header className="h-dvh relative overflow-hidden text-white">
			<motion.div className="absolute inset-0 bg-[url('/weddings/background.webp')] bg-cover bg-center bg-no-repeat" initial={{ scale: 1.1, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 2.5, ease: "easeOut" }} />
			<div className="absolute inset-0 bg-black/40" />
			<div className="relative size-full flex justify-center flex-col items-center">
				<motion.main className="size-fit text-center z-50 px-4" variants={containerVariants} initial="hidden" animate="visible">
					<motion.h1 variants={itemVariants} className="text-sm md:text-base tracking-[0.3em] font-light mb-4 uppercase">
						The Wedding of
					</motion.h1>
					<motion.h2 variants={itemVariants} className={`${imperial.className} text-7xl md:text-8xl lg:text-[10em] text-yellow-100 leading-none drop-shadow-lg`}>
						<span className="block lg:inline">Fauzi</span>
						<motion.span
							variants={itemVariants} // Ampersand muncul terpisah
							className="text-4xl lg:text-6xl align-middle mx-2 lg:mx-6 my-2 lg:my-0 block lg:inline text-white/80 font-sans font-light"
						>
							&
						</motion.span>
						<span className="block lg:inline">Alisa</span>
					</motion.h2>

					<br className="hidden lg:block" />
					<br className="hidden lg:block" />
					<motion.div variants={itemVariants} className="mt-8 lg:mt-0 space-y-3">
						<div className="w-12 h-px bg-white/50 mx-auto mb-4"></div>
						<p className="tracking-widest text-sm md:text-lg font-light">SELASA, 20 JANUARI 2026</p>
					</motion.div>
				</motion.main>

				{/* Gradient Fade di Bawah */}
				<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5, duration: 1 }} className="w-full h-40 bg-gradient-to-b from-transparent to-black absolute bottom-0 z-40 pointer-events-none" />
			</div>
		</header>
	);
}
