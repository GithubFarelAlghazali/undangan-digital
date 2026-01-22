import * as motion from "motion/react-client";
import { biodata } from "../data";
import bg from "../ornaments/bg.svg";
import flower from "../ornaments/flower-2.svg";
import Image from "next/image";
import { fancy } from "../fonts";

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
		<header className="h-dvh bg-slate-50 relative overflow-hidden flex justify-center items-center px-5 pt-8">
			<Image src={bg} alt="Undangan Pernikahan" className="absolute top-1/2 left-1/2 -translate-1/2 opacity-35 w-96" />
			<Image src={flower} alt="Undangan Pernikahan" className="absolute bottom-0 left-0  w-1/2 lg:w-1/5 z-30" />
			<Image src={flower} alt="Undangan Pernikahan" className="absolute bottom-0 right-0  w-1/2 lg:w-1/5 z-30 -scale-x-100" />
			<motion.main
				variants={containerVariants}
				initial={"hidden"}
				animate={"visible"}
				className="lg:w-1/2 w-full flex justify-center items-center h-full flex-col rounded-t-full 
                border-2 border-yellow-600 border-b-0
                ring-2 ring-yellow-600 
                ring-offset-4 ring-offset-white text-center z-20 translate-y-1"
			>
				<motion.p variants={itemVariants}>WEDDING OF</motion.p>
				<motion.h1 variants={itemVariants} className={`${fancy.className} text-8xl my-8 text-gray-800`}>
					{biodata.bride.nickname}
					<span className="m-5 block lg:inline">&</span>
					{biodata.groom.nickname}
				</motion.h1>
				<motion.p variants={itemVariants}>{biodata.date}</motion.p>
			</motion.main>
		</header>
	);
}
