import { serif } from "../fonts";
import { RundownCard } from "../components/Cards";
import Countdown from "../components/Countdown";
import Image from "next/image";
import border from "../ornaments/border.svg";
import { rundown } from "../data";

export default function Rundown() {
	return (
		<section className="w-full bg-gray-950 lg:p-24 py-10 px-5 relative">
			<Image src={border} alt="" className="absolute lg:w-56 w-32 bottom-0 left-0" />
			<Image src={border} alt="" className="absolute lg:w-56 w-32 top-0 right-0 rotate-180" />
			<h2 className={`${serif.className} lg:text-4xl text-2xl text-center pb-25`}>Rangkaian Acara</h2>
			<div className="flex flex-col lg:flex-row justify-center items-center gap-10">
				{rundown.agendas.map((agenda, i) => {
					return <RundownCard agenda={agenda.agenda} date={agenda.date} time={agenda.time} location={agenda.location} key={i} />;
				})}
			</div>
			<Countdown targetDate={rundown.mainAgenda.time} desc={`${rundown.mainAgenda.name} akan diselenggarakan dalam waktu`} />
		</section>
	);
}
