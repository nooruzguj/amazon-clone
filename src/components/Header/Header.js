/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
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
			</div>
			{/* Bottom Nav */}
			<div></div>
		</header>
	)
}

export default Header
