import React, { useContext, useState } from 'react'
import '@styles/ProductItem.scss'
import AppContext from '@context/AppContext'
import addCart from '@icons/bt_add_to_cart.svg'
import addedCart from '@icons/bt_added_to_cart.svg'

const ProductItem = ({ product }) => {
  const { addToCart, removeFromCart } = useContext(AppContext)

  const [isAdded, setIsAdded] = useState(false)

  const handleClick = item => {
    isAdded ? removeFromCart(item?.id) : addToCart(item)
    setIsAdded(!isAdded)
  }

  const {
    description,
    price,
    title,
    images: { 0: image },
  } = product
  return (
    <div className="ProductItem">
      <img src={image} alt="" />
      <div className="product-info">
        <div>
          <p>$ {price}</p>
          <p>{title}</p>
        </div>
        <figure onClick={() => handleClick(product)}>
          <img src={isAdded ? addedCart : addCart} alt="cart icon" />
        </figure>
      </div>
    </div>
  )
}

export default ProductItem
