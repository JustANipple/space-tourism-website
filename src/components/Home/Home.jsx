import styles from "./Home.module.css"

const Home = () => {
  return (
    <main className={styles.main}>
        <div className={styles.intro}>
            <p className={styles.appendix}>so, you want to travel to</p>
            <h1 className={styles.title}>space</h1>
            <p className={styles.paragraph}>
                Let's face it, if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we'll give you a truly out of this world experience!
            </p>
        </div>
        <button className={styles.explore_button}>
            <p className={styles.explore_text}>explore</p>
        </button>
    </main>
  )
}

export default Home