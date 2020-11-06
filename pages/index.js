import { useState, useEffect, useContext } from "react"
import HeaderContext from "../Contexts/HeaderContext"
import styled from "@emotion/styled"

import OutletCard from "components/Home/OutletCard"
import ArticleCard from "components/Home/ArticleCard"
import HomeFooter from "components/Home/HomeFooter"
import Preloader from "components/Preloader"

import data from "../data/db.json"

import { motion } from "framer-motion"
import { fadeInDown } from "components/animation"

export default function Home() {
  const { loading, setLoading } = useContext(HeaderContext)

  const [state, setState] = useState({})
  const { outlet, article } = state

  useEffect(() => {
    setLoading(true)
    const timing = setTimeout(() => {
      setState(data)
      setLoading(false)
    }, 750)

    return () => clearTimeout(timing)
  }, [])
  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <motion.div
          initial={"initial"}
          animate={"animate"}
          exit={{ opacity: 0 }}
        >
          <HomeStyled>
            {/* Outlet View */}
            <div className="container banner">
              <motion.h1 variants={fadeInDown}>
                Temukan Outlet Suzuki terdekat di daerah sekitar Anda
              </motion.h1>
            </div>

            <div className="container card1">
              {outlet &&
                outlet.map((item) => <OutletCard key={item.id} item={item} />)}
            </div>

            {/* Article View */}
            <div className="container banner">
              <h1>Informasi Terbaru</h1>
              <p>Seputar Promo, Berita, Event dari Suzuki</p>
            </div>
            <div className="container card2">
              {article &&
                article.map((item) => (
                  <ArticleCard key={item.id} item={item} />
                ))}

              <a href="/" className="link_primary">
                Lihat Semua Informasi
              </a>
            </div>
          </HomeStyled>

          {/* Footer */}
          <HomeFooter />
        </motion.div>
      )}
    </>
  )
}

const HomeStyled = styled.div`
  background-color: #f1f5f6;

  .container.card1 {
    transform: translateY(-2%);
  }
  .container.card2 {
    transform: translateY(-5%);
  }

  img {
    width: 100%;
  }
`
