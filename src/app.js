import React, { useEffect,useState } from 'react'
import ReactDOM from 'react-dom'
import CurrencyRow from './CurrencyRow'

const BASE_URL = "https://api.exchangeratesapi.io/latest";

function App(){

	const [currencyOptions, setCurrencyOptions] = useState([])
	console.log(currencyOptions, " ??")

	useEffect(() => {
		fetch(BASE_URL)
			.then(res => res.json())
			.then(data => {
				console.log(data, " ∆∆∆")
				setCurrencyOptions([data.base, ...Object.keys(data.rates)])
			})
	},[])

	return(
		<>
			<h1>Convert</h1>
			<CurrencyRow currencyOptions={currencyOptions}/>
			<p className="equals">=</p>
			<CurrencyRow currencyOptions={currencyOptions}/>
		</>
	)
}

ReactDOM.render(<App />, document.getElementById('app'))