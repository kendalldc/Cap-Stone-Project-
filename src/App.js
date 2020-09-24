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
import Contact from '../src/Components/Pages/Contact';
import About from '../src/Components/Pages/About';
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
  
    <div className="topHeader">
        
      <div className='nav-center'>

<nav >
  <ul >
 

  <Link className='navLeft' to='/LogIn'> Log In</Link>
  <Link className='navLeftSign' to='/SignUp'> Sign Up </Link>
  <Link className='navLeftBag' to='/Cart'><img className="bag" src='https://i.pinimg.com/originals/31/d0/c3/31d0c3a3dd8e5d7112d51fca4b38656d.png' alt='cart'/></Link>

  </ul>
</nav>
</div>
  </div>

  <Link className='navLogo' to='/'><h1 className="sip">Sip</h1></Link>

    <nav className='nav-bar'>
    <ul className='nav-Links'>
    <Link className='nav-Link'to='/'><li>Home</li></Link>
    <Link className='nav-Link'to='/Shoes'><li>Shop</li></Link>
<Link className='nav-Link'to='/About'><li>About</li> </Link> 
 {/* <Link  className='nav-Link' to='/Bottoms'><li>BLOG</li></Link> */}
 <Link className='nav-Link'to='/Contact'><li>Contact Us</li></Link>
</ul>    
</nav>



    <Switch>
    <Route  path='/' exact component={Home} />
    <Route path='/About' component={About} />
    <Route  path='/Bottoms' component={Bottoms} />
    <Route path='/Shoes' component={Shoes} />
    <Route path='/Cart' component={Cart} />
    <Route path='/Checkout' component={Checkout} />
    <Route path="/LogIn" component={LogIn} />
    <Route path="/SignUp" component={SignUp} />
    <Route path="/Contact" component={Contact} />
    </Switch>
 
    <div className='footer'>

      <div className='cur-box'>
        <CurConverter/>
      </div>
      <br/>
      <p>All Rights Reserved</p>
      <h6>This model is solely for website demo purpose.</h6>

    </div>
    </div>
    </Router>
  )

}

export default App;


