import { serif } from "../fonts";
import { GiftCard } from "../components/Cards";
import Image from "next/image";
import ornament from "../ornaments/Abs.svg";

export default function Donate() {
	return (
		<section className="bg-gray-950 py-32 px-5 text-center relative overflow-hidden">
			<Image src={ornament} alt="" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
			<article className={`${serif.className} pb-20`}>
				<h2 className="lg:text-4xl text-2xl text-center mb-5">Hadiah Digital</h2>
				<p>Bagi Bapak/Ibu yang berkenan memberikan hadiah berupa saldo dapat menggirimkan ke nomor rekening berikut</p>
			</article>
			<div className="flex flex-col lg:flex-row justify-center items-center gap-10">
				<GiftCard name={"Nadin Amizah Subandono"} number={"133 453 991 120"} bank={"BANK NASIONAL INDONESIA"} />
				<GiftCard name={"Nadin Amizah Subandono"} number={"133 453 991 120"} bank={"BANK CENTRAL ASIA"} />
			</div>
		</section>
	);
}
