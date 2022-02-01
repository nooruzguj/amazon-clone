import { useEffect, useState } from 'react'
import Banner from './components/Banner/Banner'
import Header from './components/Header'
import Cart from './components/Cart/Cart'

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
			{/* Header */}
			<Header value={value} setValue={setValue} />
			{/* Main */}
			<main className='main'>
				{/* Banner */}
				<Banner />
				{/* ProductFeed */}
				<div className='cart__container'>
					{items
						.filter(title =>
							title.title.toLowerCase().includes(value.toLowerCase())
						)
						.map(item => (
							<Cart
								key={item.id}
								title={item.title}
								price={item.price}
								imgUrl={item.image}
							/>
						))}
				</div>
			</main>
		</>
	)
}

export default App
