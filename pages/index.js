import { useState, useEffect } from "react"
import Link from "next/link"
import styled from "@emotion/styled"

import OutletCard from "components/Home/OutletCard"
import ArticleCard from "components/Home/ArticleCard"
import HomeFooter from "components/Home/HomeFooter"
import Preloader from "components/preloader"

import data from "../data/db.json"

import { motion } from "framer-motion"
import { fadeInUp, fadeInDown } from "components/animation"

export default function Home() {
  const [state, setState] = useState({})
  const { outlet, article } = state
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    const timing = setTimeout(() => {
      setState(data)
      setLoading(false)
    }, 1000)

    return () => clearTimeout(timing)
  }, [])
  return (
    <>
      {loading ? (
        <Preloader loading={loading} />
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

              <Link href="#">
                <a className="link_primary">Lihat Semua Informasi</a>
              </Link>
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
  .banner {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 300px;
    color: white;
    background: ${({ theme }) => theme.colors.primary};
    text-align: center;
  }

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

// export async function getServerSideProps() {
//   const res = await fetch(
//     "https://my-json-server.typicode.com/hydego17/data-outlet/db"
//   )
//   const data = await res.json()

//   return {
//     props: {
//       data,
//     },
//   }
// }
