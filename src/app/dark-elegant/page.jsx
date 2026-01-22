import { funnel } from "./fonts";
import Header from "./sections/Header";
import About from "./sections/About";
import Rundown from "./sections/Rundown";
import Memories from "./sections/Memories";
import Donate from "./sections/Donate";
import Footer from "./sections/Footer";

export default function Undangan() {
	return (
		<div className={"max-w-screen overflow-x-hidden text-white bg-black  " + funnel.className}>
			<Header />
			<About />
			<Rundown />
			<Memories />
			<Donate />
			<Footer />
		</div>
	);
}
