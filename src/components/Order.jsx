import React from 'react'
import Image from 'next/image'
import '@styles/Order.scss'
import arrow from"@icons/flechita.svg"

const Order = () => {
  return (
    <div className="Order">
      <p>
        <span>03.25.21</span>
        <span>6 articles</span>
      </p>
      <p>$560.00</p>
      <Image src={arrow} alt="arrow" />
    </div>
  )
}

export default Order
