import styles from "./Header.module.css"

// eslint-disable-next-line react/prop-types
const Header = ({menu, setMenu, logoSource, hamburgerSource, closeSource, children}) => {

    function handleClick() {
        setMenu(!menu);
    }

  return (
    <>
        <header className={styles.header}>
            <img 
                src={logoSource}
                alt="logo"
                className={styles.logo}
            />
            <hr />
            <button 
                className={styles.menu_icon}
                onClick={handleClick}    
            >
                <img 
                    src={menu ? closeSource : hamburgerSource} 
                    alt="hamburger"
                />
            </button>
            {children}
        </header>
    </>
  )
}

export default Header