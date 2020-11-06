import styled from "@emotion/styled"

export default function CarGallery() {
  return (
    <CarGalleryStyled>
      <div className="banner">
        <h4>Eksterior</h4>
      </div>
      <img src="images/xl-7/xl7-eksterior.png" />
      <div className="banner">
        <h4>Interior</h4>
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
