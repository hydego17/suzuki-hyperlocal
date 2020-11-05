import styled from "@emotion/styled"
import { motion } from "framer-motion"

export default function OutletPage() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <OutletStyled>
          <div className="container">
            {/* Slider */}
            {/* Car */}
            {/* Services */}
            {/* Sticky tag */}
          </div>
        </OutletStyled>
      </motion.div>
    </>
  )
}

const OutletStyled = styled.div``
