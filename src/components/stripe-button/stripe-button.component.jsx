import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckOutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51H6sqrBNPNztVu0I337HxIDw9WTe9jtGLfScJO5yHRswnLS3ZqYwdITAS4tgGTcQptiyFH1ciFWK9ctsT0AvI4aE00PlxA9kYl';


    const onToken = token => {
        console.log(token);
        alert('Payment Successfull')
    }
    return (
        <StripeCheckout 
            label = 'Pay Now'
            name = 'CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image = 'https://svgshare.com/i/CUz.svg'
            description = { `Your Total is $${price}`}
            amount = {priceForStripe}
            panelLabel = 'Pay Now'
            token = {onToken}
            stripeKey = {publishableKey}
        />
    )
}

export default StripeCheckOutButton;