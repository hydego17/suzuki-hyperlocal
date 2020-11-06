import { useContext, useEffect } from "react"
import { useRouter } from "next/router"
import HeaderContext from "../Contexts/HeaderContext"
import styled from "@emotion/styled"

import Navigation from "components/xl-7/Navigation"
import SliderTop from "components/xl-7/SliderTop"
import CarVariants from "components/xl-7/CarVariants"
import CarGallery from "components/xl-7/CarGallery"
import Specs from "components/xl-7/Specs"

import Preloader from "components/Preloader"

import { motion } from "framer-motion"
import { fade, fadeInUp } from "components/animation"

import data from "../data/db.json"

export default function CarPage() {
  const { loading, setLoading } = useContext(HeaderContext)
  const router = useRouter()
  const { outlet } = data
  const myData = outlet.find((o) => o.slug === router.query.slug)

  useEffect(() => {
    setLoading(true)
    const timing = setTimeout(() => {
      setLoading(false)
    }, 300)

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
              <Navigation />
              {/* Slider */}
              <motion.div id="overview" variants={fadeInUp}>
                <SliderTop />
              </motion.div>

              {/* Car Variants */}
              <div id="carVariants">
                <CarVariants />
              </div>

              {/* Gallery */}
              <div id="carGallery">
                <CarGallery />
              </div>

              {/* Spec & Price */}
              <div id="carSpecs">
                <Specs />
              </div>
            </div>
          </OutletStyled>
        </motion.div>
      )}
    </>
  )
}

const OutletStyled = styled.div`
  background-color: #f1f5f6;
  .container {
    background: white;
    padding: 4rem 0 0 0;
  }
`
