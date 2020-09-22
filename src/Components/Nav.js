import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';

function Nav(){

  
  return(
    <div className="navbar">
<nav>
    <h3>
      <Link className='nav-Link-Home' to='/'>Home</Link>
      </h3>
        <ul className='nav-Links'>

        <Link className='nav-Link'to='/Tops'>
           <li>Tops</li>
           </Link>
          
         <Link  className='nav-Link' to='/Bottoms'>
         <li>Bottoms</li>
         </Link>
         
         <Link className='nav-Link'to='/Shoes'>
           <li>Shoes</li>
           </Link>
        </ul>
</nav>
</div>
  )
}





export default Nav;
