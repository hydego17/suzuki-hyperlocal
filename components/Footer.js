import styled from "@emotion/styled"

export default function Footer() {
  return (
    <>
      <FooterStyled>
        <hr />
        <div className="container">
          <h5>HOTLINE 24 JAM (Bebas Pulsa)</h5>

          <a href="/">
            <img src="images/halosuzuki.png" />
          </a>

          <h5>Download My Suzuki</h5>
          <a href="/">
            <img src="images/mysuzuki.png" />
          </a>
          <a href="/">
            <img src="images/ecstar.png" />
          </a>
        </div>

        <footer>
          © 2020 Suzuki Indonesia. <br />
          All rights reserved.
        </footer>
      </FooterStyled>
    </>
  )
}

const FooterStyled = styled.div`
  text-align: center;

  h5 {
    margin: 0.5rem 0;
  }

  img {
    margin: 1rem 0;
  }
  .container {
    padding: 1rem 2rem;
    display: flex;
    flex-direction: column;
  }
  footer {
    background: ${({ theme }) => theme.colors.primary};
    padding: 2rem 0;
    color: white;
  }
`
