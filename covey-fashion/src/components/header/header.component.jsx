import React from 'react'
import './header.styles.scss'
import { Link } from 'react-router-dom'
// import { ReactComponent as Logo } from '../../assets/crown.svg'
import logo from '../../assets/flower2.png'
const Header = ()=>(
    <div className="header">
        <Link to='/'>
          {/* <Logo className="logo" /> */}
          <img className='logo-container' src={logo} alt="Logo"/>
        </Link>
        <div className="options">
            <Link className="option" to='/shop'>SHOP</Link>
            <Link className="option" to='/shop'>CONTACT</Link>
            <Link className="option" to='/shop'>SIGNIN</Link>
        </div>
    </div>
)

export default Header