import React, { useState, useEffect } from 'react';
import { Carousel, initTE } from 'tw-elements';

const Home = () => {
    useEffect(() => {
        initTE({ Carousel });
      }, []);
  return (
    <div>


    <div
  id="carouselExampleSlidesOnly"
  class="float-right"
  data-te-carousel-init
  data-te-ride="carousel">

  <div
    class="after:clear-both 
    after:block after:content-['']">
  
    <div
      class=" -mr-[100%] hidden w-full 
      duration-[200ms]  motion-reduce:transition-none"
      data-te-carousel-item
      data-te-carousel-active>
      <img
         src={require('../assets/3.jpg')}
         class="inset-x-0 gap-y-0 m-auto float-right mt-7 mr-40 "
        alt="Wild Landscape" />
    </div>
    <div
      class=" -mr-[100%] hidden w-full 
      duration-[200ms]  motion-reduce:transition-none"
      data-te-carousel-item>
      <img
         src={require('../assets/2.jpg')}
         class="inset-x-0 gap-y-0 m-auto float-right mt-6 mr-60  "
        alt="Camera" />
    </div>
    <div class=" -mr-[100%] hidden w-full 
      duration-[200ms]  motion-reduce:transition-none"
      data-te-carousel-item>
      <img
         src={require('../assets/1.jpg')}
         class="inset-x-0 gap-y-0 m-auto float-right mt-6 mr-60  "
        alt="Exotic Fruits" />
    </div>
  </div>
</div>
<div id="text" className='max-w-[1000px] mx-auto px-8 flex flex-col justify-items-start h-full'>
            <h1 className='text-xl text-pink-600 pt-8 '>Hi My name is</h1>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Lorem ipsum dolor sit amet, </h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b8]'>consectetur adipiscingelit</h2>
           
            <div>
                <button >
                <a id='a' className=' group border-2 px-6 py-3 my-1 flex items-center hover:bg-pink-600 hover:border-pink-600'
                href='#' >Inscription </a>
                   
                </button>
            </div>

        </div>
</div>
  );
};

export default Home;

