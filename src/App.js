import React from "react"
import reactDom from "react-dom";

const App = () => {
	return (
		<h1>Hello React!</h1>
	)
}

reactDom.render(<App />, document.getElementById("root"))

export default App