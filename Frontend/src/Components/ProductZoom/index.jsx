
import React, { useRef } from "react";
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/styles.min.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { Navigation, EffectFade } from "swiper/modules";

const ProductZoom = () => {
  const [slideIndex, setSlideIndex] = React.useState(0);
  const zoomSliderBig = useRef();
  const zoomSliderSml = useRef();

  const goto = (index) => {
    setSlideIndex(index);
    zoomSliderSml.current.swiper.slideTo(index);
    zoomSliderBig.current.swiper.slideTo(index);
  };

  return (
    <>
      <div className="flex gap-3">
        {/* LEFT SIDE THUMBNAILS */}
        <div className="slider w-[20%]">
          <Swiper
            ref={zoomSliderSml}
            direction={"vertical"}
            slidesPerView={4}
            spaceBetween={30}
            
            
            className="zoomProductSliderThumbs h-[500px] overflow-hidden"
          >
            {/* Slide 0 */}
            <SwiperSlide>
              <div
                className={`item rounded-md overflow-hidden cursor-pointer group border-2 ${
                  slideIndex === 0 ? "border-blue-500" : "border-transparent"
                }`}
                onClick={() => goto(0)}
              >
                <img
                  src="https://assets-jiocdn.ajio.com/medias/sys_master/root/20241230/Hy0i/677297be0f47f80c872b193a/-473Wx593H-410460788-pureruby-MODEL.jpg"
                  alt=""
                  className="w-full transition-all group-hover:scale-105"
                />
              </div>
            </SwiperSlide>

            {/* Slide 1 */}
            <SwiperSlide>
              <div
                className={`item rounded-md overflow-hidden cursor-pointer group border-2 ${
                  slideIndex === 1 ? "border-blue-500" : "border-transparent"
                }`}
                onClick={() => goto(1)}
              >
                <img
                  src="https://assets-jiocdn.ajio.com/medias/sys_master/root/20241230/xKBF/67729b08c148fa1b30692551/-78Wx98H-410460788-pureruby-MODEL2.jpg"
                  alt=""
                  className="w-full transition-all group-hover:scale-105"
                />
              </div>
            </SwiperSlide>

            {/* Slide 2 */}
            <SwiperSlide>
              <div
                className={`item rounded-md overflow-hidden cursor-pointer group border-2 ${
                  slideIndex === 2 ? "border-blue-500" : "border-transparent"
                }`}
                onClick={() => goto(2)}
              >
                <img
                  src="https://assets-jiocdn.ajio.com/medias/sys_master/root/20241230/Mv6R/67729b08c148fa1b3069256a/-473Wx593H-410460788-pureruby-MODEL3.jpg"
                  alt=""
                  className="w-full transition-all group-hover:scale-105"
                />
              </div>
            </SwiperSlide>

            {/* Slide 3 */}
            <SwiperSlide>
              <div
                className={`item rounded-md overflow-hidden cursor-pointer group border-2 ${
                  slideIndex === 3 ? "border-blue-500" : "border-transparent"
                }`}
                onClick={() => goto(3)}
              >
                <img
                  src="https://assets-jiocdn.ajio.com/medias/sys_master/root/20241230/Y3Hp/677297460f47f80c872b16a6/-473Wx593H-410460788-pureruby-MODEL4.jpg"
                  alt=""
                  className="w-full transition-all group-hover:scale-105"
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        {/* RIGHT SIDE BIG ZOOM */}
        <div className="zoomContainer w-[80%] h-[500px] overflow-hidden rounded:md">
          <Swiper
            ref={zoomSliderBig}
            slidesPerView={1}
            spaceBetween={0}
            navigation={true}                // ← ADDED arrows
            effect="fade"                    // ← ADDED fade transition
            fadeEffect={{ crossFade: true }} // ← smooth fade
            modules={[Navigation, EffectFade]}
          >
            {/* BIG SLIDE 0 */}
            <SwiperSlide>
              <InnerImageZoom
                src="https://assets-jiocdn.ajio.com/medias/sys_master/root/20241230/Hy0i/677297be0f47f80c872b193a/-473Wx593H-410460788-pureruby-MODEL.jpg"
                zoomSrc="https://assets-jiocdn.ajio.com/medias/sys_master/root/20241230/Hy0i/677297be0f47f80c872b193a/-473Wx593H-410460788-pureruby-MODEL.jpg"
                zoomType="hover"
                zoomScale={1}
              />
            </SwiperSlide>

            {/* BIG SLIDE 1 */}
            <SwiperSlide>
              <InnerImageZoom
                src="https://assets-jiocdn.ajio.com/medias/sys_master/root/20241230/xKBF/67729b08c148fa1b30692551/-78Wx98H-410460788-pureruby-MODEL2.jpg"
                zoomSrc="https://assets-jiocdn.ajio.com/medias/sys_master/root/20241230/xKBF/67729b08c148fa1b30692551/-78Wx98H-410460788-pureruby-MODEL2.jpg"
                zoomType="hover"
                zoomScale={1}
              />
            </SwiperSlide>

            {/* BIG SLIDE 2 */}
            <SwiperSlide>
              <InnerImageZoom
                src="https://assets-jiocdn.ajio.com/medias/sys_master/root/20241230/Mv6R/67729b08c148fa1b3069256a/-473Wx593H-410460788-pureruby-MODEL3.jpg"
                zoomSrc="https://assets-jiocdn.ajio.com/medias/sys_master/root/20241230/Mv6R/67729b08c148fa1b3069256a/-473Wx593H-410460788-pureruby-MODEL3.jpg"
                zoomType="hover"
                zoomScale={1}
              />
            </SwiperSlide>

            {/* BIG SLIDE 3 */}
            <SwiperSlide>
              <InnerImageZoom
                src="https://assets-jiocdn.ajio.com/medias/sys_master/root/20241230/Y3Hp/677297460f47f80c872b16a6/-473Wx593H-410460788-pureruby-MODEL4.jpg"
                zoomSrc="https://assets-jiocdn.ajio.com/medias/sys_master/root/20241230/Y3Hp/677297460f47f80c872b16a6/-473Wx593H-410460788-pureruby-MODEL4.jpg"
                zoomType="hover"
                zoomScale={1}
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default ProductZoom;
