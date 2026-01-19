import { serif } from "../fonts";

export default function Memories() {
	return (
		<section className={"bg-black py-25 " + serif.className}>
			<h2 className="lg:text-4xl text-2xl text-center pb-25">Perjalanan Kami</h2>
			<div className="grid grid-cols-2 grid-rows-3  lg:w-1/2 mx-auto">
				<div className="place-self-center lg:text-5xl text-xl ">
					<h3>FAUZI</h3>
				</div>
				<div>
					<img className="aspect-square object-cover" src="/weddings/prewed1.webp" alt="" />
				</div>
				<div>
					<img className="aspect-square object-cover" src="/weddings/prewed2.webp" alt="" />
				</div>
				<div className="place-self-center lg:text-5xl text-xl ">
					<h3>AND</h3>
				</div>
				<div className="place-self-center lg:text-5xl text-xl ">
					<h3>ALISA</h3>
				</div>
				<div>
					<img className="aspect-square object-cover" src="/weddings/prewed3.webp" alt="" />
				</div>
			</div>
		</section>
	);
}
