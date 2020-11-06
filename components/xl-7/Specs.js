import React, { useState } from "react"
import {
  Collapse,
  Button,
  CardHeader,
  CardBody,
  Card,
  CardTitle,
  CardText,
} from "reactstrap"
import styled from "@emotion/styled"
import data from "data/db.json"

export default function Specs() {
  const { dimensi } = data
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  return (
    <SpecsStyled>
      {/* Specs */}
      <h5>SPESIFIKASI</h5>
      <Card>
        <a onClick={toggle}>
          <CardHeader>
            <strong>Dimensi</strong>
          </CardHeader>
        </a>
      </Card>

      <Collapse isOpen={isOpen}>
        <Card>
          <CardBody>
            <table className="table">
              <tbody>
                {dimensi.map((item, index) => (
                  <tr key={index}>
                    <th scope="row">{item.category}</th>
                    <td>{item.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </CardBody>
        </Card>
      </Collapse>

      <Card>
        <CardHeader>
          <strong>Mesin</strong>
        </CardHeader>
      </Card>
      <Card>
        <CardHeader>
          <strong>Transmisi</strong>
        </CardHeader>
      </Card>
      <Card>
        <CardHeader>
          <strong>Berat</strong>
        </CardHeader>
      </Card>

      {/* Specs */}
      <h5>DAFTAR HARGA</h5>

      <a className="link_primary" href="#">
        Lihat Semua Harga Mobil
      </a>
    </SpecsStyled>
  )
}

const SpecsStyled = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;

  h5 {
    text-align: center;
    padding: 1rem 0;
  }
  .card-header {
    cursor: pointer;
  }
  .link_primary {
    margin: 1rem auto;
  }
`
