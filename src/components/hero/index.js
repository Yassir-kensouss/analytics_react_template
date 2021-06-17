import React,{useEffect , useRef} from 'react';
import { theme } from '../../data/theme_data';
import { ThemeProvider } from 'styled-components';
import {Circ,TweenMax,Power4} from 'gsap';

/* Import Images */
import heroImg1 from '../../images/main-screen.png';
import heroImg2 from '../../images/chart-3.png';

/* Import Button */
import {Button} from '../Button';

/* Import Components */
import {
  HeroContainer,
  HeroWrapper,
  HeroGrid,
  LeftContent,
  ContentWrap,
  RightContent,
  ImgWrap,
  HeroImg1,
  HeroImg2 } 
  from './HeroElements';

const Hero = () => {

  const hero_img1 = useRef(null);
  const hero_img2 = useRef(null);

  useEffect(() => {
    TweenMax.fromTo(
      ".hero-img", 
      {opacity: 0 , x : 30}, 
      {opacity: 1, x : 0, duration: 1.5, stagger: 0.2 ,ease: "power4.out"}
    );

    TweenMax.fromTo(
      ".stagger-1", 
      {opacity: 0 , y : 20}, 
      {opacity: 1, y : 0,   duration:0.3, delay: 1 , stagger: 0.1 }
    );
  },[])

  return (
    <ThemeProvider theme={theme}>
      <HeroContainer>
        <HeroWrapper>
          <HeroGrid>
            <LeftContent>
              <ContentWrap>
                <h1 className="stagger-1">Monitor your business <br/>on real-time dashboard</h1>
                <p className="stagger-1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga neque natus perspiciatis est minus magnam, molestias quae quo unde ab.</p>
                <Button full={false} className="stagger-1" >Try for free</Button>
              </ContentWrap>
            </LeftContent>
            <RightContent>
              <ImgWrap>
                <HeroImg1 className="hero-img" src={heroImg1} alt="statistics" aria-hidden="true"/>
                <HeroImg2 className="hero-img" src={heroImg2} alt="statistics" aria-hidden="true"/>
              </ImgWrap>
            </RightContent>
          </HeroGrid>
        </HeroWrapper>
      </HeroContainer>
    </ThemeProvider>
  )
}

export default Hero
