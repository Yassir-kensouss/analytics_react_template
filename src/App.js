import react,{useState,useRef } from 'react';
import styled from 'styled-components';
import Navbar from "./components/Navbar";
import {BrowserRouter as Router , Switch , Route}
from 'react-router-dom';
import { GlobalStyle } from "./components/GlobalStyles";
import Dropdown from "./components/dropDown";
import Hero from './components/hero';
import Feature from './components/features';
import InfoSection from './components/infos';
import { first_info,second_info,third_info } from './components/infos/infos_data';
import Pricing from './components/pricing';
import Footer from './components/footer';

const Smooth = styled.div``;
 
function App() {

  const [isOpen , setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  }  

  return (
    <Router>
      <div id="smooth">
        <GlobalStyle/>
        <Navbar toggle={toggle} />
        <Dropdown isOpen={isOpen} toggle={toggle}/>
        <Hero/>
        <Feature/>
        <InfoSection {...first_info}/>
        <InfoSection {...second_info}/>
        <InfoSection {...third_info}/>
        <div className="bottom-bg">
          <Pricing/>
          <Footer/>
        </div>
      </div>
    </Router>
  );
}

export default App;
