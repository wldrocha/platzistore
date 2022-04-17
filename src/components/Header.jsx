import React, { useState, useContext } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Menu from '@components/Menu'
import MobileMenu from '@components/MobileMenu'
import MyOrder from '@containers/MyOrder'
import AppContext from '@context/AppContext'
import menu from '@icons/icon_menu.svg'
import logo from '@logos/logo_yard_sale.svg'
import shoppingCart from '@icons/icon_shopping_cart.svg'
import styles from '@styles/Header.module.scss'

const Header = () => {
  const [toggle, setToggle] = useState(false)
  const [toggleOrders, setToggleOrders] = useState(false)
  const [toggleMobileMenu, setToggleMobileMenu] = useState(false)

  const {
    state: { cart },
  } = useContext(AppContext)

  const handleToggle = () => {
    setToggle(!toggle)
  }

  const handleToggleOrders = () => {
    setToggleOrders(!toggleOrders)
  }

  return (
    <nav className={styles.Nav}>
      <Image src={menu} alt="menu" className={styles.menu} onClick={() => setToggleMobileMenu(!toggleMobileMenu)} />
      <div className={styles['navbar-left']}>
        <Link href="/">
          <Image src={logo} alt="logo" className={styles.logo} />
        </Link>
        <ul>
          <li>
            <a href="/">All</a>
          </li>
          <li>
            <a href="/">Clothes</a>
          </li>
          <li>
            <a href="/">Electronics</a>
          </li>
          <li>
            <a href="/">Furnitures</a>
          </li>
          <li>
            <a href="/">Toys</a>
          </li>
          <li>
            <a href="/">Others</a>
          </li>
        </ul>
      </div>
      <div className={styles['navbar-right']}>
        <ul>
          <li className={styles['navbar-email']} onClick={handleToggle}>
            platzi@example.com
          </li>
          <li className={styles['navbar-shopping-cart']} onClick={() => handleToggleOrders()}>
            <Image src={shoppingCart} alt="shopping cart" />
            {cart.length > 0 && <div>{cart.length}</div>}
          </li>
        </ul>
      </div>
      {toggleMobileMenu && <MobileMenu />}
      <div className={styles.modals}>
        {toggle && <Menu />}
        {toggleOrders && <MyOrder handleToggleOrders={handleToggleOrders} />}
      </div>
    </nav>
  )
}

export default Header
