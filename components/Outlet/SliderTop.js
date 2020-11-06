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
        <img src="images/banner-1.png" />
      </SwiperSlide>
    )
  }
  return (
    <SliderTopStyled>
      <Swiper tag="section" wrapperTag="ul" navigation pagination>
        {slides}
      </Swiper>
    </SliderTopStyled>
  )
}

const SliderTopStyled = styled.div``
