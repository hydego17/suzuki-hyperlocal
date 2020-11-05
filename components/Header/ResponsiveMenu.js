import { useContext } from "react"
import HeaderContext from "../../Contexts/HeaderContext"

import Link from "next/link"
import styled from "@emotion/styled"

export default function ResponsiveMenu() {
  const { openMenu, homeNavs } = useContext(HeaderContext)
  const { links, telepon } = homeNavs
  return (
    <ResponsiveNav openMenu={openMenu} setOpenMenu={openMenu}>
      <div className="link">
        {links.map((link) => (
          <Link key={link.id} href="/">
            <a>{link.nama}</a>
          </Link>
        ))}
      </div>

      <hr />

      <Link href="/">
        <a className="link_primary block">{telepon}</a>
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
  right: -100%;
  position: fixed;
  z-index: -99;
  transition: all 0.4s ease;
  padding: 5rem 2rem;

  ${({ openMenu }) =>
    openMenu &&
    `
    visibility: visible;
    opacity: 0.95;
    right: 0;
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
