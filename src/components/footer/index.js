import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../data/theme_data';
import {animateScroll as scroll} from 'react-scroll';


// Import logo img
import footerLogo from '../../images/footer-logo.png'

// Import Social Icons
import {ImFacebook,ImTwitter} from 'react-icons/im';
import {FiInstagram} from 'react-icons/fi';

// Import Components styles 
import {
  FooterContainer,
  FooterWrapper,
  ItemsGrid,
  Logo,
  LogoImg,
  NavMenu,
  NavLink,
  SocialMedia,
  Facebook,
  Instagram,
  Twitter,
} 
from './FooterElements';

const Footer = () => {

  // scroll to top
  const scrollTo = (e) => {
    e.preventDefault();
    scroll.scrollToTop();
  }


  return (
    <ThemeProvider theme={theme}>
      <FooterContainer>
        <FooterWrapper>
          <ItemsGrid>
            <Logo to="/" onClick={scrollTo}>
              <LogoImg src={footerLogo} alt="analytics logo"/>
            </Logo>
            <NavMenu >
              <nav>
                <ul>
                  <li>
                    <NavLink>Product</NavLink>
                  </li>
                  <li>
                    <NavLink>Pricing</NavLink>
                  </li>
                  <li>
                    <NavLink>FAQ</NavLink>
                  </li>
                  <li>
                    <NavLink>Blog</NavLink>
                  </li>
                </ul>
              </nav>
            </NavMenu>
            <SocialMedia>
              <Facebook to="https://web.facebook.com/yassir.kensouss/" target="_blank">
                <ImFacebook/>
              </Facebook>
              <Twitter to="https://twitter.com/kensoussyassir" target="_blank">
                <ImTwitter/>
              </Twitter>
              <Instagram to="www.instagram.com" target="_blank">
                <FiInstagram/>
              </Instagram>
            </SocialMedia>
          </ItemsGrid>
        </FooterWrapper>
      </FooterContainer>
    </ThemeProvider>
  )
}

export default Footer
