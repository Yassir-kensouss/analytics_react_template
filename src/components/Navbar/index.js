import React,{useState , useEffect} from 'react';
import { ThemeProvider } from 'styled-components';
import {theme} from '../../data/theme_data';
import {animateScroll as scroll} from 'react-scroll';

/* Images */
import logoImg from '../../images/header-logo.png';

/* Components */
import {NavbarContainer,NavbarGrid,LogoWrap,Logo,NavMenuWrap,MobileItem,SignBtn1,SignBtn2,HumbergerIcon,NavLink} from './NavbarElements';

import {Button} from '../Button';

const Navbar = ({toggle}) => {

  const [navBg , setNavBg] = useState(false);

  const changeNavBg = () => {

    if(window.scrollY >= 100){
      setNavBg(true)
    }else {
      setNavBg(false)
    }

  }

  useEffect(() => {
    window.addEventListener('scroll' , changeNavBg);
  },[])

  // scroll to top
  const scrollTo = (e) => {
    e.preventDefault();
    scroll.scrollToTop();
  }

  return (
    <ThemeProvider theme={theme}>
      <NavbarContainer navBg={navBg}>
          <NavbarGrid>
            <LogoWrap>
              <a href="/" onClick={scrollTo}>
                <Logo src={logoImg} alt="analytics" title="analytics logo" />
              </a>
            </LogoWrap>
            <NavMenuWrap>
              <nav>
                <ul>
                  <li>
                    <NavLink 
                      to="features" 
                      smooth={true}
                      duration={800}
                      spy={true}
                      exact="true"
                    >Features</NavLink>
                  </li>
                  <li>
                    <NavLink to="products"
                    smooth={true}
                    duration={800}
                    spy={true}
                    exact="true"
                    >Products</NavLink>
                  </li>
                  <li>
                    <NavLink 
                    to="pricing" 
                    smooth={true}
                    duration={800}
                    spy={true}
                    exact="true"
                    >Pricing</NavLink>
                  </li>
                  <li>
                    <NavLink to="blog" >Blog</NavLink>
                  </li>
                  <li>
                    <NavLink to="faq" >FAQ</NavLink>
                  </li>
                </ul>
              </nav>
            </NavMenuWrap>
            <MobileItem>
              <SignBtn1>
                <Button to="/signin" transp={true} bordered={false} sec={true} noPadding={true}>Sign In</Button>
              </SignBtn1>
              <SignBtn2>
                <Button to="/signup" transp={true} bordered={true} sec={true} noPadding={false}>Sign Up</Button>
              </SignBtn2>
              <HumbergerIcon role="button" aria-label="show dropdown menu" onClick={toggle}>
                <div></div>
                <div></div>
                <div></div>
              </HumbergerIcon>
            </MobileItem>
          </NavbarGrid>
      </NavbarContainer>
    </ThemeProvider>
  )
}

export default Navbar
