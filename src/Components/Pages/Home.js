import React, { Component } from 'react';
import SlideShow from '../SlideShow';
import { Slide } from 'react-slideshow-image';

class Home extends Component{
    
    render(){
    
    return(
        <div className="Home">
         <h3>Welcome</h3>
<img src="src/Components/images/slide_2.jpg"/>
            {/* <SlideShow /> */}

        </div>
    )
    }
}






export default Home;