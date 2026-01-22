"use client";
import { useState, useEffect } from "react";
import { FaRegCalendarPlus } from "react-icons/fa";

export default function Countdown({ targetDate, desc }) {
	const [timeLeft, setTimeLeft] = useState({
		days: 0,
		hours: 0,
		minutes: 0,
		seconds: 0,
	});
	const [isFinish, setFinish] = useState(false);

	useEffect(() => {
		const calcTimeLeft = () => {
			const difference = new Date(targetDate) - new Date();

			if (difference > 0) {
				setTimeLeft({
					days: Math.floor(difference / (1000 * 60 * 60 * 24)),
					hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
					minutes: Math.floor((difference / 1000 / 60) % 60),
					seconds: Math.floor((difference / 1000) % 60),
				});
			} else {
				setFinish(true);
			}
		};

		calcTimeLeft();
		const timer = setInterval(() => {
			calcTimeLeft();
		}, 1000);

		return () => clearInterval(timer);
	}, [targetDate]);

	const formatNumber = (num) => num.toString().padStart(2, "0");

	const addToGoogleCalendar = () => {
		const eventTitle = encodeURIComponent("Wedding of Fauzi & Alisa");
		const eventDetails = encodeURIComponent("Resepsi Pernikahan Fauzi & Alisa");
		const eventLocation = encodeURIComponent("Luminor Hotel Purwokerto");

		const startDate = new Date(targetDate);
		const endDate = new Date(startDate.getTime() + 2 * 60 * 60 * 1000);

		const formatGCalDate = (date) => date.toISOString().replace(/-|:|\.\d\d\d/g, "");

		const dates = `${formatGCalDate(startDate)}/${formatGCalDate(endDate)}`;
		const url = `https://www.google.com/calendar/render?action=TEMPLATE&text=${eventTitle}&dates=${dates}&details=${eventDetails}&location=${eventLocation}`;

		window.open(url, "_blank");
	};

	if (isFinish) {
		return (
			<div className="p-5 rounded-md lg:w-1/2 mx-auto my-10 text-center animate-pulse">
				<p className="text-3xl font-bold text-yellow-500">Acara Sedang Berlangsung / Selesai</p>
			</div>
		);
	}

	return (
		<div className=" p-5 rounded-md lg:w-1/2 mx-auto my-10 text-center">
			<p className="text-xl">Resepsi akan berlangsung dalam:</p>
			<ul className="flex justify-center gap-5 mt-5 items-center">
				<li>
					<span className="lg:text-5xl text-xl block">{formatNumber(timeLeft.days)}</span>
					hari
				</li>
				:
				<li>
					<span className="lg:text-5xl text-xl block">{formatNumber(timeLeft.hours)}</span>
					jam
				</li>
				:
				<li>
					<span className="lg:text-5xl text-xl block">{formatNumber(timeLeft.minutes)}</span>
					menit
				</li>
				:
				<li>
					<span className="lg:text-5xl text-xl block">{formatNumber(timeLeft.seconds)}</span>
					detik
				</li>
			</ul>
			<button onClick={addToGoogleCalendar} className="p-5 rounded-md bg-yellow-500 text-slate-900 font-semibold my-10 mx-auto flex flex-row gap-3 cursor-pointer  justify-center items-center">
				<FaRegCalendarPlus className="inline size-7" />
				<span>Tambahkan Pengingat</span>
			</button>
		</div>
	);
}
