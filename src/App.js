import React from 'react';
// import Nav from './Components/Nav'
import './App.css';
import Home from './Components/Home';
import Tops from './Components/Tops';
import Bottoms from './Components/Bottoms';
import Shoes from './Components/Shoes';
// import SlideShow from './Components/SlideShow';
import Cart from './Components/Cart';
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
  <Link className='nav-Link-Home' to='/'>
    <li> <h1>LOGO</h1></li>
    </Link>
  </ul>
  <Cart
          quantity={this.props.quantity}
          amountToPay={this.props.amountToPay}
        />
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
    </Switch>
 
    <div className='footer'>
      <p>All Rights Reserved</p>
    </div>
    </div>
    </Router>
  )

}

export default App;
