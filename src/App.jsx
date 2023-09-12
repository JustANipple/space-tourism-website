import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'

function App() {

  const [menu, setMenu] = useState(false);

  return (
    <>
      <Header 
        logoSource="src/assets/shared/logo.svg"
        hamburgerSource="src/assets/shared/icon-hamburger.svg"
        closeSource="src/assets/shared/icon-close.svg"
        menu={menu}
        setMenu={setMenu}
      >
        <Nav 
          menu={menu}
        />
      </Header>
    </>
  )
}

export default App
