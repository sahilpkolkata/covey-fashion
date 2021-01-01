import React from 'react'
import './auth-page.styles.scss'
import SignIn from '../../components/sign-in/sign-in.component'

const AuthPage = ()=>(
    <div className="auth-page">
        <h1>Auth Page</h1>
        <SignIn />
    </div>
)

export default AuthPage