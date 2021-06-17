import React from 'react';
import {ThemeProvider} from 'styled-components';
import { theme } from '../../data/theme_data';


/* Import Component styles */
import {
  InfoContainer,
  InfoWrapper,
  InfoGrid,
  ContentGrid,
  InfoHeading,
  InfoDesc,
  ImgGrid,
  InfoImg
} from './InfoElements';


const InfoSection = ({title,desc,img,alt,imgStart}) => {

  return (
    <ThemeProvider theme={theme}>
      <InfoContainer id="products">
        <InfoWrapper >
          <InfoGrid imgStart={imgStart} >
            <ContentGrid imgStart={imgStart}>
              <InfoHeading >
                {title}
              </InfoHeading>
              <InfoDesc >
                {desc}  
              </InfoDesc>
            </ContentGrid>    
            <ImgGrid >
              <InfoImg src={img} alt={alt}/>
            </ImgGrid>
          </InfoGrid>
        </InfoWrapper>
      </InfoContainer>
    </ThemeProvider>
  )
}

export default InfoSection
