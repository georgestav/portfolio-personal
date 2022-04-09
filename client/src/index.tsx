import { createRoot } from "react-dom/client"; //React 18
import "./index.scss";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";

//React 18
const container: HTMLElement = document.getElementById("root")!;
const root = createRoot(container);
root.render(<App />);
