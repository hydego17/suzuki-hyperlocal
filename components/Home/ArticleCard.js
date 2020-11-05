import styled from "@emotion/styled"

export default function ArticleCard({ item }) {
  return (
    <ArticleStyled>
      <img src={`images/article/${item.gambar}`} />
      <p> {item.tanggal}</p>
      <h3>{item.judul}</h3>
    </ArticleStyled>
  )
}

const ArticleStyled = styled.div`
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
