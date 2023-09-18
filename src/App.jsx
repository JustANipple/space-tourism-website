import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'
import Home from './components/Home/Home';
import data from "./data.json"
import Destination from './components/Destination/Destination';
import Crew from './components/Crew/Crew';
import Technology from './components/Technology/Technology';

function App() {

  /* Setting body background based on the page and the window width */
  const backgrounds = [
    {
      name: "home",
      bgs: ["background-home-mobile.jpg", "background-home-tablet.jpg", "background-home-desktop.jpg"]
    },
    {
      name: "destination",
      bgs: ["background-destination-mobile.jpg", "background-destination-tablet.jpg", "background-destination-desktop.jpg"]
    },
    {
      name: "crew",
      bgs: ["background-crew-mobile.jpg", "background-crew-tablet.jpg", "background-crew-desktop.jpg"]
    },
    {
      name: "technology",
      bgs: ["background-technology-mobile.jpg", "background-technology-tablet.jpg", "background-technology-desktop.jpg"]
    },
  ]

  const [background, setBackground] = useState(0);

  const windowWidth = window.innerWidth;
  let currentBackground;
  if(windowWidth < 768) {
    currentBackground = backgrounds[background].bgs[0];
  } else if (windowWidth < 1024) {
    currentBackground = backgrounds[background].bgs[1];
  } else {
    currentBackground = backgrounds[background].bgs[2];
  }
  
  document.body.style.backgroundImage = `url(src/assets/${backgrounds[background].name}/${currentBackground})`;

  const [menu, setMenu] = useState(false);
  const [option, setOption] = useState(0);

  return (
    <>
      <Header 
        logoSource="images/shared/logo.svg"
        hamburgerSource="images/shared/icon-hamburger.svg"
        closeSource="images/shared/icon-close.svg"
        menu={menu}
        setMenu={setMenu}
      >
        <Nav 
          menu={menu}
          setMenu={setMenu}
          option={option}
          setOption={setOption}
          setBackground={setBackground}
        />
      </Header>
      {option === 0 ? <Home setOption={setOption}/> : ""}
      {option === 1 ? <Destination data={data} /> : ""}
      {option === 2 ? <Crew  data={data} /> : ""}
      {option === 3 ? <Technology data={data} /> : ""}
    </>
  )
}

export default App
