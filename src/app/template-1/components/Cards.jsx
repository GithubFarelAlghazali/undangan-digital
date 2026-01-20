import { imperial, serif } from "../fonts";
import { RoundTopImg } from "./Frames";
import { FaRegMap, FaCalendar } from "react-icons/fa";
import { IoIosTime } from "react-icons/io";

export function WeddingCard({ img, name, desc }) {
	return (
		<figure className="lg:w-1/3 p-5">
			<RoundTopImg img={img} alt={name} />
			<figcaption className="my-5 text-center ">
				<h3 className={`${imperial.className} text-5xl text-yellow-200`}>{name}</h3>
				<span>{desc}</span>
			</figcaption>
		</figure>
	);
}

export function RundownCard({ agenda, location, date, time }) {
	return (
		<div className="lg:w-1/3 w-full outline-1 p-5  outline-yellow-500 rounded-xl flex flex-col gap-3  items-center">
			<h3 className={`${imperial.className} text-6xl`}>{agenda}</h3>
			<span className="flex items-center gap-2">
				<FaCalendar />
				{date}
			</span>
			<span className="flex items-center gap-2">
				<IoIosTime className="size-5" />
				{time}
			</span>
			<hr className="bg-yellow-500  w-full" />
			<p>{location}</p>
			<button className="flex justify-center gap-3 items-center cursor-pointer p-3 rounded-xl bg-yellow-500 text-gray-950">
				<FaRegMap />
				Lihat Lokasi
			</button>
		</div>
	);
}

export function GiftCard({ bank, number, name }) {
	return (
		<div className="lg:w-1/3 w-full outline-1 bg-slate-950 shadow-xl shadow-yellow-500/10 z-50 p-5 outline-yellow-500 rounded-xl flex flex-col gap-3  text-center items-center">
			<h3 className={`${serif.className} text-xl`}>{bank}</h3>
			<p>
				{number}
				<br /> A.n {name}
			</p>
			<hr className="bg-yellow-500  w-full" />
			<p>Atau</p>
			<button className="w-fit p-3 rounded-xl bg-yellow-500 text-gray-950">Bayar dengan QRIS</button>
		</div>
	);
}
