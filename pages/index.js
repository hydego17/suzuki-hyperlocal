import styled from "@emotion/styled"
import Card from "components/Card"
import data from "../data/db.json"

export default function Home() {
  const { dealer } = data
  return (
    <HomeStyled>
      <div className="container banner">
        <h1>Temukan Outlet Suzuki terdekat di daerah sekitar Anda</h1>
      </div>

      <div className="container card">
        {dealer.length > 0 &&
          dealer.map((item) => <Card key={item.id} item={item} />)}
      </div>
    </HomeStyled>
  )
}

const HomeStyled = styled.div`
  .banner {
    display: flex;
    align-items: center;
    height: 300px;
    color: white;
    background: ${({ theme }) => theme.colors.primary};
    text-align: center;
  }

  .card {
    transform: translateY(-2%);
  }
`
