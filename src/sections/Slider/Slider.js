// import Swiper core and required modules
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import images from './SliderData'
import "./Slider.css";

function Slider() {
 
  return (
    <>
      {/* Swiper */}
      <Swiper
        modules={[Pagination]}
        spaceBetween={25}
        slidesPerView={4}
        pagination={{ clickable: true }}
        className="swiper-container"
      >
        {images &&
          images.map((image) => (
            <SwiperSlide key={image.id}>
              <img src={image.url} alt="cofee" />
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
}
export default Slider;
