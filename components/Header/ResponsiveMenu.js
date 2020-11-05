import { useContext } from "react"
import HeaderContext from "../../Contexts/HeaderContext"

import Link from "next/link"
import styled from "@emotion/styled"

export default function ResponsiveMenu() {
  const { openMenu } = useContext(HeaderContext)
  return (
    <ResponsiveNav openMenu={openMenu} setOpenMenu={openMenu}>
      <div className="link">
        <Link href="/">
          <a>Beranda</a>
        </Link>
        <Link href="/">
          <a>Tentang Kami</a>
        </Link>
        <Link href="/">
          <a>Outlet</a>
        </Link>
        <Link href="/">
          <a>Blog</a>
        </Link>
        <Link href="/">
          <a>Promo</a>
        </Link>
      </div>

      <hr />

      <Link href="/">
        <a className="link_primary block">(022) 5204645</a>
      </Link>
      <div className="logos">
        <a href="#">
          <img src="images/halosuzuki.png" />
        </a>
        <a href="#">
          <img src="images/mysuzuki.png" />
        </a>
      </div>
      <p>
        © 2020 Suzuki Indonesia. <br />
        All rights reserved.
      </p>
    </ResponsiveNav>
  )
}

const ResponsiveNav = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  visibility: hidden;
  opacity: 0;
  text-align: right;
  background: #fff;
  width: 300px;
  height: 100%;
  top: 0;
  right: 0;
  position: fixed;
  z-index: -99;
  transition: opacity 0.5s ease;
  padding: 5rem 2rem;

  ${({ openMenu }) =>
    openMenu &&
    `
    visibility: visible;
    opacity: 0.95;
    z-index:2;
    
  `}

  a {
    font-size: 1.3rem;
    font-weight: bolder;
    display: ${({ openMenu }) => (openMenu ? "block" : "none")};
    padding: 1rem 0;
    transition: transform 0.5s ease;

    &:hover {
      transform: translateX(-2%);
    }
  }

  .block {
    font-size: 1rem;
  }

  .logos {
    display: flex;
    align-items: center;

    img {
      max-width: 100%;
    }
  }
`
