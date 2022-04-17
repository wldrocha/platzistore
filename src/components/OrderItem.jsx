import React, { useContext } from 'react'
import Image from 'next/image'
import AppContext from '@context/AppContext'
import close from '@icons/icon_close.png'
import styles from '@styles/OrderItem.module.scss'

const OrderItem = product => {
  const { removeFromCart } = useContext(AppContext)
  return (
    <div className={styles.orderItem}>
      <figure>{product?.images !== undefined && <Image src={product?.images[0]} alt={product?.title} />}</figure>
      <p>{product?.title}</p>
      <p>${product?.price}</p>
      <Image src={close} alt="close" onClick={() => removeFromCart(id)} />
    </div>
  )
}

export default OrderItem
