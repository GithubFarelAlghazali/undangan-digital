import { imperial, serif } from "../fonts";
import { OvalImg } from "../components/Frames";
import Image from "next/image";
import ornament from "../ornaments/String.svg";

export default function Footer() {
	return (
		<section className=" bg-black text-white lg:p-24 p-8">
			<OvalImg img={"/weddings/prewed2.webp"} alt={"Foto Kedua Mempelai"} style={"mt-20 mx-auto w-96"} />
			<article className={`${serif.className} text-center mt-10 lg:w-96 mx-auto`}>
				<p>Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/lbu/Saudara/i berkenan hadir untuk memberikan doa restu kepada putra-putri kami.</p>
				<br />
				<p>Wassalamu'alalaikum warahmatullahi wabarakatuh</p>
			</article>
			<Image src={ornament} alt="" className="w-24  mx-auto my-10" />
			<footer className="w-full text-center">
				<p className={serif.className}>Kami yang Berbahagia</p>
				<h5 className={`${imperial.className} text-yellow-200 text-7xl my-5`}>Fauzi & Alisa</h5>
				<p className="text-gray-500">Made by Zentra - 2026</p>
			</footer>
		</section>
	);
}
