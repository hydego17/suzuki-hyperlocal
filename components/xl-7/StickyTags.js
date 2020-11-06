import { useState } from "react"
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap"
import styled from "@emotion/styled"

import MyModal from "components/MyModal"

import { FcInspection } from "react-icons/fc"
import { SiWhatsapp } from "react-icons/si"

export default function StickyTags() {
  const [modal, setModal] = useState(false)

  const toggle = () => setModal(!modal)
  return (
    <StickyStyled>
      <div className="sticky_tags">
        <ul>
          <li>
            <a className="link_primary" onClick={toggle}>
              Booking Mobil
            </a>
          </li>
          <li>
            <SiWhatsapp className="wa" /> Whatsapp
          </li>
          <li>
            <FcInspection />
            Simulasi Kredit
          </li>
        </ul>
      </div>

      <div>
        <MyModal modal={modal} setModal={setModal} />
      </div>
    </StickyStyled>
  )
}

const StickyStyled = styled.div`
  .sticky_tags {
    position: fixed;
    bottom: 0;
    width: 100%;

    ul {
      border-radius: 10px;
      width: 90%;
      background: white;
      padding: 0.5rem;
      margin: 1rem auto;
      display: flex;
      justify-content: space-around;
      align-items: center;
      box-shadow: 0 4px 9px rgba(0, 0, 0, 0.14);

      .link_primary {
        background: ${({ theme }) => theme.colors.primary};
        color: white;
        padding: 0.75rem 2rem;
        border-radius: 5px;
      }

      li {
        cursor: pointer;
        align-items: center;
        display: flex;
        flex-direction: column;
        font-size: 0.8rem;
      }

      svg {
        margin: 5px 0;
        font-size: 25px;

        &.wa {
          color: green;
        }
      }
    }
  }
`
