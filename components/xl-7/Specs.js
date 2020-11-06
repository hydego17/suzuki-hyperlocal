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
  console.log(dimensi)
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  return (
    <SpecsStyled>
      {/* Specs */}
      <h4>SPESIFIKASI</h4>
      <Card>
        <a onClick={toggle}>
          <CardHeader>Dimensi</CardHeader>
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
        <CardHeader>Mesin</CardHeader>
      </Card>
      <Card>
        <CardHeader>Transmisi</CardHeader>
      </Card>
      <Card>
        <CardHeader>Berat</CardHeader>
      </Card>

      {/* Specs */}
      <h4>DAFTAR HARGA</h4>

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

  .card-header {
    cursor: pointer;
  }
  .link_primary {
    margin: 1rem auto;
  }
`
