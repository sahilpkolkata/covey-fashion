import React from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
//import './App.css';
import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import AuthPage from './pages/auth-page/auth-page.component'
import Header from './components/header/header.component'
import { auth, createUserProfileDocument } from './firebase/firebase.utils'
import { connect } from 'react-redux'
import { setCurrentUser } from './redux/user/user.actions'
import { selectCurrentUser} from './redux/user/user.selectors'
//import { selectCollectionsForPreview } from './redux/shop/shop.selectors'
import { createStructuredSelector } from 'reselect'
import CheckOutPage from './pages/checkout/checkout.component';
import { GlobalStyle } from './global.styles'


class App extends React.Component{

  unsubscribeFromAuth = null

  componentDidMount(){

    const { setCurrentUser } = this.props
   
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth=>{
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth)

        userRef.onSnapshot(snapShot=>{
          setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
          })
        })
      }
      setCurrentUser(userAuth)
      // addCollectionAndDocuments('collections', 
      //  collectionsArray.map(({title,items}) => ({title, items})))
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth()
  }

  
  render(){
    return (
      <div>
        <GlobalStyle />
        <Header />
        <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/shop' component={ShopPage} />
            <Route exact path='/checkout' component={CheckOutPage} />
            <Route exact path='/signin' 
              render={()=> this.props.currentUser ?
                          (<Redirect to='/' />) :
                          (<AuthPage />)
            } />
            
        </Switch>
      </div>
    );
  }
  
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  //collectionsArray: selectCollectionsForPreview
})

const mapDispatchToProps = dispatch=>({
    setCurrentUser: user=> dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps,mapDispatchToProps)(App);
