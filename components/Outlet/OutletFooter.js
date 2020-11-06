import { useContext } from "react"
import HeaderContext from "../../Contexts/HeaderContext"
import styled from "@emotion/styled"

export default function OutletFooter({ myData }) {
  const { dealer, lokasi, telepon } = myData
  const { homeNavs } = useContext(HeaderContext)
  const { links } = homeNavs
  return (
    <OutletFooterStyled>
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
        <h5>ALAMAT</h5>
        <p>
          <strong>{dealer}</strong> <br /> {lokasi}
        </p>

        <button className="link_primary">CEK GOOGLE MAPS</button>

        <button className="link_primary block">{telepon}</button>
      </div>
    </OutletFooterStyled>
  )
}

const OutletFooterStyled = styled.div`
  text-align: center;

  .container {
    padding: 1rem 2rem;
    display: flex;
    flex-direction: column;
  }

  h5 {
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
