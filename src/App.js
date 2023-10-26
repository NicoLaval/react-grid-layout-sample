import "./App.css";
import { Grid } from "./grid";

function App() {
	return (
		<div className="App">
			<h2>1 - Resize neighbors instead of pushing them</h2>
			<Grid
				bLabel="Do not push me below, resize me"
				resizeHandles={["e", "w"]}
			/>
			<h2>2 - Resize neighbors together</h2>
			<Grid
				bLabel="Resize my height leaving it equal to that of A"
				resizeHandles={["s"]}
			/>
		</div>
	);
}

export default App;
