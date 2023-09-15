import { useState } from "react"
import styles from "./Technology.module.css"

// eslint-disable-next-line react/prop-types
const Technology = ({data}) => {

    const [technology, setTechnology] = useState(0);

    function handleClick(index) {
        setTechnology(index);
    }

    return (
        <main className={styles.main}>
            <p className={styles.appendix}> <span>03</span> space launch 101</p>
            <div className={styles.wrapper}>
                <picture className={styles.picture}>
                    <source 
                        // eslint-disable-next-line react/prop-types
                        srcSet={data.technology[technology].images.portrait}
                        media="(min-width: 1024px)"
                    />
                    <img 
                        // eslint-disable-next-line react/prop-types
                        src={data.technology[technology].images.landscape} 
                        alt="space launch"/>
                </picture>
                <div className={styles.content}>
                    <div className={styles.selectors}>
                        {/* eslint-disable-next-line react/prop-types */}
                        {data.technology.map((tech, index) => {
                            return (
                                <button
                                    key={index}
                                    aria-label={tech.name}
                                    onClick={() => handleClick(index)}
                                    className={technology === index ? styles.current : ""}
                                >
                                    {index + 1}</button>
                            )
                        })}
                    </div>
                    <div className={styles.terminology}>
                        <p className={styles.subtitle}>the terminology...</p>
                        {/* eslint-disable-next-line react/prop-types */}
                        <h1 className={styles.title}>{data.technology[technology].name}</h1>
                        {/* eslint-disable-next-line react/prop-types */}
                        <p className={styles.description}>{data.technology[technology].description}</p>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Technology