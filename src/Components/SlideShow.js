// import React from 'react';
// import Carousel from 'react-elastic-carousel';
// import Item from "../Item";

// function SlideShow() {
//   return (
//     <div className="slideShow">
//       <Carousel className="caro">
//         <Item><img className="slideShowImage" src="" alt=""/></Item>
//         <Item>2</Item>
//         <Item>3</Item>
//         <Item>4</Item>
//       </Carousel>
//     </div>
//   );
// }



//   export default SlideShow;


import React from 'react';
import { Slide } from 'react-slideshow-image';

const slideImages = [
  'images/slide_2.jpg',
  'images/slide_3.jpg',
  'images/slide_4.jpg'
];

const Slideshow = () => {
    return (
      <div>
        <Slide easing="ease">
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
              <span>Slide 1</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
              <span>Slide 2</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
              <span>Slide 3</span>
            </div>
          </div>
        </Slide>
      </div>
    )
};

export default Slideshow;