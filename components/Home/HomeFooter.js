import styled from "@emotion/styled"
import Link from "next/link"

export default function HomeFooter() {
  return (
    <HomeFooterStyled>
      <div className="container">
        <ul>
          <li>
            <a href="">Beranda</a>
          </li>
          <li>
            <a href="">Tentang Kami</a>
          </li>
          <li>
            <a href="">Outlet</a>
          </li>
          <li>
            <a href="">Blog</a>
          </li>
          <li>
            <a href="">Promo</a>
          </li>
        </ul>
      </div>

      <hr />
      <div className="container">
        <h1>ALAMAT</h1>
        <p>
          <strong>SUZUKI Nusantara Jaya Sentosa</strong> <br /> Jl. Soekarno -
          Hatta no. 289, Bojongloa Kidul Bandung 40234
        </p>

        <button className="link_primary">CEK GOOGLE MAPS</button>

        <button className="link_primary block">(022) 5204645</button>
      </div>

      <hr />
      <div className="container">
        <h1>HOTLINE 24 JAM (Bebas Pulsa)</h1>

        <a href="#">
          <img src="images/halosuzuki.png" />
        </a>

        <h1>Download My Suzuki</h1>
        <a href="/">
          <img src="images/mysuzuki.png" />
        </a>
        <a href="/">
          <img src="images/ecstar.png" />
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

  h1 {
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
