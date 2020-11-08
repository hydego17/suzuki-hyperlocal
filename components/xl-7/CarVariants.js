import { useState } from "react"
import styled from "@emotion/styled"

import data from "data/db.json"

export default function CarVariants() {
  // set color options data to state
  const { warnaAlpha, warnaBeta, warnaZeta } = data.warnaMobil
  const [types, setTypes] = useState([...warnaAlpha])

  // state for color & variant
  const [variant, setVariant] = useState("alpha")
  const [warna, setWarna] = useState("black")

  // set car name to state
  const { alpha, beta, zeta } = data.mobil
  const [car, setCar] = useState([...alpha])
  const currentCar = car.find((c) => c.warna === warna)

  // Set Color options, Variant & color

  const handleOptions = (types, variant, warna, car) => {
    setTypes([...types])
    setVariant(variant)
    setWarna(warna)
    setCar(car)
  }

  const chooseVariant = (v) => {
    return variant === v ? "active" : ""
  }

  return (
    <CarVariantsStyled>
      <div className="container">
        <h4>Tipe & Warna</h4>
        <ul className="selector">
          <li
            className={chooseVariant("alpha")}
            onClick={() => handleOptions(warnaAlpha, "alpha", "orange", alpha)}
          >
            XL Alpha
          </li>
          <li
            className={chooseVariant("beta")}
            onClick={() => handleOptions(warnaBeta, "beta", "purple", beta)}
          >
            XL Beta
          </li>
          <li
            className={chooseVariant("zeta")}
            onClick={() => handleOptions(warnaZeta, "zeta", "white", zeta)}
          >
            XL Zeta
          </li>
        </ul>

        <div>
          <img src={`images/xl-7/${variant}-${warna}.png`} />
          <h5>{currentCar.nama}</h5>
        </div>

        <ul>
          {types.map((color, index) => (
            <li
              key={index}
              className={
                `color_option ` + color + (warna === color ? " active" : "")
              }
              onClick={() => setWarna(color)}
            ></li>
          ))}
        </ul>
      </div>
    </CarVariantsStyled>
  )
}

const CarVariantsStyled = styled.div`
  .container {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  img {
    transition: all 0.5s linear;
    display: block;
    margin: 0 auto;
    width: 80%;
  }
  .color_option {
    margin-right: 1rem;
    border: 3px solid gray;
    border-radius: 50%;
    padding: 1rem;

    &.active {
      border: 3px solid ${({ theme }) => theme.colors.primary};
    }

    &.orange {
      background-color: #c04c3c;
    }
    &.kakhi {
      background-color: #ae923d;
    }
    &.black {
      background-color: black;
    }
    &.white {
      background-color: white;
    }
    &.purple {
      background-color: #534050;
    }
    &.grey {
      background-color: #797979;
    }
  }

  h5 {
    margin: 1rem 0;
    font-size: 1rem;
    text-align: center;
  }

  ul {
    padding: 1rem;
    display: flex;

    li {
      padding: 0.5rem 1rem;
      cursor: pointer;
      transition: all 0.3s linear;

      &.active {
        background-color: ${({ theme }) => theme.colors.primary};
        color: white;
      }
    }
  }
`
