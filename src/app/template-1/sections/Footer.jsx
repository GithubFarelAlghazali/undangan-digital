import { imperial, serif } from "../fonts";
import { OvalImg } from "../components/Frames";
import Image from "next/image";
import ornament from "../ornaments/String.svg";
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

const fadeInUp = {
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

const photoVariants = {
	hidden: { scale: 0.9, opacity: 0, y: 20 },
	visible: {
		scale: 1,
		opacity: 1,
		y: 0,
		transition: {
			duration: 1.2,
			ease: "easeOut",
		},
	},
};

const ornamentVariants = {
	hidden: { scale: 0, rotate: -45, opacity: 0 },
	visible: {
		scale: 1,
		rotate: 0,
		opacity: 1,
		transition: {
			type: "spring",
			stiffness: 100,
			damping: 15,
		},
	},
};

export default function Footer() {
	return (
		<motion.section
			variants={containerVariants}
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, amount: 0.2 }} // Animasi jalan saat 20% footer terlihat
			className="bg-black text-white lg:p-24 p-8 overflow-hidden relative"
		>
			<motion.div variants={photoVariants} className="relative z-10">
				<OvalImg img={"/weddings/prewed2.webp"} alt={"Foto Kedua Mempelai"} style={"mt-20 mx-auto w-96 grayscale hover:grayscale-0 transition-all duration-700"} />
			</motion.div>

			<motion.article variants={fadeInUp} className={`${serif.className} text-center mt-10 lg:w-96 mx-auto relative z-10`}>
				<p className="leading-relaxed text-white/90">Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/lbu/Saudara/i berkenan hadir untuk memberikan doa restu kepada putra-putri kami.</p>
				<br />
				<p className="italic font-medium">Wassalamu'alalaikum warahmatullahi wabarakatuh</p>
			</motion.article>

			<motion.div variants={ornamentVariants} className="flex justify-center my-10 relative z-10">
				<Image src={ornament} alt="ornament" className="w-24 opacity-80" />
			</motion.div>

			<footer className="w-full text-center relative z-10">
				<motion.p variants={fadeInUp} className={`${serif.className} text-sm tracking-widest uppercase text-white/60`}>
					Kami yang Berbahagia
				</motion.p>

				<motion.h5 variants={fadeInUp} className={`${imperial.className} text-yellow-200 text-7xl my-6 drop-shadow-lg`}>
					Fauzi & Alisa
				</motion.h5>

				<motion.div variants={fadeInUp} className="mt-12">
					<p className="text-gray-600 text-xs tracking-widest">Made by Zentra - 2026</p>
				</motion.div>
			</footer>

			<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-64 bg-yellow-500/5 blur-[100px] pointer-events-none rounded-full"></div>
		</motion.section>
	);
}
