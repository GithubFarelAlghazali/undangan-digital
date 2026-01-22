export function OvalImg({ img, alt, style }) {
	return <img src={img} alt={alt} className={"aspect-2/3 object-cover rounded-[50%] border-4 border-double border-yellow-600/50 shadow-lg shadow-yellow-900/20 " + style} />;
}

export function RoundTopImg({ img, alt, style }) {
	return <img src={img} alt={alt} className={"rounded-t-full aspect-2/3 object-cover border-2 border-yellow-600/70 p-1 ring-1 ring-yellow-600/50 ring-offset-4 ring-offset-black shadow-xl " + style} />;
}

export function PilImg({ img, alt, style }) {
	return <img src={img} alt={alt} className={"aspect-2/3 object-cover rounded-full p-1.5 ring-2 ring-yellow-600/40 ring-offset-2 ring-offset-black shadow-xl " + style} />;
}
