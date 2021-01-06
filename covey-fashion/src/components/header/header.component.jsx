import React from 'react'
import './header.styles.scss'
import { Link } from 'react-router-dom'
import { auth } from '../../firebase/firebase.utils'
import CartIcon from '../cart-icon/cart-icon.component'
// import { ReactComponent as Logo } from '../../assets/crown.svg'
import logo from '../../assets/flower2.png'
import { connect } from 'react-redux'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'

const Header = ({currentUser, hidden})=>(
    <div className="header">
        <Link to='/'>
          {/* <Logo className="logo" /> */}
          <img className='logo-container' src={logo} alt="Logo"/>
        </Link>
        <div className="options">
            <Link className="option" to='/shop'>SHOP</Link>
            <Link className="option" to='/shop'>CONTACT</Link>
            {
                currentUser ? <div className='option' onClick={()=>auth.signOut()}>SIGN OUT</div>
                             : <Link className="option" to='/signin'>SIGNIN</Link>
            }
            <CartIcon />
           
        </div>
        {
            hidden ? null :  <CartDropdown />
        }
    </div>
)

const mapStateToProps = ({user: {currentUser}, cart: {hidden}}) => ({
    currentUser,
    hidden
})

export default connect(mapStateToProps)(Header)