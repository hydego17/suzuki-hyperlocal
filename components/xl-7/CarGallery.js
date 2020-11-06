import styled from "@emotion/styled"

export default function CarGallery() {
  return (
    <CarGalleryStyled>
      <div className="banner">
        <h1>Eksterior</h1>
      </div>
      <img src="images/xl-7/xl7-eksterior.png" />
      <div className="banner">
        <h1>Interior</h1>
      </div>
      <img src="images/xl-7/xl7-interior.png" />
    </CarGalleryStyled>
  )
}

const CarGalleryStyled = styled.div`
  .banner {
    height: 80px;
  }
`
