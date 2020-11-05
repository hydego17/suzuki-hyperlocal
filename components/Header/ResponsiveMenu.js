import { useContext } from "react"
import HeaderContext from "../../Contexts/HeaderContext"

import Link from "next/link"
import styled from "@emotion/styled"

export default function ResponsiveMenu() {
  const { menus, openMenu, setOpenMenu } = useContext(HeaderContext)
  return (
    <ResponsiveNav openMenu={openMenu} setOpenMenu={openMenu}>
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
    </ResponsiveNav>
  )
}

const ResponsiveNav = styled.div`
  display: block;
  text-align: right;
  background: #fff;
  width: 300px;
  height: 100%;
  top: 0;
  right: 0;
  position: fixed;
  z-index: -99;
  opacity: 0;
  transition: opacity 0.5s ease;
  padding: 5rem 3rem;

  ${({ openMenu }) =>
    openMenu &&
    `
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
      text-decoration: underline;
    }
  }
`
