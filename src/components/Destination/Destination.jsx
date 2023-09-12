import { useState } from "react"
import styles from "./Destination.module.css"

// eslint-disable-next-line react/prop-types
const Destination = ({data}) => {

    const [planet, setPlanet] = useState(0);

  return (
    <main>
        <p> <span>01</span> pick your destination</p>
        <picture>
            <source srcSet={data.destinations[planet].images.webp}/>
            <img src={data.destinations[planet].images.png} alt="planet image" />
        </picture>
    </main>
  )
}

export default Destination