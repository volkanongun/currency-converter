import ReactDOM from 'react-dom'
import React from 'react'
import Counter from './Counter'

console.log("hello react");

function App(){
	return(
		<>
			<h1>I am react</h1>
			<Counter />			
		</>
	)
}

ReactDOM.render(<App />, document.getElementById('app'))