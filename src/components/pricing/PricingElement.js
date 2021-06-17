import tw from "twin.macro";
import styled from 'styled-components';

export const PricingContainer = styled.section``;
export const PricingWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;
export const PHeading = styled.h2`
  text-align: center;
  font-size: ${props => props.theme.fontSize.h2};
  font-weight: 600;
  color: #f5f5f5;

  @media screen and (max-width: 768px){
    text-align: left;
    padding: 20px;
  }
`;
export const PDesc = styled.p`
  max-width: 1060px;
  margin: 30px auto;
  padding: 0 220px;
  text-align: center;
  line-height: 1.8;
  color: ${props => props.theme.colors.secondary};

  @media screen and (max-width: 768px){
    text-align: left;
    padding: 20px;
  }
`;
export const PlandWrap = styled.ul`
  display: flex;
  justify-content: space-evenly;

  @media screen and (max-width: 768px){
    display: none;
  }

`;
export const PlansWrapMobile = styled.div`
  display: none;

  @media screen and (max-width: 768px){
    display: block;
  }
`;

export const PringCardWrap = styled.div``;