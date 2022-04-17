import React, { useContext } from 'react'
import AppContext from '@context/AppContext'
import close from '@icons/icon_close.png'
import styles from '@styles/OrderItem.module.scss'

const OrderItem = ({ images: { 0: image }, price, title, id }) => {
  const { removeFromCart } = useContext(AppContext)
  return (
    <div className={styles.orderItem}>
      <figure>
        <img src={image} alt={title} />
      </figure>
      <p>{title}</p>
      <p>${price}</p>
      <img src={close} alt="close" onClick={() => removeFromCart(id)} />
    </div>
  )
}

export default OrderItem
