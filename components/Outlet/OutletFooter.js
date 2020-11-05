import { useContext } from "react"
import HeaderContext from "../../Contexts/HeaderContext"
import styled from "@emotion/styled"

export default function HomeFooter() {
  const { homeNavs } = useContext(HeaderContext)
  const { links } = homeNavs
  return (
    <HomeFooterStyled>
      <div className="container">
        <ul>
          {links.map((link) => (
            <li key={link.id}>
              <a href="">{link.nama}</a>
            </li>
          ))}
        </ul>
      </div>

      <hr />
      <div className="container">
        <h1>ALAMAT</h1>
        <p>
          <strong>SUZUKI NJS BUAH BATU</strong> <br /> Jl. Soekarno - Hatta no.
          513, Bandung
        </p>

        <button className="link_primary">CEK GOOGLE MAPS</button>

        <button className="link_primary block">(022) 7300723</button>
      </div>
    </HomeFooterStyled>
  )
}

const HomeFooterStyled = styled.div`
  text-align: center;

  .container {
    padding: 1rem 2rem;
    display: flex;
    flex-direction: column;
  }

  h1 {
    margin: 0.5rem 0;
  }

  ul li {
    padding: 0.5rem;
    display: inline-block;
  }

  img {
    margin: 1rem 0;
  }
`
