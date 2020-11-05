import { useContext, useEffect } from "react"
import { useRouter } from "next/router"
import HeaderContext from "../Contexts/HeaderContext"
import styled from "@emotion/styled"

import SliderTop from "components/Outlet/SliderTop"
import CarOutlet from "components/Outlet/CarOutlet"
import OutletFooter from "components/Outlet/OutletFooter"
import Preloader from "components/Preloader"

import { motion } from "framer-motion"
import { fadeInUp } from "components/animation"

import data from "../data/db.json"

export default function Outlet() {
  const { loading, setLoading } = useContext(HeaderContext)
  const router = useRouter()
  const { outlet } = data
  const myData = outlet.find((o) => o.slug === router.query.slug)

  useEffect(() => {
    setLoading(true)
    const timing = setTimeout(() => {
      setLoading(false)
    }, 1000)

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
          <OutletStyled>
            <div className="container">
              {/* Slider */}
              <motion.div variants={fadeInUp}>
                <SliderTop />
              </motion.div>
              {/* Car */}
              <CarOutlet />
              {/* Services */}
              <div>
                <img src="images/pesan-servis.png" />
                <img src="images/sukucadang.png" />
              </div>
              {/* Sticky tag */}
            </div>
          </OutletStyled>

          {/* Outlet Footer */}
          <OutletFooter myData={myData} />
        </motion.div>
      )}
    </>
  )
}

const OutletStyled = styled.div`
  .container {
    padding: 4rem 0;
  }
`
