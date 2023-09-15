import { useState } from "react"
import styles from "./Crew.module.css"
import { motion } from "framer-motion"

// eslint-disable-next-line react/prop-types
const Crew = ({data}) => {

    const [crew, setCrew] = useState(0);

    function handleClick(index) {
        setCrew(index);
    }

  return (
    <main className={styles.main}>
        <motion.p 
            className={styles.appendix}
            animate={{ opacity: [0, 1] }}
            transition={{ duration: 1 }}            
        > <span>02</span> meet your crew
        </motion.p>
        <motion.picture 
            className={styles.picture}
            animate={{ x: [100, 0], opacity: [0, 1] }}
            transition={{ duration: 1 }}
        >
            {/* eslint-disable-next-line react/prop-types */}
            <source srcSet={data.crew[crew].images.webp}/>
            {/* eslint-disable-next-line react/prop-types */}
            <img src={data.crew[crew].images.png} alt="crew image"/>
        </motion.picture>
        <hr className={styles.divisor}/>
        <motion.div 
            className={styles.content}
            animate={{ x: [-100, 0], opacity: [0, 1] }}
            transition={{ duration: 1 }}
        >
            <div className={styles.selectors}>
                {/* eslint-disable-next-line react/prop-types */}
                {data.crew.map((member, index) => {
                    return (
                        <button 
                            key={index}
                            onClick={() => handleClick(index)}
                            aria-label={member.name}
                            className={index === crew ? styles.current : ""}
                        ></button>
                    )
                })}
            </div>
            <div className={styles.info}>
                {/* eslint-disable-next-line react/prop-types */}
                <p className={styles.role}>{data.crew[crew].role}</p>
                {/* eslint-disable-next-line react/prop-types */}
                <h1 className={styles.name}>{data.crew[crew].name}</h1>
                {/* eslint-disable-next-line react/prop-types */}
                <p className={styles.bio}>{data.crew[crew].bio}</p>
            </div>
        </motion.div>
    </main>
  )
}

export default Crew