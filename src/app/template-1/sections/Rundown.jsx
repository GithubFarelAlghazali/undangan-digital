import { serif } from "../fonts";
import { RundownCard } from "../components/Cards";
import Countdown from "../components/Countdown";
import Image from "next/image";
import border from "../ornaments/border.svg";

export default function Rundown() {
	return (
		<section className="w-full bg-gray-950 lg:p-24 py-10 px-5 relative">
			<Image src={border} alt="" className="absolute lg:w-56 w-32 bottom-0 left-0" />
			<Image src={border} alt="" className="absolute lg:w-56 w-32 top-0 right-0 rotate-180" />
			<h2 className={`${serif.className} lg:text-4xl text-2xl text-center pb-25`}>Rangkaian Acara</h2>
			<div className="flex flex-col lg:flex-row justify-center items-center gap-10">
				<RundownCard agenda={"Akad Nikah"} date={"17 Januari 2026"} time={"05:00 - 06.30"} location={"KUA Kebondalem"} />
				<RundownCard agenda={"Resepsi"} date={"22 Januari 2026"} time={"09:00 - 17.00"} location={"Luminor Hotel Purwokerto"} />
			</div>
			<Countdown targetDate="2026-1-20 09:00:00" desc={"Resepsi akan diselenggarakan dalam waktu"} />
		</section>
	);
}
