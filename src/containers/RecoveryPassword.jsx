import React from 'react'
import '@styles/RecoveryPassword.scss'
import email from "@icons/email.svg"

const RecoveryPassword = () => {
  return (
    <div className="login">
      <div className="form-container">
        <img src="./logos/logo_yard_sale.svg" alt="logo" className="logo" />
        <h1 className="title">Email has been sent!</h1>
        <p className="subtitle">Please check your inbox for instructions on how to reset the password</p>
        <figure className="email-image">
          <img src={email} alt="email image" />
        </figure>

        <button className="primary-button">Login</button>
        <p className="resend">
          <span>Didn’t receive the email?</span>
          <a href="">Resend</a>
        </p>
      </div>
    </div>
  )
}

export default RecoveryPassword
