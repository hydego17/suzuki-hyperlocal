import styled from "@emotion/styled"
import { Swiper, SwiperSlide } from "swiper/react"
import SwiperCore, { Navigation, Pagination } from "swiper"
import "swiper/swiper-bundle.css"

SwiperCore.use([Navigation, Pagination])

export default function SliderTop() {
  const slides = []

  for (let i = 0; i < 5; i++) {
    slides.push(
      <SwiperSlide key={`slide-${i}`} tag="li">
        <img src="images/xl-7/slider-xl-7.png" />
      </SwiperSlide>
    )
  }
  return (
    <SliderTopStyled>
      <Swiper tag="section" wrapperTag="ul" navigation pagination>
        {slides}
      </Swiper>

      <div className="banner">
        <img src="images/xl-7/xl7-overview.png" alt="" />

        <p>
          Suzuki XL7 hadir dengan tampilan maskulin, tangguh dan berkarakter.
          Desain modern SUV 7-Seater memberikan kebanggaan dan kepercayaan bagi
          penggunanya. Dilengkapi dengan fitur canggih semakin membuat XL7
          menjadi SUV yang luar biasa di kelasnya
        </p>

        <div className="banner_links">
          <button className="link_primary">Unduh Brosur</button>
          <button className="link_primary">Harga</button>
        </div>
      </div>
    </SliderTopStyled>
  )
}

const SliderTopStyled = styled.div`
  .banner {
    margin-top: -5px;
    padding: 1rem 2rem;

    .banner_links {
      margin-top: 1rem;
      display: flex;
    }
  }
  .swiper-button-prev,
  .swiper-button-next {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.8);
    color: black;

    &:after {
      font-weight: bold;
      font-size: 15px;
    }
  }
  .swiper-pagination {
  }
  .swiper-pagination-bullet-active {
    background: white;
  }
`
