import Banner from './components/Banner/Banner'
import Header from './components/Header'

const App = () => {
	fetch('https://fakestoreapi.com/products')
		.then(res => res.json())
		.then(json => console.log(json))
	return (
		<>
			{/* Header */}
			<Header />
			{/* Main */}
			<main className='main'>
				{/* Banner */}
				<Banner />
				{/* ProductFeed */}
			</main>
		</>
	)
}

export default App
