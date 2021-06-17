import React,{useRef} from 'react'
import styled, { ThemeProvider } from 'styled-components';
import { theme } from '../../data/theme_data';
import {gsap, Power4} from 'gsap';
import {useIntersection} from 'react-use';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper-bundle.min.css';

// Import Plans Data
import {starter,standard,premium} from './card_data';
import PricingCard, { Divider } from './PricingCard';

// Import Components styles

import {
  PricingContainer,
  PricingWrapper,
  PHeading,PDesc,
  PlandWrap,
  PlansWrapMobile,
  PringCardWrap
} from './PricingElement';


const Pricing = () => {

  // Swipper Breakpoints

  const breakpoints = {

    // when window width is >= 280px
    280: {
      slidesPerView: 1,
      spaceBetween: 150  
    },

    // when window width is >= 375px
    375: {
      slidesPerView: 1,
      spaceBetween: -80  
    },

    // when window width is >= 375px
    425: {
      slidesPerView: 1,
      spaceBetween: -120  
    },

    // when window width is >= 768px
    768: {
      slidesPerView:2,
      spaceBetween: -100
    },

  }

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
      <PricingContainer id="pricing" ref={sectionRef}>
        <PricingWrapper>
          <PHeading className="fadeIn">
            Pricing Plans
          </PHeading>
          <PDesc className="fadeIn">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat quasi hic ratione sint, laborum aperiam minus fugit ad velit?
          </PDesc>
          <PlandWrap>
            <PringCardWrap className="fadeIn">
              <PricingCard {...starter} />
            </PringCardWrap>
            <PringCardWrap className="fadeIn">
              <PricingCard {...standard} />
            </PringCardWrap>
            <PringCardWrap className="fadeIn">
              <PricingCard {...premium} />
            </PringCardWrap>
          </PlandWrap>
          <PlansWrapMobile>
            <Swiper
              tag="section"
              wrapperTag="ul"
              spaceBetween={-150}
              slidesPerView={1}
              breakpoints={breakpoints}
            >
              <SwiperSlide tag="li">
                <PricingCard {...starter}/>
              </SwiperSlide>
              <SwiperSlide tag="li">
                <PricingCard {...standard}/>
              </SwiperSlide>
              <SwiperSlide tag="li">
                <PricingCard {...premium}/>
              </SwiperSlide>
            </Swiper>
          </PlansWrapMobile>
          <Divider/>
        </PricingWrapper>
      </PricingContainer>
    </ThemeProvider>
  )
}

export default Pricing
