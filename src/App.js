import React from 'react';
// import Nav from './Components/Nav'
import './App.css';
import Home from './Components/Home';
import Tops from './Components/Tops';
import Bottoms from './Components/Bottoms';
import Shoes from './Components/Shoes';
// import SlideShow from './Components/SlideShow';

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
 

  <h1><Link className='nav-Link-Home' to='/'>LOGO</Link></h1>
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
</ul>    </nav>



    <Switch>
    <Route  path='/' exact component={Home} />
    <Route path='/Tops' component={Tops} />
    <Route  path='/Bottoms' component={Bottoms} />
    <Route path='/Shoes' component={Shoes} />
    </Switch>
 
    
    </div>
    </Router>
  )

}

export default App;
