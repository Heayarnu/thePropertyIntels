import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

const SwiperCarousel = () => {
  const slides = [
 '/assets/cr1.jpg',
 '/assets/cr2.jpg',
 '/assets/cr3.jpeg',
'/assets/images/mookimg/ikoyi3.png',
'/assets/images/mookimg/land.jpg',
'/assets/cr8.jpg',
 '/assets/cr6.jpg',
  ];

  return (
     <div className='max-w-[1000px] mx-auto mt-10 '> 
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
    //   navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
      loop={true}
      style={{ width: '100%' }}
    >
      {slides.map((src, index) => (
        <SwiperSlide key={index}>
          <img
            src={src}
            alt={`Slide ${index + 1}`}
            style={{ width: '100%', height: '400px', 
                objectFit: 'cover', 
                objectPosition: 'center',
             }}
          />
        </SwiperSlide>
      ))}
    </Swiper>
    </div>
  );
};

export default SwiperCarousel;
