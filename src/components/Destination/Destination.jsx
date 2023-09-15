import { useState } from "react"
import styles from "./Destination.module.css"
import { motion } from "framer-motion"

// eslint-disable-next-line react/prop-types
const Destination = ({data}) => {

    const [planet, setPlanet] = useState(0);

    function handleClick(index) {
      setPlanet(index);
    }

  return (
    <main className={styles.main}>
        <motion.p 
          className={styles.appendix}
          animate={{ opacity: [0, 1] }}
          transition={{ duration: 1 }}
        > 
          <span>01</span> pick your destination
        </motion.p>
        <motion.picture 
          className={styles.picture}
          animate={{ x: [-100, 0], opacity: [0, 1] }}
          transition={{ duration: 1 }}
        >
            {/* eslint-disable-next-line react/prop-types */}
            <source srcSet={data.destinations[planet].images.webp}/>
            {/* eslint-disable-next-line react/prop-types */}
            <img src={data.destinations[planet].images.png} alt="planet image" />
        </motion.picture>
        <motion.div 
          className={styles.content}
          animate={{ x: [100, 0], opacity: [0, 1] }}
          transition={{ duration: 1 }}
        >
          <ul className={styles.list}>
            {/* eslint-disable-next-line react/prop-types */}
            {data.destinations.map((dest, index) => {
              return (
                <li key={index} className={planet === index ? styles.current : ""}>
                  <a 
                    href="#"
                    onClick={() => handleClick(index)}
                  >
                    {dest.name}
                  </a> 
                </li>
              )
            })}
          </ul>
          {/* eslint-disable-next-line react/prop-types */}
          <h1 className={styles.title}>{data.destinations[planet].name}</h1>
          {/* eslint-disable-next-line react/prop-types */}
          <p className={styles.paragraph}>{data.destinations[planet].description}</p>
          <hr />
          <div className={styles.stats}>
            <div className={styles.distance}>
              <p className={styles.distance_appendix}>Avg. distance</p>
              {/* eslint-disable-next-line react/prop-types */}
              <p className={styles.distance_value}>{data.destinations[planet].distance}</p>
            </div>
            <div className={styles.time}>
            <p className={styles.time_appendix}>Est travel time</p>
              {/* eslint-disable-next-line react/prop-types */}
              <p className={styles.time_value}>{data.destinations[planet].travel}</p>
            </div>
          </div>
        </motion.div>
    </main>
  )
}

export default Destination