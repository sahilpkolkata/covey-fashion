import React from 'react'
import CustomButton from '../custom-button/custom-button.component'
import FormInput from '../form-input/form-input.component'
import { signInWithGoogle, auth } from '../../firebase/firebase.utils'
import './sign-in.styles.scss'

class SignIn extends React.Component{
    constructor(){
        super()
          this.state = {
            email: '',
            password: ''
        } 
    }
    handleSubmit = async event => {
        event.preventDefault()
        const {email, password} = this.state

        try{
            await auth.signInWithEmailAndPassword(email,password)
            this.setState({
                email: '',
                password: ''
            })
        }
        catch(error){
            console.error(error)
        }
        
    }

    handleChange = event => {
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }

    render(){
        return(
           <div className="sign-in">
               <h2>Already have an account</h2>
               <span>Sign in with email and password</span>
               <form onSubmit={this.handleSubmit}>
                   <FormInput
                     name='email' 
                     value={this.state.email} 
                     type='email' 
                     label='Email'
                     required 
                     handleChange={this.handleChange} />
                   <FormInput 
                      name='password' 
                      value={this.state.password} 
                      label='Password'
                      required 
                      type='password' 
                      handleChange={this.handleChange} />
                    <div className="buttons">
                        <CustomButton type='submit'>Sign In</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogle >Google Login</CustomButton>
                    </div>
               </form>
           </div>
        )
    }
}

export default SignIn