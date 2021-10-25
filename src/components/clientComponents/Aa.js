import React from 'react'
import Swiper from 'swiper'
import "swiper/swiper-bundle.css"

function Aa() {
    {/* TESSSSSSST FOR SWIPPER */}
    var Swipes = new Swiper('.swiper-container', {
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
        },
      });
        return (
    <div className="swiper-container">
      {/* swiper slides */}
      <div className="swiper-wrapper">
        <div className="swiper-slide" style={{backgroundImage: 'url(https://source.unsplash.com/random?sig=24)'}}>
          <h2>SIMPLE SWIPER</h2>
        </div>
        <div className="swiper-slide" style={{backgroundImage: 'url(https://source.unsplash.com/random?sig=53)'}}> 
          <h2>HELLO WORLD</h2>
        </div>
        <div className="swiper-slide" style={{backgroundImage: 'url(https://source.unsplash.com/random?sig=52)'}}>
          <h2>Random Text 1</h2>
        </div>
        <div className="swiper-slide" style={{backgroundImage: 'url(https://source.unsplash.com/random?sig=21)'}}>
        </div>
        <div className="swiper-slide" style={{backgroundImage: 'url(https://source.unsplash.com/random?sig=53)'}}>
        </div>
      </div>
      {/* !swiper slides */}
      {/* next / prev arrows */}
      <div className="swiper-button-next" />
      <div className="swiper-button-prev" />
      {/* !next / prev arrows */}
      {/* pagination dots */}
      <div className="swiper-pagination" />
      {/* !pagination dots */}
    </div>
    
    
    
        )
}

export default Aa



