import React from 'react';
import Carousel from 'react-elastic-carousel';
import Item from "../Item";

// class SlideShow extends React.Component {
//     state = {
//       items: [
//         {id: 1, url: './mini-skirt.jpg'},
//         {id: 2, title: 'item #2'},
//         {id: 3, title: 'item #3'}
//       ]
//     }
   
//     render () {
//       const { items } = this.state;
//       return (
//         <Carousel className="slideShow">
//           {items.map(item => <div key={item.id}>{item.title}</div>)}
//         </Carousel>
//       )
//     }
//   }

function SlideShow() {
  return (
    <div className="slideShow">
      <Carousel >
        <Item>< img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQIy1f216MiZlgK9w4si4XcZTRKF0kFR3Ykvw&usqp=CAU'alt='BF'/> </Item>
        <Item>2</Item>
        <Item>3</Item>
        <Item>4</Item>
      </Carousel>
    </div>
  );
}



  export default SlideShow;

// const breakPoints = [
//   { width: 1, itemsToShow: 1 },
//   { width: 550, itemsToShow: 1 },
//   { width: 768, itemsToShow: 1 },
//   { width: 1200, itemsToShow: 1 }
// ];
