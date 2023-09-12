import { useState } from "react";
import styles from "./Nav.module.css"

// eslint-disable-next-line react/prop-types
const Nav = ({menu, setMenu, option, setOption}) => {

    

    function handleClick(index) {
        setMenu(!menu);
        setOption(index);
    }

    const options = [
        {number: "00", option: "home"},
        {number: "01", option: "destination"},
        {number: "02", option: "crew"},
        {number: "03", option: "technology"}
    ];

  return (
    <nav className={`${styles.nav} ${!menu ? styles.closed : ""}`}>
        <ol className={styles.nav_options}>
            {options.map((opt, index) => {
                return (
                    <li key={index}> 
                        <a 
                            href="#" 
                            onClick={() => handleClick(index)} 
                            className={index === option ? styles.current : ""}> 
                            <span>{opt.number}</span> {opt.option}
                        </a> 
                    </li>
                )
            })}
        </ol>
    </nav>
  )
}

export default Nav