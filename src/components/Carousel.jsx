import React from 'react';
import Slider from 'react-slick';
import Bg2 from '../images/Bg2.jpg';
import TravelBg from '../images/TravelBg.jpg';
import NewCar from '../images/NewCar.jpg';


const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <Slider {...settings}>
      <div className='w-full relative rounded-md'>
        <img src={Bg2} alt="Image 1" className='w-full rounded-xl' />
        <div className="absolute top-[30%] left-0 right-0 text-center">
          <h2 className="text-2xl  text-white font-bold pb-2">Meghalya</h2>
          <p className="text-lg text-white font-semibold">Explore the beauty of Nature in Shillong.</p>
        </div>
      </div>
      <div>
        <img src={TravelBg} alt="Image 2" className='w-full rounded-xl'/>
      </div>
      <div>
        <img src={NewCar} alt="Image 3" className='w-full rounded-xl'/>
        <div className="absolute top-[30%] left-0 right-0 text-center">
          <h2 className="text-2xl  text-white font-bold pb-2">Goa</h2>
          <p className="text-lg text-white font-semibold">Chill with us in Goa.</p>
        </div>
      </div>
    </Slider>
  );
}

export default Carousel;