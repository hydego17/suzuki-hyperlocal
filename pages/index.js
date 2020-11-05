import styled from "@emotion/styled"
import OutletCard from "components/Home/OutletCard"
import ArticleCard from "components/Home/ArticleCard"
import HomeFooter from "components/Home/HomeFooter"
import data from "../data/db.json"
import Link from "next/link"

export default function Home() {
  const { outlet, article } = data
  return (
    <>
      <HomeStyled>
        {/* Outlet View */}
        <div className="container banner">
          <h1>Temukan Outlet Suzuki terdekat di daerah sekitar Anda</h1>
        </div>

        <div className="container card1">
          {outlet.length > 0 &&
            outlet.map((item) => <OutletCard key={item.id} item={item} />)}
        </div>

        {/* Article View */}
        <div className="container banner">
          <h1>Informasi Terbaru</h1>
          <p>Seputar Promo, Berita, Event dari Suzuki</p>
        </div>
        <div className="container card2">
          {article.length > 0 &&
            article.map((item) => <ArticleCard key={item.id} item={item} />)}

          <Link href="#">
            <a className="link_primary">Lihat Semua Informasi</a>
          </Link>
        </div>
      </HomeStyled>

      {/* Footer */}
      <HomeFooter />
    </>
  )
}

const HomeStyled = styled.div`
  background-color: #f1f5f6;
  .banner {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 300px;
    color: white;
    background: ${({ theme }) => theme.colors.primary};
    text-align: center;
  }

  .container.card1 {
    transform: translateY(-2%);
  }
  .container.card2 {
    transform: translateY(-5%);
  }

  img {
    width: 100%;
  }
`
