import React from 'react'
import StripeCheckout from 'react-stripe-checkout';

export default class Checkout extends React.Component {
  onToken = (token, addresses) => {
    
  };

  render() {
    return (
      <StripeCheckout
        stripeKey="pk_test_51HUOsdEFbh8Rt1oFQRRqit9GaPEiBrAJPqJVBUPm1vAyPFpJTCrex3vWo9X9NlyCIUhSzSOZdkanRrfzGV5A4dwT00gvZI8p59"
        token={this.onToken}
      />
    )
  }
}