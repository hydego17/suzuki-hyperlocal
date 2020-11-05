import styled from "@emotion/styled"
import Link from "next/link"

import { motion } from "framer-motion"
import { fadeInUp } from "components/animation"

// Motion variables

export default function OutletCard({ item }) {
  return (
    <motion.div variants={fadeInUp}>
      <CardStyled>
        <img src={`images/outlet/${item.gambar}`} alt={item.dealer} />
        <p className="label">{item.category}</p>
        <h3>{item.dealer}</h3>
        <p> {item.telepon}</p>
        <p>{item.lokasi}</p>
        <Link href="/[slug]" as={`/${item.slug}`}>
          <a className="link_primary">Kunjungi Website Outlet</a>
        </Link>
      </CardStyled>
    </motion.div>
  )
}

const CardStyled = styled.div`
  border-radius: 5px;
  background: white;
  padding: 1rem;
  margin-bottom: 2rem;
  box-shadow: 0 10px 10px -6px rgba(0, 0, 0, 0.1);

  p {
    font-size: 14px;
    margin: 1rem 0;
  }
`
