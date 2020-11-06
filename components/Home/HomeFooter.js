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
        <h4>ALAMAT</h4>
        <p>
          <strong>SUZUKI Nusantara Jaya Sentosa</strong> <br /> Jl. Soekarno -
          Hatta no. 289, Bojongloa Kidul Bandung 40234
        </p>

        <a href="/">
          <button className="link_primary">CEK GOOGLE MAPS</button>
        </a>

        <a href="/">
          <button className="link_primary block">(022) 5204645</button>
        </a>
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

  h4 {
    margin: 0.5rem 0;
  }

  ul li {
    padding: 0.5rem 1rem;
    display: inline-block;
  }

  img {
    margin: 1rem 0;
  }
`
