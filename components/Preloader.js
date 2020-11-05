import { useContext } from "react"
import HeaderContext from "../Contexts/HeaderContext"

import styled from "@emotion/styled"

export default function Preloader() {
  const { loading } = useContext(HeaderContext)

  return (
    <LoaderStyled loading={loading ? 1 : 0}>
      <div className="preloader_content">
        <img src="images/logo.png" alt="Suzuki" />
        Mohon tunggu, <br /> sedang memuat konten..
      </div>
    </LoaderStyled>
  )
}

const LoaderStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  z-index: 99999;
  width: 100%;
  height: 100%;
  background-color: #fff;
  transition: all 1s ease;
  text-align: center;

  ${({ loading }) =>
    !loading &&
    `
    opacity: 0;
    visibility: hidden;
    transition-delay: 430ms;
    
  `}

  img {
    width: 70px;
    display: block;
    margin: 0 auto 15px;
  }
`
