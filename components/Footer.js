import styled from "@emotion/styled"

export default function Footer() {
  return (
    <FooterStyled>
      © 2020 Suzuki Indonesia. <br />
      All rights reserved.
    </FooterStyled>
  )
}

const FooterStyled = styled.div`
  background: ${({ theme }) => theme.colors.primary};
  padding: 2rem 0;
  text-align: center;
  color: white;
`
