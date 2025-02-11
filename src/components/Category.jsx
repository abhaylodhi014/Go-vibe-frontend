//category
"use client";
import React from 'react'
import { category } from '../constants/data'


import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const sliderSettings = {
  infinite: true,
  speed: 2000,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 400,
  arrows: false,
  responsive: [
    { breakpoint: 1024, settings: { slidesToShow: 2 } },
    { breakpoint: 640, settings: { slidesToShow: 1 } },
  ],
};

const Categories = () => {
   
  return (
    <div className="w-full  px-4 py-6">
    

      <Slider {...sliderSettings}>
        {category.map((category) => (
          <div key={category.id} className="p-2">
            
              <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-transform transform hover:scale-105">
                <img
                  src={category.img}
                  alt={category.type}
                  className="w-full h-48 object-cover"
                />
                {/* <div className="p-4  text-center">
                  <h3 className="text-lg font-bold text-white">{category.type}</h3>
                </div> */}
              </div>
          
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Categories;
