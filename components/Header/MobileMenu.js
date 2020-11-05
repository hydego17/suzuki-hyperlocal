import { useContext } from "react"
import HeaderContext from "../../Contexts/HeaderContext"

import styled from "@emotion/styled"
import HamburgerMenu from "react-hamburger-menu"

import { motion } from "framer-motion"
import Animation from "components/animation"
import { fadeInLeft } from "../animation"

export default function MobileMenu() {
  const { openMenu, setOpenMenu } = useContext(HeaderContext)

  return (
    <MobileStyled onClick={() => setOpenMenu(!openMenu)}>
      <motion.div variants={fadeInLeft}>
        <HamburgerMenu
          isOpen={openMenu}
          menuClicked={() => setOpenMenu(!openMenu)}
          width={15}
          height={12}
          strokeWidth={2}
          rotate={180}
          color="white"
          borderRadius={0}
          animationDuration={0.4}
        />
      </motion.div>
    </MobileStyled>
  )
}

const MobileStyled = styled.div`
  position: fixed;
  top: 10px;
  right: 10px;
  z-index: 3;
  border-radius: 50%;
  padding: 0.75rem;
  background: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
`
