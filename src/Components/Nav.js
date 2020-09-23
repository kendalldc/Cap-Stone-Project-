import React from 'react';
import { Link } from 'react-router-dom'
 const Nav = ()=>{
    return(
            <nav className="nav-wrapper">
                <div className="container">
                    <Link to="/" className="brand-logo">Shopping</Link>
                    
                    <ul className="right">
                        <li><Link to="/">Shop</Link></li>
                        <li><Link to="/Cart">My cart</Link></li>
                        <li><Link to="/Cart"><i className="material-icons">shopping_cart</i></Link></li>
                    </ul>
                </div>
            </nav>  
    )
}

export default Nav;



{/* <div className='nav-center'>
<nav className="nav-container">
  <ul>
  <Link className='nav-Link-Home' to='/'>
    <li> <h1>Logo</h1></li>
    </Link>
    
    <Link className='cart-link' to='/Cart'>
<li><img className="bag" src='bag.png' alt='cart'/></li>
</Link>
  </ul>
</nav>
</div> */}