import React from 'react';
import bag from './Components/bag.png';
import './App.css';
import Home from './Components/Pages/Home';
import Tops from './Components/Pages/Tops';
import Bottoms from './Components/Pages/Bottoms';
import Shoes from './Components/Pages/Shoes';
import Cart from './Components/Pages/Cart';
import Checkout from './Components/Pages/Checkout';
import LogIn from './Components/Pages/LogIn';
import SignUp from './Components/SignUp';
import CurConverter from '../src/Components/CurConverter';
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
    <div className="Top-header">
     
      <div className='nav-center'>
<nav className="nav-One">
  <ul>
 <Link className='nav-Home' to='/'><h1>LOGO</h1></Link>
  <Link className='nav-Signup' to='/SignUp'> Sign Up</Link>
  <Link className='nav-Login' to='/LogIn'> Log In</Link>
  <Link className='nav-cart-link' to='/Cart'><img className="bag" src='https://i.pinimg.com/originals/31/d0/c3/31d0c3a3dd8e5d7112d51fca4b38656d.png' alt='yup'/></Link>
  </ul>
</nav>
</div>
  </div>
    <nav className='nav-bar'>
    <ul className='nav-Links'>


    <Link className='nav-Link'to='/'>
   <li>Home</li>
   </Link>
<Link className='nav-Link'to='/Tops'>
   <li>Tops</li>
   </Link>
  
 <Link  className='nav-Link' to='/Bottoms'>
 <li>Bottoms</li>
 </Link>
 
 <Link className='nav-Link'to='/Shoes'>
   <li>Shoes</li>
   </Link>

   {/* <Link></Link> */}
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

      <div className='cur-box'>
        <CurConverter/>
      </div>
    </div>
    </div>
    </Router>
  )

}

export default App;
