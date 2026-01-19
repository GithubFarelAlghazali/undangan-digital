import { imperial, petit, serif } from "../fonts";
import { WeddingCard } from "../components/Cards";

export default function About() {
	return (
		<section className=" bg-black text-white lg:p-24 ">
			<article className="lg:w-1/2 w-[90%] py-10 mx-auto text-center ">
				<p className={petit.className}>
					Di antara tanda-tanda (kebesaran)-Nya ialah bahwa Dia menciptakan pasangan-pasangan untukmu dari (jenis) dirimu sendiri agar kamu merasa tenteram kepadanya. Dia menjadikan di antaramu rasa cinta dan kasih sayang. Sesungguhnya
					pada yang demikian itu benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir.
				</p>
				<span className="my-20 inline-block text-yellow-300">Surah Ar-Rum ayat 21</span>
			</article>
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
