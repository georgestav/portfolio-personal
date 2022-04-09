import { Fragment } from "react";
import "./App.scss";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Section from "./components/Section";
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);
  return (
    <Fragment>
      <Header />
      <Section />
      <Footer />
    </Fragment>
  );
}

export default App;
