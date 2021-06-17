import styled from 'styled-components';
import {Link} from 'react-router-dom';
import tw from "twin.macro";

export const DropdownContainer = styled.div.attrs({
  className : "w-full h-screen fixed -top-full opacity-0"
})`

  top: ${({isOpen}) => (isOpen ? '0' : '-100%')};
  opacity : ${({isOpen}) => (isOpen ? '1' : '0')};
  transition: 0.3s cubic-bezier(0.65, 0.02, 0.04, 1.09);
  background-color: rgba(23,39,85,1);
  z-index: 999;
  

`;

export const TimesIcon = styled.button.attrs({
  className : "text-white text-2xl absolute top-8 right-5 transition duration-200 ease-in-out"
})`
  &:hover{
    transform: translateX(-8px);
    color : ${props => props.theme.colors.red}
  }
`;

export const DropdownWrap = styled.div.attrs({
  className : "flex justify-center items-center h-full flex-col text-center relative"
})``;
export const DropdownMenu = styled.div`
  &{
    li{
      ${tw`my-7`}
      color : #fff;
      transition: 0.10s ease-in-out;
      position: relative;

      &::before{  
      content: "";
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: ${props => props.theme.colors.red};
      position: absolute;
      top: 30%;
      left: -20%;
      transition: 0.2s ease-in-out;
      transform-origin: center center;
      transform: scale(0);

    }

      &:hover{
        color : ${props => props.theme.colors.red};

        &::before{
          transform: scale(1);
        }
      }
    }
  }
`;
export const DropdownLink = styled(Link)``;
export const SignButton = styled.div``;