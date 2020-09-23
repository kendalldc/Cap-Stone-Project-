import React from 'react';
import bag from './bag.png';
import './App.css';
import Home from './Components/Pages/Home';
import Tops from './Components/Pages/Tops';
import Bottoms from './Components/Pages/Bottoms';
import Shoes from './Components/Pages/Shoes';
import Cart from './Components/Pages/Cart';
import Checkout from './Components/Pages/Checkout';
import LogIn from './Components/Pages/LogIn';
import SignUp from './Components/SignUp';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  
  
  return (
    
    <Router>
    <div className="App">
    <div className="header">
     
      <div className='nav-center'>
<nav className="nav-container">
  <ul>
  <li> <Link className='nav-Link-Home' to='/'><h1>LOGO</h1></Link></li> 
  <li><Link className='nav-Link-signup' to='/SignUp'> Sign Up</Link></li>
  <li><Link className='nav-Link-signup' to='/LogIn'> Log In</Link></li>
  <li> <Link className='cart-link' to='/Cart'><img className="bag" src='bag.png' alt='cart'/></Link></li>
  </ul>
</nav>
</div>
  </div>
    <nav className='nav-bar'>
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



    <Switch>
    <Route  path='/' exact component={Home} />
    <Route path='/Tops' component={Tops} />
    <Route  path='/Bottoms' component={Bottoms} />
    <Route path='/Shoes' component={Shoes} />
    <Route path='/Cart' component={Cart} />
    <Route path='/Checkout' component={Checkout} />
    <Route path="/LogIn" component={LogIn} />
    <Route path="/SignUp" component={SignUp} />
    </Switch>
 
    <div className='footer'>
      <p>All Rights Reserved</p>
    </div>
    </div>
    </Router>
  )

}

export default App;
