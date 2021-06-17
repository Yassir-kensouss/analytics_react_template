import React,{useRef} from 'react'
import {ThemeProvider} from 'styled-components';
import { theme } from '../../data/theme_data';
import {useIntersection} from 'react-use';
import {gsap , Power4} from 'gsap';


/* Import images */
import PlaningIcon from '../../images/planing-icon.png';
import ComputerIcon from '../../images/computer-icon.png';
import SpeedIcon from '../../images/speed-icon.png';


/* import components */
import {FeaturesContainer,FeatureWrap,Heading,Desc,FeaturesGrid,FeatureItem,FeatureIcon,FeatureContent,FeatureTitle,FeatureDesc} from './FeaturesElements';


const Feature = () => {

  // Ref for our element
  const sectionRef = useRef(null);
  // All the ref to be observed
  const intersection = useIntersection(sectionRef, {
    root: null,
    rootMargin: "0px",
    threshold: 0.2
  });

  // Animation for fading in
  const fadeIn = element => {
    gsap.to(element, 1, {
      opacity: 1,
      y: -60,
      ease: "power4.out",
      stagger: {
        amount: 1
      }
    });
  };
  // Animation for fading out
  const fadeOut = element => {
    gsap.to(element, 1, {
      opacity: 0,
      y: -20,
      ease: "power4.out"
    });
  };

  // checking to see when the vieport is visible to the user
  intersection && intersection.intersectionRatio < 0.2
    ? fadeOut(".fadeIn")
    : fadeIn(".fadeIn");



  return (
    <ThemeProvider theme={theme}>
      <FeaturesContainer id="features" ref={sectionRef}>
      <FeatureWrap>
        <Heading className="fadeIn">Main Features</Heading>
        <Desc className="fadeIn">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, corrupti! Ipsam dicta facere placeat delectus eius nesciunt quos incidunt non fuga voluptatibus dolor eum perspiciatis, harum praesentium officia</Desc>
        <FeaturesGrid>

          <FeatureItem to="/monitoring" className="fadeIn">
            <FeatureIcon src={PlaningIcon} alt="planing icon" />
            <FeatureContent>
              <FeatureTitle>Monitoring 24/7</FeatureTitle>
              <FeatureDesc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet aut quam repellat cumque, id hic?</FeatureDesc>
            </FeatureContent>
          </FeatureItem>
          
          <FeatureItem to="/widget" className="fadeIn">
            <FeatureIcon src={ComputerIcon} alt="planing icon" />
            <FeatureContent>
              <FeatureTitle>Widget System</FeatureTitle>
              <FeatureDesc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet aut quam repellat cumque, id hic?</FeatureDesc>
            </FeatureContent>
          </FeatureItem>

          <FeatureItem to="performance" className="fadeIn">
            <FeatureIcon src={SpeedIcon} alt="planing icon" />
            <FeatureContent>
              <FeatureTitle>Best Performance</FeatureTitle>
              <FeatureDesc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet aut quam repellat cumque, id hic?</FeatureDesc>
            </FeatureContent>
          </FeatureItem>

        </FeaturesGrid>
      </FeatureWrap>
    </FeaturesContainer>
    </ThemeProvider>
  )
}

export default Feature
