import React from 'react'

import Header from '../components/Header'
import Banner from '../components/Banner'
import Cart from '../components/Cart'

const Home = ({ items, value, setValue }) => {
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

export default Home
