import { formal } from "../fonts";
import { RundownCard } from "../components/Cards";
import Countdown from "../components/Countdown";
import Image from "next/image";
import border from "../ornaments/border.svg";
import { rundown } from "../data";

export default function Rundown() {
	return (
		<section className="w-full bg-inherit lg:p-24 py-10 px-5 relative">
			<h2 className={`${formal.className} lg:text-4xl text-2xl text-center pb-25`}>Rangkaian Acara</h2>
			<div className="flex flex-col lg:flex-row justify-center items-center gap-10">
				{rundown.agendas.map((agenda, i) => {
					return <RundownCard agenda={agenda.agenda} date={agenda.date} time={agenda.time} location={agenda.location} key={i} />;
				})}
			</div>
			<Countdown targetDate={rundown.mainAgenda.time} desc={`${rundown.mainAgenda.name} akan diselenggarakan dalam waktu`} />
		</section>
	);
}
