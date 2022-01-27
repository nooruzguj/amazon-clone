/* eslint-disable jsx-a11y/alt-text */
// { Lib }
import {
	MenuIcon,
	SearchIcon,
	ShoppingCartIcon,
} from '@heroicons/react/outline'
// { Components }

// { Styles }
import styles from './Header.module.scss'

const Header = () => {
	return (
		<header className={styles.header}>
			{/* Top Nav */}
			<div className={styles.header__top}>
				<div className={styles.top__nav}>
					<img
						width={150}
						height={40}
						src='https://i.ibb.co/CQJZ9Ms/amazon-logo.png'
						alt='Amazon Logo'
						className={styles.fill}
					/>
				</div>
				{/* Search Bar */}
				<div className={styles.search__bar}>
					<input />
					<SearchIcon />
				</div>
				{/* { Top Right } */}
				<div className={styles.top__right}>
					<div className={styles.right__left}>
						<p>Hello, Sing in</p>
						<p className={styles.p__t}>Account & Lists</p>
					</div>
					<div className={styles.right__middle}>
						<p>Returns</p>
						<p className={styles.p__t}>& Orders</p>
					</div>
					<div className={styles.right__right}>
						<span>3</span>
						<ShoppingCartIcon />
						<p className={styles.p__t}>Cart</p>
					</div>
				</div>
			</div>
			{/* Bottom Nav */}
			<div></div>
		</header>
	)
}

export default Header
