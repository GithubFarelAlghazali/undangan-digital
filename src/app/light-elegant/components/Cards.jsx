import { fancy, formal } from "../fonts";
import { RoundTopImg } from "./Frames";
import { FaRegMap, FaCalendar } from "react-icons/fa";
import { IoIosTime } from "react-icons/io";
import * as motion from "motion/react-client";

const elegantTransition = {
	duration: 0.8,
	ease: [0.25, 0.46, 0.45, 0.94],
};

const staggerContainer = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: { staggerChildren: 0.2 },
	},
};

const fadeInUp = {
	hidden: { opacity: 0, y: 30 },
	visible: {
		opacity: 1,
		y: 0,
		transition: elegantTransition,
	},
};

const scaleIn = {
	hidden: { opacity: 0, scale: 0.8 },
	visible: {
		opacity: 1,
		scale: 1,
		transition: elegantTransition,
	},
};

const lineDraw = {
	hidden: { width: "0%" },
	visible: {
		width: "100%",
		transition: { duration: 1, ease: "easeInOut" },
	},
};

export function WeddingCard({ img, name, desc }) {
	return (
		<motion.figure variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} className="lg:w-1/3 p-5">
			<motion.div variants={scaleIn}>
				<RoundTopImg img={img} alt={name} />
			</motion.div>

			<figcaption className="my-5 text-center">
				<motion.h3 variants={fadeInUp} className={`${fancy.className} text-5xl text-yellow-800`}>
					{name}
				</motion.h3>
				<motion.div variants={fadeInUp} className="mt-2">
					{desc}
				</motion.div>
			</figcaption>
		</motion.figure>
	);
}

export function RundownCard({ agenda, location, date, time }) {
	return (
		<motion.div
			variants={staggerContainer}
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, amount: 0.2 }}
			className="lg:w-1/3 w-full outline-1 p-5 outline-yellow-500 rounded-xl flex flex-col gap-3 items-center bg-black/20 backdrop-blur-sm"
		>
			<motion.h3 variants={fadeInUp} className={`${fancy.className} text-6xl text-yellow-100`}>
				{agenda}
			</motion.h3>

			<motion.div variants={fadeInUp} className="flex flex-col gap-2 items-center text-white/90">
				<span className="flex items-center gap-2">
					<FaCalendar className="text-yellow-500" />
					{date}
				</span>
				<span className="flex items-center gap-2">
					<IoIosTime className="size-5 text-yellow-500" />
					{time}
				</span>
			</motion.div>

			<motion.hr variants={lineDraw} className="bg-yellow-500 h-[1px] border-none my-2" />

			<motion.p variants={fadeInUp} className="text-center px-4 font-light">
				{location}
			</motion.p>

			<motion.button
				variants={scaleIn}
				whileHover={{ scale: 1.05 }}
				whileTap={{ scale: 0.95 }}
				className="flex justify-center gap-3 items-center cursor-pointer p-3 px-6 mt-2 rounded-xl bg-yellow-500 text-gray-950 font-semibold shadow-lg shadow-yellow-500/20"
			>
				<FaRegMap />
				Lihat Lokasi
			</motion.button>
		</motion.div>
	);
}

export function GiftCard({ bank, number, name }) {
	return (
		<motion.div
			variants={staggerContainer}
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true }}
			className="lg:w-1/3 w-full outline-1 bg-slate-950 shadow-xl shadow-yellow-500/10 z-50 p-6 outline-yellow-500 rounded-xl flex flex-col gap-4 text-center items-center relative overflow-hidden"
		>
			<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent opacity-50"></div>

			<motion.h3 variants={fadeInUp} className={`${formal.className} text-2xl font-bold tracking-wide text-yellow-100`}>
				{bank}
			</motion.h3>

			<motion.div variants={fadeInUp} className="bg-white/5 p-4 rounded-lg w-full border border-white/10">
				<p className="text-lg font-mono tracking-wider text-yellow-400 font-bold select-all">{number}</p>
				<p className="text-sm text-gray-400 mt-1">A.n {name}</p>
			</motion.div>

			<motion.hr variants={lineDraw} className="bg-yellow-500/30 w-full border-none h-[1px]" />

			<motion.p variants={fadeInUp} className="text-sm text-gray-400 uppercase tracking-widest">
				Atau
			</motion.p>

			<motion.button variants={scaleIn} whileHover={{ scale: 1.05, backgroundColor: "#facc15" }} whileTap={{ scale: 0.95 }} className="w-full p-3 rounded-xl bg-yellow-600 text-white font-semibold transition-colors">
				Bayar dengan QRIS
			</motion.button>
		</motion.div>
	);
}
