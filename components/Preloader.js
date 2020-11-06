import { useContext } from "react"
import HeaderContext from "../Contexts/HeaderContext"

import styled from "@emotion/styled"
import { motion, AnimatePresence } from "framer-motion"

export default function Preloader() {
  const { loading } = useContext(HeaderContext)

  return (
    <AnimatePresence exitBeforeEnter>
      <LoaderStyled loading={loading ? 1 : 0}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="preloader_content"
        >
          <img src="images/logo.png" alt="Suzuki" />
          Mohon tunggu, <br /> sedang memuat konten...
        </motion.div>
      </LoaderStyled>
    </AnimatePresence>
  )
}

const LoaderStyled = styled.div`
  position: fixed;
  opacity: 1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  z-index: 99;
  width: 100%;
  height: 100%;
  background-color: #fff;
  transition: all 1s ease;
  text-align: center;

  ${({ loading }) =>
    !loading &&
    `
    opacity: 0;
    visibility: hidden;
    
  `}

  img {
    width: 70px;
    display: block;
    margin: 0 auto 15px;
  }
`
