import { useState } from "react"
import styles from "./Technology.module.css"
import { motion } from "framer-motion"

// eslint-disable-next-line react/prop-types
const Technology = ({data}) => {

    const [technology, setTechnology] = useState(0);

    function handleClick(index) {
        setTechnology(index);
    }

    return (
        <main className={styles.main}>
            <motion.p 
                className={styles.appendix}
                animate={{ opacity: [0, 1] }}
                transition={{ duration: 1 }}
            > 
                <span>03</span> space launch 101
            </motion.p>
            <div className={styles.wrapper}>
                <motion.picture 
                    className={styles.picture}
                    animate={{ y: [-100, 0], opacity: [0, 1] }}
                    transition={{ duration: 1 }}
                >
                    <source 
                        // eslint-disable-next-line react/prop-types
                        srcSet={data.technology[technology].images.portrait}
                        media="(min-width: 1024px)"
                    />
                    <img 
                        // eslint-disable-next-line react/prop-types
                        src={data.technology[technology].images.landscape} 
                        alt="space launch"/>
                </motion.picture>
                <div className={styles.content}>
                    <div className={styles.selectors}>
                        {/* eslint-disable-next-line react/prop-types */}
                        {data.technology.map((tech, index) => {
                            return (
                                <motion.button
                                    key={index}
                                    aria-label={tech.name}
                                    onClick={() => handleClick(index)}
                                    className={technology === index ? styles.current : ""}
                                    transition={{ delay: .125 * index }}
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                >
                                    {index + 1}
                                </motion.button>
                            )
                        })}
                    </div>
                    <motion.div 
                        className={styles.terminology}
                        animate={{ y: [100, 0], opacity: [0, 1] }}
                        transition={{ duration: 1 }}
                    >
                        <p className={styles.subtitle}>the terminology...</p>
                        {/* eslint-disable-next-line react/prop-types */}
                        <h1 className={styles.title}>{data.technology[technology].name}</h1>
                        {/* eslint-disable-next-line react/prop-types */}
                        <p className={styles.description}>{data.technology[technology].description}</p>
                    </motion.div>
                </div>
            </div>
        </main>
    )
}

export default Technology