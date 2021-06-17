import styled from 'styled-components';
import tw from "twin.macro";
import {Link} from 'react-router-dom';

export const FeaturesContainer = styled.section`
  min-height: 80vh;
  display : flex;
  align-items: center;

  @media screen and (min-width: 2560px){
    min-height: 30vh;
  }
`;
export const FeatureWrap = styled.div`
  max-width: 1200px;
  margin: 0 auto;

  /* Mobile */

  @media screen and (max-width: 768px){
    padding: 0 20px;
  }

  /* Medium */

  @media screen and (min-width: 769px) and (max-width: 1024px){
    padding: 0 58px;
  }
`;
export const Heading = styled.h2`
  text-align: center;
  font-size: ${props => props.theme.fontSize.h2};
  font-weight: 600;
  color : ${props => props.theme.colors.primary};

  @media screen and (max-width: 768px){
    text-align: left;
  }
`;
export const Desc = styled.p`
  text-align: center;
  line-height: 1.8;
  color: ${props => props.theme.colors.secondary};
  padding: 20px 20px;
  width: 100%;
  max-width: 880px;
  margin: 0 auto;

  @media screen and (max-width: 768px){
    text-align: left;
    padding: 20px 20px 20px 0;
  }
`;
export const FeaturesGrid = styled.div`
  display : flex;
  justify-content: space-between;
  margin: 40px 0 20px 0;
  gap: 20px;

  @media screen and (max-width: 768px){
    flex-direction: column;
  }
`;

export const FeatureTitle = styled.h3`
  margin: 20px 0;
  font-size: ${props => props.theme.fontSize.h3};
  font-weight: 600;
  color: ${props => props.theme.colors.primary};

  @media screen and (max-width: 768px){
    margin: 0 0 10px 0;
  }
`;

export const FeatureItem = styled(Link)`
  display: grid;
  grid-template-columns: 1fr;
  text-align: center;
  place-items: center;
  transition: 0.2s ease-out;
  border-radius: 20px;
  padding: 20px;
  &:hover{
    ${tw`shadow-xl`};
    transform : translateY(-10px);
  }

  @media screen and (max-width: 768px){
    grid-template-columns: 80px 1fr;
    text-align: left;
    align-items: flex-start;
  }
`;
export const FeatureIcon = styled.img`
  width: 60px;

  @media screen and (max-width: 768px){
    margin: 0 20px 0 0;
  }
`;

export const FeatureDesc = styled.p`
  color: ${props => props.theme.colors.secondary};
  line-height: 1.8;
`;

export const FeatureContent = styled.div`
  
`;