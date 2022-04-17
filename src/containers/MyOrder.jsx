import React, { useContext } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import OrderItem from '@components/OrderItem'
import AppContext from '@context/AppContext'
import styles from '@styles/MyOrder.module.scss'

import arrow from '@icons/flechita.svg'

const MyOrder = ({ handleToggleOrders }) => {
  const {
    state: { cart: cartItems },
  } = useContext(AppContext)

  const sumTotal = () => {
    return cartItems.reduce((acc, item) => acc + item.price, 0)
  }

  return (
    <aside className={styles.MyOrder}>
      <div className={styles['title-container']}>
        <Image src={arrow} alt="arrow" onClick={() => handleToggleOrders()} />
        <p className={styles.title}>My order</p>
      </div>
      <div>
        {cartItems.map((product, indexValue) => (
          <OrderItem key={`orderItem-${indexValue}`} {...product} />
        ))}
      </div>
      <div className={styles['my-order-content']}>
        <div className="order">
          <p>
            <span>Total</span>
          </p>
          <p>${sumTotal()}</p>
        </div>
        <Link className={styles['primary-button']} href="/checkout">
          Checkout
        </Link>
      </div>
    </aside>
  )
}

export default MyOrder
