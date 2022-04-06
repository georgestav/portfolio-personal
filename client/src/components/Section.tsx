import { Fragment } from "react";
import "./Section.scss";
import About from "./section/About";
import ContactMe from "./section/ContactMe";
import Features from "./section/Features";
import FindMe from "./section/FindMe";
import Portfolio from "./section/Portfolio";

function Section() {
	return (
		<Fragment>
			<Features />
			<Portfolio />
			<About />
			<FindMe />
			<ContactMe />
		</Fragment>
	);
}

export default Section;
