import styles from "./Home.module.css"
import { motion } from "framer-motion"

// eslint-disable-next-line react/prop-types
const Home = ({setOption}) => {

  function handleClick() {
    setOption(1);
  }

  return (
    <main className={styles.main}>
        <div className={styles.intro}>
            <motion.p 
              className={styles.appendix}
              animate={{ y: [-100, 10, 0], opacity: [0, 1] }}
              transition={{ duration: 1 }}
            >
              so, you want to travel to
            </motion.p>
            <motion.h1 
              className={styles.title}
              animate={{ scale: [0, 1.025, 1 ]}}
              transition={{ duration: 1, delay: .5 }}
            >
              space
            </motion.h1>
            <motion.p 
              className={styles.paragraph}
              animate={{ y: [100, -10, 0], opacity: [0, 1] }}
              transition={{ duration: 1 }}
            >
                Let's face it, if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we'll give you a truly out of this world experience!
            </motion.p>
        </div>
        <motion.button
          animate={{ opacity: [0,1] }}
          transition={{ duration: 1, delay: 1 }}
          className={styles.explore_button}
          onClick={handleClick}>
            <p className={styles.explore_text}>explore</p>
        </motion.button>
    </main>
  )
}

export default Home