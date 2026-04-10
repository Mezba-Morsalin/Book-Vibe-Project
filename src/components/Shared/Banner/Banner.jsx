import React from 'react';
import bannerImg from '../../../assets/hero_img.jpg'
import '../../../App.css'
const Banner = () => {
    return (
        <section className='w-11/12 lg:w-10/12 mx-auto mt-22'>
            <div className="hero bg-base-300 h-[70vh] rounded-2xl">
  <div className="hero-content flex flex-col-reverse lg:flex-row  justify-between gap-10">
    <div className='text-center lg:text-left'>
      <h1 className="text-5xl font-bold">Box Office News!</h1>
      <p className="py-6 ">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
      <button className="bg-green-500 px-2 py-1 custom-font font-bold md:px-4 md:py-2 rounded-2xl text-white hover:bg-green-700 transition duration-300 cursor-pointer">Get Started</button>
    </div>
    <div>
        <img
      src={bannerImg}
      className=" rounded-lg"
    />
    </div>
  </div>
</div>
        </section>
    );
};

export default Banner;