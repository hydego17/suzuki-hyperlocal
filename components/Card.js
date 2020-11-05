import styled from "@emotion/styled"
import Link from "next/link"

export default function Card({ item }) {
  return (
    <CardStyled>
      <img src={`images/${item.gambar}`} alt={item.dealer} />
      <p className="label">{item.category}</p>
      <h3>{item.dealer}</h3>
      <p>{item.telepon}</p>
      <p>{item.lokasi}</p>
      <Link href="/">
        <a className="link_primary">Kunjungi Website Outlet</a>
      </Link>
    </CardStyled>
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
