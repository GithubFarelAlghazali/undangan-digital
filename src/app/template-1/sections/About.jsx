import { imperial, petit, serif } from "../fonts";
import { WeddingCard } from "../components/Cards";
import Image from "next/image";
import sidePic from "../ornaments/wayangan.svg";
import * as motion from "motion/react-client";

export default function About() {
	return (
		<section className=" bg-black w-screen text-white lg:p-24 relative">
			<Image src={sidePic} alt="" className="opacity-30 absolute lg:-right-1/5 -right-1/2 lg:scale-100 scale-50 lg:top-32 top-56" />
			<Image src={sidePic} alt="" className="opacity-30 absolute lg:-left-1/5 -left-1/2 lg:scale-100 scale-50 top-56 lg:top-32" />
			<motion.article
				className="lg:w-1/2 w-[90%] py-10 mx-auto text-center "
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
				<p className={petit.className}>
					Di antara tanda-tanda (kebesaran)-Nya ialah bahwa Dia menciptakan pasangan-pasangan untukmu dari (jenis) dirimu sendiri agar kamu merasa tenteram kepadanya. Dia menjadikan di antaramu rasa cinta dan kasih sayang. Sesungguhnya
					pada yang demikian itu benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir.
				</p>
				<span className="my-20 inline-block text-yellow-300">Surah Ar-Rum ayat 21</span>
			</motion.article>
			<div>
				<article className={`${serif.className} text-center my-20 lg:w-1/2 mx-auto`}>
					<h2 className="text-xl">Assalamu'alaikum warahmatullahi wabarakatuh</h2>
					<p>Dengan memohon Rahmat dan Ridho Alah SWT, kami bermaksud menyelenggarakan Pernikahan putra - putri kami</p>
				</article>
				<div className="flex lg:flex-row flex-col justify-evenly items-center">
					<WeddingCard img={"/weddings/pria.webp"} name={"Fauzi Ahmad Hakim"} desc={"Putra Pertama Bapak Zainul Hakim"} />
					<span className={`${imperial.className} text-yellow-200 text-8xl`}>&</span>
					<WeddingCard img={"/weddings/wanita.webp"} name={"Alisa Subandono"} desc={"Putri Kedua Bapak Rahman Subandono"} />
				</div>
			</div>
		</section>
	);
}
