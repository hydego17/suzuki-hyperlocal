import React from "react"
import styled from "@emotion/styled"
import Link from "next/link"
import MobileMenu from "./MobileMenu"

export default function Header() {
  return (
    <>
      <HeaderStyled>
        <div className="container">
          <Link href="/">
            <a className="logo_container">
              <div className="logo">
                <img src="images/logo.png" alt="suzuki" />
              </div>
              <div className="logo_text">
                <h3>PT. Nusantara Jaya Sentosa</h3>
                <p>Main Dealer Suzuki Jawa Barat</p>
              </div>
            </a>
          </Link>
          <MobileMenu />
        </div>
      </HeaderStyled>
    </>
  )
}

const HeaderStyled = styled.header`
  position: fixed;
  width: 100%;
  z-index: 2;
  background: white;
  box-shadow: 0 10px 10px -6px rgba(0, 0, 0, 0.1);

  .container {
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    padding: 0.75rem 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .logo_container {
    display: flex;
    align-items: center;

    .logo {
      width: 30px;
      height: 36px;
      margin-right: 0.5rem;
    }

    .logo_text {
      font-size: 0.7rem;
    }
  }
`
