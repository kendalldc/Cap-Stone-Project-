// import React from 'react'
// import StripeCheckout from 'react-stripe-checkout';

//  class Checkout extends React.Component {
//   onToken = (token, addresses) => {
    
//   };

//   render() {
//     return (
//       <StripeCheckout
//         stripeKey="pk_test_51HUOsdEFbh8Rt1oFQRRqit9GaPEiBrAJPqJVBUPm1vAyPFpJTCrex3vWo9X9NlyCIUhSzSOZdkanRrfzGV5A4dwT00gvZI8p59"
//         token={this.onToken}
//       />
//     )
//   }
// }

// export default Checkout;


import React from 'react'
import StripeCheckout from 'react-stripe-checkout';
class Checkout extends React.Component {
  onToken = (token, addresses) => {
    
  };

  render() {
    return (
      <StripeCheckout
        amount="500"
        billingAddress
        description="Awesome Product"
        image="https://yourdomain.tld/images/logo.svg"
        locale="auto"
        name="YourDomain.tld"
        stripeKey="pk_test_51HUOsdEFbh8Rt1oFQRRqit9GaPEiBrAJPqJVBUPm1vAyPFpJTCrex3vWo9X9NlyCIUhSzSOZdkanRrfzGV5A4dwT00gvZI8p59"
        token={this.onToken}
        zipCode
      />
    )
  }
}

export default Checkout;