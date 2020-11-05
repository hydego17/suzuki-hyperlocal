import { useContext } from "react"
import Head from "next/head"
import HeaderContext from "../../Contexts/HeaderContext"

import styled from "@emotion/styled"
import { useRouter } from "next/router"
import Link from "next/link"
import MobileMenu from "./MobileMenu"
import ResponsiveMenu from "./ResponsiveMenu"

import data from "data/db.json"

import { motion } from "framer-motion"
import { fadeInRight } from "components/animation"

export default function Header() {
  const { loading } = useContext(HeaderContext)

  const router = useRouter()
  const myData = data.outlet.find((o) => o.slug === router.query.slug)

  return (
    <>
      <Head>
        <title>Suzuki HyperLocal</title>
        <link rel="icon" href="images/logo.png" />
      </Head>

      {!loading && (
        <motion.div
          initial={"initial"}
          animate={"animate"}
          exit={{ opacity: 0 }}
        >
          <HeaderStyled>
            <Link href="/">
              <motion.a variants={fadeInRight} className="logo_container">
                <div className="logo">
                  <img src="images/logo.png" alt="suzuki" />
                </div>

                {myData ? (
                  <div className="logo_text">
                    <h3>{myData.dealer}</h3>
                    <p>PT. Nusantara Jaya Sentosa</p>
                  </div>
                ) : (
                  <div className="logo_text">
                    <h3>PT. Nusantara Jaya Sentosa</h3>
                    <p>Main Dealer Suzuki Jawa Barat</p>
                  </div>
                )}
              </motion.a>
            </Link>

            {/* Burger Menu */}

            <MobileMenu />

            {/* Responsive Menu */}
            <ResponsiveMenu />
          </HeaderStyled>
        </motion.div>
      )}
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
