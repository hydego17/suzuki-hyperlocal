import { useContext, useEffect } from "react"
import { useRouter } from "next/router"
import HeaderContext from "../Contexts/HeaderContext"
import styled from "@emotion/styled"

import SliderTop from "components/Outlet/SliderTop"
import CarTabs from "components/Outlet/CarTabs"
import OutletFooter from "components/Outlet/OutletFooter"
import Preloader from "components/Preloader"

import { FcViewDetails, FcInspection, FcAddressBook } from "react-icons/fc"
import { SiWhatsapp } from "react-icons/si"
import { motion } from "framer-motion"
import { fade, fadeInUp } from "components/animation"

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
    }, 500)

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

              {/* Car Tabs */}

              <CarTabs />

              {/* Services */}
              <div>
                <img src="images/pesan-servis.png" />
                <img src="images/sukucadang.png" />
              </div>
            </div>

            {/* Sticky tag */}
            <div className="sticky_tags">
              <ul>
                <li>
                  <SiWhatsapp className="wa" /> Whatsapp
                </li>
                <li>
                  <FcAddressBook />
                  Daftar Harga
                </li>
                <li>
                  <FcViewDetails />
                  Pesan Servis
                </li>
                <li>
                  <FcInspection />
                  Simulasi Kredit
                </li>
              </ul>
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
  background-color: #f1f5f6;
  .container {
    background: white;
    padding: 4rem 0 0 0;
  }

  .sticky_tags {
    z-index: 2;
    position: fixed;
    bottom: 0;
    width: 100%;

    ul {
      border-radius: 10px;
      width: 90%;
      background: white;
      padding: 0.5rem 1rem;
      margin: 1rem auto;
      display: flex;
      justify-content: space-around;
      box-shadow: 0 4px 9px rgba(0, 0, 0, 0.14);
    }
    li {
      cursor: pointer;
      align-items: center;
      display: flex;
      flex-direction: column;
      font-size: 0.8rem;
    }

    svg {
      margin: 5px 0;
      font-size: 25px;

      &.wa {
        color: green;
      }
    }
  }
`
