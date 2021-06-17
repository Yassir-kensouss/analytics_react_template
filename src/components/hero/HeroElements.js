import styled, { ThemeProvider } from 'styled-components';
import tw from "twin.macro";

/* Hero Bg Image */
import imgTop   from '../../images/background-top.png';

export const HeroContainer = styled.section`
  width: 100%;
  background: url(${imgTop});
  background-repeat: no-repeat; 
  background-size: 100%;
  background-position: top top;
  height: 750px;

  /* Mobile Device */

  @media screen and (max-width: 768px){
    background-size: 2000px;
    background-position: center;
    height: 900px;
  }

  /* Medium Device */

  @media screen and (min-width: 769px) and (max-width: 1024px){
    background-size: 1300px;
    background-position: top top;
  }
`;
export const HeroWrapper = styled.div`
  height: 100%;
  margin : 0 auto;

   /* Extra Large Device */

  @media screen and (min-width: 1440px){
    max-width: 1200px;
    margin : 0 auto;
  }
`;
export const HeroGrid = styled.div`

  display: grid;
  grid-template-columns: minmax(200px,650px) 1fr;
  height: 100%;
  align-items: center; 

   /* Mobile Device */

  @media screen and (max-width: 768px){
    grid-template-columns: 1fr;
    align-items: unset; 
  }

   /* Medium Device */

  @media screen and (min-width: 769px) and (max-width: 1024px){
    grid-template-columns: 1fr 1fr;
  }

`;
export const LeftContent = styled.div`
  margin-left: 90px;

  /* Mobile Device */

  @media screen and (max-width: 768px){
    order: 2;
    margin-left: 0;
  }

  /* Extra Large Device */

  @media screen and (min-width: 1440px){
    margin-left: 0;
  }
`;
export const ContentWrap = styled.div.attrs({
  className : "pr-10"
})`
  &{
    h1{
      ${tw`text-4xl font-bold text-white`}
    }
    p{
      color: ${props => props.theme.colors.secondary};
      line-height: 1.8;
      padding: 15px 0 35px 0;
    }

    /* Mobile Device */

    @media screen and (max-width: 768px){
      padding: 0 20px;
      h1{
        ${tw`text-3xl`}
      }
      p{
        padding: 15px 0 35px 0;
      }
    }

    /* Medium Device */

    @media screen and (min-width: 769px) and (max-width: 1024px){
      h1{
        ${tw`text-2xl`}
      }
    }

    /* Extra Large Device */

    @media screen and (min-width: 1440px){
      padding: 0 80px 0 0 ;
    }

  }
`;
export const RightContent = styled.div`

  /* Mobile Device */

  @media screen and (max-width : 768px){
    align-self: end;
  }

`;
export const ImgWrap = styled.div`
  position: relative;
`;

export const HeroImg1 = styled.img`
  margin-left: 80px;

  /* Mobile Device */

  @media screen and (max-width: 768px){
    margin-left: 0;
  }

  /* Extra Large Device */

  @media screen and (min-width: 1440px){
    margin-left: 0;
  }
 
`;
export const HeroImg2 = styled.img`
  position: absolute;
  top:18%;
  left: 0;

  /* Mobile Device */

  @media screen and (max-width: 768px){
    display: none;
  }

  /* Extra Large Device */

  @media screen and (min-width: 1440px){
    width: 60%;
    top:20%;
    left: -10%;
  }

  /* Medium Device */

  @media screen and (min-width: 769px){
    width: 60%;
  }
`;
