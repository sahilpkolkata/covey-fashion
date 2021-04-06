import React from 'react'
//import './header.styles.scss'
import { Link } from 'react-router-dom'
import { auth } from '../../firebase/firebase.utils'
import CartIcon from '../cart-icon/cart-icon.component'
// import { ReactComponent as Logo } from '../../assets/crown.svg'
import logo from '../../assets/flower2.png'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'
import { selectCurrentUser } from '../../redux/user/user.selectors'
import { selectCartHidden } from '../../redux/cart/cart.selectors'

import { HeaderContainer, OptionsContainer, LogoContainer, OptionLink, OptionDiv} from './header.styles'

const Header = ({currentUser, hidden})=>(
    <HeaderContainer>
        <Link to='/'>
          {/* <Logo className="logo" /> */}
          <LogoContainer src={logo} />
        </Link>
        <OptionsContainer>
            <OptionLink to='/shop'>SHOP</OptionLink>
            <OptionLink to='/shop'>CONTACT</OptionLink>
            {
                currentUser ? <OptionDiv onClick={()=>auth.signOut()}>SIGN OUT</OptionDiv>
                             : <OptionLink to='/signin'>SIGNIN</OptionLink>
            }
            <CartIcon />
           
            </OptionsContainer>
        {
            hidden ? null :  <CartDropdown />
        }
    </HeaderContainer>
)

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})
   


export default connect(mapStateToProps)(Header)