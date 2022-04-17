import React from 'react'
import Image from 'next/image'
import styles from '@styles/RecoveryPassword.scss'
import email from '@icons/email.svg'

const RecoveryPassword = () => {
  return (
    <div className={styles.RecoveryPassword}>
      <div className={styles['form-container']}>
        <Image src="./logos/logo_yard_sale.svg" alt="logo" className={styles.logo} />
        <h1 className={styles.title}>Email has been sent!</h1>
        <p className={styles.subtitle}>Please check your inbox for instructions on how to reset the password</p>
        <figure className={styles['email-image']}>
          <Image src={email} alt="email image" />
        </figure>

        <button className={styles['primary-button']}>Login</button>
        <p className={styles.resend}>
          <span>Didn’t receive the email?</span>
          <a href="">Resend</a>
        </p>
      </div>
    </div>
  )
}

export default RecoveryPassword
