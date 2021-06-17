import styled from 'styled-components';

export const InfoContainer = styled.section`
  min-height: 100vh;
  padding: 20px 0;
  display: flex;
  align-items: center;

  /* Extra large */

  @media screen and (min-width: 2560px){
    min-height: 30vh;
  }

  /* Medium */

  @media screen and (min-width: 769px) and (max-width: 1200px){
    min-height: 60vh;
  }
`;
export const InfoWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;

  /* Mobile */

  @media screen and (max-width: 768px){
    padding: 0 20px;
  }

  /* Medium */

  @media screen and (min-width: 769px) and (max-width: 1200px){
    padding: 0 58px;
  }
`;
export const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr ;
  align-items: center;
  gap: 30px;
  grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

  @media screen and (max-width: 768px){
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col1 col1''col2 col2'` : `'col1 col1''col2 col2'`)};
  }

`;
export const ContentGrid = styled.div`
  padding: ${({imgStart}) => (imgStart ? '0 0 0 90px' : '0 90px 0 0')};
  grid-area: col1;  

  @media screen and (max-width: 768px){
    padding: ${({imgStart}) => (imgStart ? '0' : '0')};
  }
`;
export const InfoHeading = styled.h2`
  font-size: ${props => props.theme.fontSize.h2};
  color: ${props => props.theme.colors.primary};
  font-weight: 600;
`;
export const InfoDesc = styled.p`
  color: ${props => props.theme.colors.secondary};
  line-height: 1.8;
  margin: 20px 0;
`;
export const ImgGrid = styled.div`
  grid-area: col2;  
`;
export const InfoImg = styled.img.attrs({
  className : "shadow-xl rounded-3xl	"
})`
`;