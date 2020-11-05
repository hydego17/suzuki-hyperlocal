import { useContext } from "react"
import HeaderContext from "../../Contexts/HeaderContext"

import styled from "@emotion/styled"
import Link from "next/link"
import MobileMenu from "./MobileMenu"
import ResponsiveMenu from "./ResponsiveMenu"
import { motion } from "framer-motion"
import { fadeInRight } from "components/animation"

export default function Header() {
  const { homeNavs } = useContext(HeaderContext)
  const { header } = homeNavs

  return (
    <>
      <motion.div initial={"initial"} animate={"animate"} exit={{ opacity: 0 }}>
        <HeaderStyled>
          <Link href="/">
            <motion.a variants={fadeInRight} className="logo_container">
              <div className="logo">
                <img src="images/logo.png" alt="suzuki" />
              </div>
              <div className="logo_text">
                <h3>{header.bigtext}</h3>
                <p>{header.smalltext}</p>
              </div>
            </motion.a>
          </Link>

          {/* Burger Menu */}

          <MobileMenu />

          {/* Responsive Menu */}
          <ResponsiveMenu />
        </HeaderStyled>
      </motion.div>
    </>
  )
}

const HeaderStyled = styled.header`
  position: fixed;
  padding: 0.75rem 1rem;
  width: 100%;
  z-index: 2;
  background: white;
  box-shadow: 0 10px 10px -6px rgba(0, 0, 0, 0.1);

  .logo_container {
    cursor: pointer;
    z-index: 3;
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
