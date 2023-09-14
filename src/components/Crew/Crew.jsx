import { useState } from "react"
import styles from "./Crew.module.css"

// eslint-disable-next-line react/prop-types
const Crew = ({data}) => {

    const [crew, setCrew] = useState(0);

    function handleClick(index) {
        setCrew(index);
    }

  return (
    <main className={styles.main}>
        <p className={styles.appendix}> <span>02</span> meet your crew</p>
        <picture className={styles.picture}>
            {/* eslint-disable-next-line react/prop-types */}
            <source srcSet={data.crew[crew].images.webp}/>
            {/* eslint-disable-next-line react/prop-types */}
            <img src={data.crew[crew].images.png} alt="crew image"/>
        </picture>
        <hr />
        <div className={styles.content}>
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
        </div>
    </main>
  )
}

export default Crew