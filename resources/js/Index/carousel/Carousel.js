import Slider from "react-slick";
import React, { useState } from 'react';
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";




const Carousel = ()=> {
    const config = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true, 
        centerPadding: '50px'
      };
      const [settings, setSettings] = useState(config);
 
      const products = [
        {
          img: '/img/beers/1.png',
          title: 'Dolore magna',
          text: 'Lorem ipsum dolor sit amet elit.'
        },
        {
          img: '/img/beers/2.png',
          title: 'Eget est lorem',
          text: 'Lorem Ipsum adipiscing elit ipsum.'
        },
        {
          img: '/images/product3.jpg',
          title: 'Tempus imperdiet',
          text: 'Orci porta non pulvinar neque laoreet.'
        },
        {
          img: '/images/product4.jpg',
          title: 'Mattis rhoncus',
          text: 'Bibendum neque egestas congue quisque.'
        },
        {
          img: '/images/product5.jpg',
          title: 'Odio ut enim',
          text: 'Mattis rhoncus urna neque viverra justo.'
        }
      ]
     
      const onChangeCenterMode = e => {
        if (e.target.checked) {
          setSettings({
            ...config,
            centerMode: true,
            centerPadding: '50px'
          });
        } else {
          setSettings(config);
        }
      }

return (   
    <div className="App">
    <h3>Carousel Slider in React - <a href="https://www.cluemediator.com" target="_blank" rel="noopener noreferrer">Clue Mediator</a></h3>

    <label className="cb-centermode">
      <input type="checkbox" checked="{settings.centerMode}" onchange="{onChangeCenterMode}" />
      <span>Enable Center Mode</span>
    </label>
    
<slider {...config}>
  {products.map((x, i) => {
    return <div key="{i}" className="img-card">
      <img className="img" src={x.img}/>
      <div class="card-body">
        <div className="card-title">{x.title}</div>
        <div className="card-text">{x.text}</div>
      </div>
    </div>
  })}
</slider>
</div>
);

}


export default Carousel;