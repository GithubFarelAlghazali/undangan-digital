import { fancy, ayat, formal } from "../fonts";
import { WeddingCard } from "../components/Cards";
import Image from "next/image";
import sidePic from "../ornaments/wayangan.svg";
import * as motion from "motion/react-client";
import { biodata } from "../data";

export default function About() {
	return (
		<section className=" bg-slate-50 w-screen text-inherit lg:p-24 relative px-5 overflow-y-hidden">
			<article
				className="lg:w-1/2 w-full py-20 mx-auto text-center rounded-b-full 
                border-2 border-yellow-600 border-t-0
                ring-2 ring-yellow-600 
                ring-offset-4 ring-offset-white -translate-y-1"
			>
				<motion.p
					className={ayat.className}
					initial={{ opacity: 0, filter: "blur(5px)", y: "5px" }}
					whileInView={{ opacity: 1, filter: "blur(0px)", y: "0px" }}
					transition={{
						duration: 0.5,
						ease: "easeIn",
					}}
					viewport={{
						once: true,
						amount: 0.5,
					}}
				>
					Di antara tanda-tanda (kebesaran)-Nya ialah bahwa Dia menciptakan pasangan-pasangan untukmu dari (jenis) dirimu sendiri agar kamu merasa tenteram kepadanya. Dia menjadikan di antaramu rasa cinta dan kasih sayang. Sesungguhnya
					pada yang demikian itu benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir.
				</motion.p>
				<span className="my-10 inline-block text-yellow-900">Surah Ar-Rum ayat 21</span>
			</article>
			<div>
				<article className={`${formal.className} text-center my-20 lg:w-1/2 mx-auto`}>
					<h2 className="text-xl">Assalamu'alaikum warahmatullahi wabarakatuh</h2>
					<p>Dengan memohon Rahmat dan Ridho Alah SWT, kami bermaksud menyelenggarakan Pernikahan putra - putri kami</p>
				</article>
				<div className="flex lg:flex-row flex-col justify-evenly items-center">
					<WeddingCard img={biodata.bride.img} name={biodata.bride.name} desc={biodata.bride.desc} />
					<span className={`${fancy.className} text-yellow-800 text-8xl`}>&</span>
					<WeddingCard img={biodata.groom.img} name={biodata.groom.name} desc={biodata.groom.desc} />
				</div>
			</div>
		</section>
	);
}
