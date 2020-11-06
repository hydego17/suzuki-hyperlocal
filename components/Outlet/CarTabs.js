import { useState } from "react"
import styled from "@emotion/styled"
import Link from "next/link"

import { motion } from "framer-motion"
import { fade, fadeInUp } from "components/animation"
import data from "data/db.json"

export default function CarOutlet() {
  const { PassengerCar, CommercialCar } = data
  const [cars, setCars] = useState(PassengerCar)

  return (
    <TabsTyled>
      <motion.div variants={fade} className="banner">
        <motion.h4 variants={fadeInUp}>
          Temukan Mobil Suzuki yang tepat untuk Anda
        </motion.h4>
      </motion.div>
      <div className="selector">
        <a
          className={cars === PassengerCar ? "active" : ""}
          onClick={() => setCars(PassengerCar)}
        >
          Passenger Car
        </a>
        <a
          className={cars === CommercialCar ? "active" : ""}
          onClick={() => setCars(CommercialCar)}
        >
          Commercial Car
        </a>
      </div>
      <ul>
        {cars.map((item) => (
          <Link key={item.id} href="/xl-7">
            <a>
              <li>
                <div className="car_image">
                  <img src={`images/CarsTab/${item.gambar}`} alt="" />
                </div>
                <div className="car_info">
                  <h5>{item.mobil}</h5>
                  <small>Mulai dari</small>
                  <p>{item.harga}</p>
                  <p className="label">Lihat Detail</p>
                </div>
              </li>
            </a>
          </Link>
        ))}
      </ul>

      <a className="link_primary" href="#">
        Lihat Semua Mobil
      </a>
    </TabsTyled>
  )
}

const TabsTyled = styled.div`
  display: flex;
  flex-direction: column;
  .banner {
    padding: 1rem;
    height: 150px;
  }

  .selector {
    display: flex;
    background-color: ${({ theme }) => theme.colors.primary};
    color: white;
    box-shadow: 0 10px 10px -6px rgba(0, 0, 0, 0.2);

    a {
      font-size: 1.2rem;
      width: 50%;
      display: block;
      text-align: center;
      padding: 0.5rem 1rem;
      cursor: pointer;

      &.active {
        color: inherit;
        border-bottom: 5px solid white;
      }
    }
  }

  ul {
    li {
      align-items: center;
      display: flex;
      padding: 2rem 1.5rem;
      border-bottom: 1px solid #eeeaea;

      img {
        max-width: 100%;
      }
    }
  }
  h5 {
    font-size: 1rem;
  }
  .car_image {
    width: 50%;
    padding-right: 10px;
  }

  .link_primary {
    margin: 1rem auto;
  }
`
