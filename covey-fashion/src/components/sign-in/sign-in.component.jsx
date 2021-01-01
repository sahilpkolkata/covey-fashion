import React from 'react'
import CustomButton from '../custom-button/custom-button.component'
import FormInput from '../form-input/form-input.component'
import './sign-in.styles.scss'

class SignIn extends React.Component{
    constructor(){
        super()
          this.state = {
            email: '',
            password: ''
        } 
    }
    handleSubmit = event => {
        event.preventDefault()

        this.setState({
            email: '',
            password: ''
        })
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

                   <CustomButton type='submit'>Sign In</CustomButton>
               </form>
           </div>
        )
    }
}

export default SignIn