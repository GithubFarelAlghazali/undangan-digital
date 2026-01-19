import { serif } from "../fonts";
import { RundownCard } from "../components/Cards";
import Countdown from "../components/Countdown";

export default function Rundown() {
	return (
		<section className="w-full bg-gray-950 lg:p-24 py-10 px-5">
			<h2 className={`${serif.className} lg:text-4xl text-2xl text-center pb-25`}>Rangkaian Acara</h2>
			<div className="flex flex-col lg:flex-row justify-center items-center gap-10">
				<RundownCard agenda={"Akad Nikah"} date={"17 Januari 2026"} time={"05:00 - 06.30"} location={"KUA Kebondalem"} />
				<RundownCard agenda={"Resepsi"} date={"22 Januari 2026"} time={"09:00 - 17.00"} location={"Luminor Hotel Purwokerto"} />
			</div>
			<Countdown targetDate="2026-1-20 09:00:00" desc={"Resepsi akan diselenggarakan dalam waktu"} />
		</section>
	);
}
