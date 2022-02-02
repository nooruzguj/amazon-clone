import { useEffect, useState } from 'react'

import { Routes, Route } from 'react-router-dom'
import Basket from './Pages/Basket'
import Home from './Pages/Home'

const App = () => {
	const [items, setItems] = useState([])
	const [value, setValue] = useState('')

	useEffect(() => {
		fetch('https://61f75da92e1d7e0017fd70aa.mockapi.io/items').then(res =>
			res.json().then(data => setItems(data))
		)
	}, [])

	return (
		<>
			<Routes>
				<Route
					path='/'
					element={<Home items={items} value={value} setValue={setValue} />}
				/>
				<Route path='basket' element={<Basket />} />
			</Routes>
		</>
	)
}

export default App
