import styles from './Cart.module.scss'
const Cart = ({ title, price, imgUrl }) => {
	return (
		<div className={styles.cart__wrapper}>
			<div className={styles.cart__top}>
				<img src={imgUrl} alt='Cart Item' />
			</div>
			<div className={styles.cart__bottom}>
				<h3 className={styles.cart__title}>{title}</h3>
				<p className={styles.cart__price}>${price}</p>
				<button className={styles.cart__add}>Add to Card</button>
			</div>
		</div>
	)
}

export default Cart
