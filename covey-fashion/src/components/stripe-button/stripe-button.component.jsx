import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import logo from '../../assets/flower2.png'

const StripeCheckoutButton = ({price})=>{
    const priceForStripe = price*100
    const publishableKey = 'pk_test_51ErOuiD9foToPerhDj4WufPjNKcGiOohqgQnUa5wF8GJGISsQkJJL2eMHYMNYAu71l1bHL8UdL0yKchyyHNU9Ka000GCb3HGbb'
    
    const onToken = token=>{
        console.log(token)
        alert('Payment Successful')
    }
    return(
        <StripeCheckout 
            label='Pay Now'
            name= 'COVEY Fashion Ltd.'
            billingAddress
            shippingAddress
            image={logo}
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
            />

    )
}

export default StripeCheckoutButton