import React from 'react';
import './App.css'
import {MultiSelect} from "./components/MultiSelect";
import {astros} from "./data/astros";
function App() {
	return (
		<div className="App">
			<MultiSelect items={astros} />
		</div>
	);
}

export default App;
