import styled from 'styled-components';

import React from 'react'
import { Button } from '../Button';

export const CardContainer = styled.li``;
export const CardWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 300px;
  max-width: 270px;
  padding: 50px 40px;
  border-radius: 20px;
  margin: 40px auto;
  transition: 0.2s ease-in-out;
  background-color : ${({darkBg}) => (darkBg ? props => props.theme.colors.cardBlue : "white")};
  &:hover{
    box-shadow: -1px -1px 39px -14px rgba(229,229,229,0.3);
    transform: translateY(-10px);
  }
`;
export const CradHeader = styled.header`
`;
export const CardHeading = styled.h3`
  color : ${({darkBg}) => (darkBg ? "white" : props => props.theme.colors.primary)};
  text-transform: capitalize;
  font-size: 23px;
  font-weight : 600;
`;
export const CardDesc = styled.p`
  color : ${props => props.theme.colors.secondary};
  font-size: 14px;
`;
export const CardContent = styled.div``;
export const Price = styled.p`
  color : ${({darkBg}) => (darkBg ? "white" : props => props.theme.colors.primary)};
  font-size: 35px;
  font-weight : 500;
`;
export const Duration = styled.p`
  color : ${props => props.theme.colors.secondary};
  font-size: 14px;
  margin : 0 0 30px 0;
`;
export const Divider = styled.div`
  width: 100%;
  height: 0.5px;
  background-color: ${props => props.theme.colors.secondary};
  opacity: 0.5;
  margin: 20px 0;
`;

const PricingCard = ({type,desc,price,duration,darkBg}) => {
  return (
    <CardContainer>
      <CardWrap darkBg={darkBg}>
        <CradHeader>
          <CardHeading darkBg={darkBg}>
            {type}
          </CardHeading>
          <CardDesc darkBg={darkBg}>
            {desc}
          </CardDesc>
        </CradHeader>
        <Divider></Divider>
        <CardContent>
          <Price darkBg={darkBg}>
            {price}
          </Price>
          <Duration>
            {duration}
          </Duration>
        </CardContent>
        {
          darkBg 
          ? (<Button transp bordered>Order</Button>) 
          : (<Button >Order</Button>)
        }
      </CardWrap>
    </CardContainer>
  )
}

export default PricingCard
