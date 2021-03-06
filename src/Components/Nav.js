import React from 'react';
import { Link } from 'react-router-dom'
 const Nav = ()=>{
    return(
            <nav className="nav-wrapper">
                <div className="nav-container">
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



{