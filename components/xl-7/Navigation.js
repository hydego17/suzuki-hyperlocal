import styled from "@emotion/styled"

export default function Navigation() {
  return (
    <NavStyled>
      <ul>
        <li>
          <a href="#overview">Overview</a>
        </li>
        <li>
          <a href="#carVariants">Variant</a>
        </li>
        <li>
          <a href="#carGallery">Gallery</a>
        </li>
        <li>
          <a href="#carSpecs">Specs</a>
        </li>
      </ul>
    </NavStyled>
  )
}

const NavStyled = styled.div`
  position: sticky;
  top: 59px;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  z-index: 1;
  ul {
    margin: 0;
    justify-content: space-around;
    display: flex;
    padding: 0.5rem;

    a {
      &:hover,
      &:active {
        color: #dfe4ea;
      }
    }
  }
`
