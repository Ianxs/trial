"use client";

import React, { useEffect, useState } from "react";
import Carousel from "./components/Carousel";


const Food = () => {
  return (
    <div className='mx-8 pt-12 lg:mx-16 lg:pt-0'> {/*wrapper*/}
      <div className='mb-16'>
        <h1 className='pb-4 font-bold text-3xl'>FOOD|CULTURE</h1>
        <div> {/*carousel*/}
          <Carousel />
        </div>
      </div>
      <div> 
        <h2 className='pb-2 mt-12 border-b border-gray-300 font-bold text-2xl'>Popular Cuisines</h2>
        <div className='mt-8 grid lg:grid-cols-3 gap-8'>
          {/*cards*/}
          <div className='bg-white rounded overflow-hidden shadow-md  hover:shadow-xl'>
            <img src="/assets/lantaw 1.jpg" className='w-full h-48 sm:h-48 object-cover' alt="lantaw dish" />
            <div className='p-4'>
              <span className='font-bold'>Name of the dish</span>
              <span className='block'>Restaurant</span>
            </div>
          </div>
          <div className='bg-white rounded overflow-hidden shadow-md hover:shadow-xl'>
            <img src="/assets/shaka 1.jpg" className='w-full h-40 sm:h-48 object-cover' alt="shaka dish" />
            <div className='p-4'>
              <span className='font-bold'>Name of the dish</span>
              <span className='block'>Restaurant</span>
            </div>
          </div>
          <div className='bg-white rounded overflow-hidden shadow-md hover:shadow-xl'>
            <img src="/assets/threebears 1.jpg" className='w-full h-40 sm:h-48 object-cover' alt="threebears dish" />
            <div className='p-4'>
              <span className='font-bold'>Name of the dish</span>
              <span className='block'>Restaurant</span>
            </div>
          </div>
        </div>
      </div>

      <div > 
        <h4 className='pb-2 mt-16 border-b border-gray-300 font-bold text-2xl'>Recommended Dining Spots</h4>
        <div className='mt-8 pb-8 grid lg:grid-cols-3 gap-8'>
          {/*cards*/}
          <div className='bg-white rounded overflow-hidden shadow-md  hover:shadow-xl'>
            <img src="/assets/Tan-aw Restaurant.jpg" className='w-full h-52 sm:h-52 object-cover' alt="Tan-aw Restaurant" />
            <div className='p-4'>
              <span className='font-bold'>Tan-aw Restaurant</span>
              <a href="https://www.neptunediving.com/tan-aw-restaurant-moalboal/" className="block text-blue-700">Click here to visit their website</a>
            </div>
          </div>
          <div className='bg-white rounded overflow-hidden shadow-md  hover:shadow-xl'>
            <img src="/assets/Hungry Monkey Restaurant.jpg" className='w-full h-52 sm:h-52 object-cover' alt="Hungry Monkeys Restaurant" />
            <div className='p-4'>
              <span className='font-bold'>Hungry Monkeys Restaurant</span>
              <a href="https://web.facebook.com/hungrymonkeysmoalboal/?_rdc=1&_rdr#" className="block text-blue-700">Click here to visit their website</a>
            </div>
          </div>
          <div className='bg-white rounded overflow-hidden shadow-md  hover:shadow-xl'>
            <img src="/assets/ven-z-kitchen.jpg" className='w-full h-52 sm:h-52 object-cover' alt="Vin'z Kitchen" />
            <div className='p-4'>
              <span className='font-bold'>Vin'z Kitchen</span>
              <a href="https://web.facebook.com/venzkitchen/?_rdc=1&_rdr#" className="block text-blue-700">Click here to visit their website</a>
            </div>
          </div>
          <div className='bg-white rounded overflow-hidden shadow-md  hover:shadow-xl'>
            <img src="/assets/Daily Sweet.png" className='w-full h-52 sm:h-52 object-cover' alt="Daily Sweet Snow Ice Shop" />
            <div className='p-4'>
              <span className='font-bold'>Daily Sweet Snow Ice Shop</span>
              <a href="https://web.facebook.com/dailysweetmoalboal" className="block text-blue-700">Click here to visit their website</a>
            </div>
          </div>
          <div className='bg-white rounded overflow-hidden shadow-md  hover:shadow-xl'>
            <img src="/assets/Shaka.jpg" className='w-full h-52 sm:h-52 object-cover' alt="Shaka" />
            <div className='p-4'>
              <span className='font-bold'>Shaka</span>
              <a href="https://web.facebook.com/shaka.cafes" className="block text-blue-700">Click here to visit their website</a>
            </div>
          </div>
          <div className='bg-white rounded overflow-hidden shadow-md  hover:shadow-xl'>
            <img src="/assets/Kugita.jpg" className='w-full h-52 sm:h-52 object-cover' alt="Kugita Seafood & Charcoal Grill" />
            <div className='p-4'>
              <span className='font-bold'>Kugita Seafood & Charcoal Grill</span>
              <a href="https://web.facebook.com/kugitamoalboal" className="block text-blue-700">Click here to visit their website</a>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Food
