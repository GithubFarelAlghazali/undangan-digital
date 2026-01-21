import { serif } from "../fonts";
import * as motion from "motion/react-client";

const gridContainerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.2,
		},
	},
};

const textItemVariants = {
	hidden: { opacity: 0, y: 30 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.8,
			ease: [0.22, 1, 0.36, 1],
		},
	},
};

const imageItemVariants = {
	hidden: { opacity: 0, scale: 1.1 },
	visible: {
		opacity: 1,
		scale: 1,
		transition: {
			duration: 1.2,
			ease: "easeOut",
		},
	},
};

export default function Memories() {
	return (
		<section className={"bg-black py-24 " + serif.className}>
			<motion.h2
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8, delay: 0.2 }}
				viewport={{ once: true }}
				className="lg:text-4xl text-3xl text-center pb-20 text-yellow-100/90 tracking-widest uppercase"
			>
				Perjalanan Kami
			</motion.h2>

			<motion.div variants={gridContainerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="grid grid-cols-2 grid-rows-3 lg:w-1/2 mx-auto gap-4 px-4">
				<motion.div variants={textItemVariants} className="place-self-center lg:text-5xl text-xl text-white">
					<h3 className="tracking-widest">FAUZI</h3>
					<div className="h-px w-12 bg-yellow-500 mt-2 mx-auto lg:mx-0"></div>
				</motion.div>

				<motion.div variants={imageItemVariants} className="overflow-hidden rounded-tr-[3rem]">
					<motion.img
						whileHover={{ scale: 1.05 }}
						transition={{ duration: 0.5 }}
						className="aspect-square object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer"
						src="/weddings/prewed1.webp"
						alt="Fauzi Photo"
					/>
				</motion.div>

				<motion.div variants={imageItemVariants} className="overflow-hidden rounded-bl-[3rem]">
					<motion.img
						whileHover={{ scale: 1.05 }}
						transition={{ duration: 0.5 }}
						className="aspect-square object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer"
						src="/weddings/prewed2.webp"
						alt="Couple Photo"
					/>
				</motion.div>

				<motion.div variants={textItemVariants} className="place-self-center lg:text-5xl text-xl text-yellow-200 font-serif italic">
					<h3>&</h3>
				</motion.div>

				<motion.div variants={textItemVariants} className="place-self-center lg:text-5xl text-xl text-white">
					<h3 className="tracking-widest">ALISA</h3>
					<div className="h-px w-12 bg-yellow-500 mt-2 mx-auto lg:ml-auto"></div>
				</motion.div>

				<motion.div variants={imageItemVariants} className="overflow-hidden rounded-br-[3rem]">
					<motion.img
						whileHover={{ scale: 1.05 }}
						transition={{ duration: 0.5 }}
						className="aspect-square object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer"
						src="/weddings/prewed3.webp"
						alt="Alisa Photo"
					/>
				</motion.div>
			</motion.div>
		</section>
	);
}
