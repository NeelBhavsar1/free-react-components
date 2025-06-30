import React, { useRef } from 'react'
import './Signin.css'
import username_icon from '../../assets/user.png'
import email_icom from '../../assets/email.png'
import password_icom from '../../assets/password.png'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Signin = () => {
  const usernameRef = useRef(null)
  const emailRef = useRef(null)
  const passwordRef = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault()

    const username = usernameRef.current.value.trim()
    const email = emailRef.current.value.trim()
    const password = passwordRef.current.value.trim()

    if (!username) {
      toast.error('Username is required')
      return
    }
    if (!email) {
      toast.error('Email is required')
      return
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      toast.error('Please enter a valid email')
      return
    }
    if (!password) {
      toast.error('Password is required')
      return
    }

    toast.success('Form submitted successfully!')
  }

  return (
    <div className='container'>
      <form className='form-container' onSubmit={handleSubmit}>
        <div className="header">
          <h1>Sign in</h1>
          <div className="underline"></div>
        </div>
        <div className="form-item">
          <div className="item">
            <img src={username_icon} alt="username icon" />
            <label htmlFor="username">Username</label>
          </div>
          <input type="text" id="username" ref={usernameRef} />
        </div>
        <div className="form-item">
          <div className="item">
            <img src={email_icom} alt="email icon" />
            <label htmlFor="email">Email</label>
          </div>
          <input type="email" id="email" ref={emailRef} />
        </div>
        <div className="form-item">
          <div className="item">
            <img src={password_icom} alt="password icon" />
            <label htmlFor="password">Password</label>
          </div>
          <input type="password" id="password" ref={passwordRef} />
        </div>
        <div className="forgot-pass">
          <p>Forgot password? <span>Click here</span></p>
        </div>

        <div className="submit-btn">
          <button type="submit">Submit</button>
        </div>
      </form>

      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  )
}

export default Signin
