import { Fragment } from "react";
import "./App.scss";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Section from "./components/Section";

function App() {
	return (
		<Fragment>
			<Header />
			<Section />
			<Footer />
		</Fragment>
	);
}

export default App;
