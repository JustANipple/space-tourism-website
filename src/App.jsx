import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'
import Home from './components/Home/Home';
import data from "../public/data.json"
import Destination from './components/Destination/Destination';

function App() {

  const [menu, setMenu] = useState(false);
  const [option, setOption] = useState(0);

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
          setMenu={setMenu}
          option={option}
          setOption={setOption}
        />
      </Header>
      {option === 0 ? <Home /> : ""}
      <Destination 
        data={data}
      />
      
    </>
  )
}

export default App
