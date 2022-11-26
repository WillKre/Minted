import { container } from "./App.css";
import { Header } from "./components/Header";

export function App() {
	return (
		<div className={container}>
			<Header />

			<p>Content here...</p>
		</div>
	);
}
