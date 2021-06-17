import styled from 'styled-components';
import {Link as LinkR} from 'react-router-dom';
import {Link as LinkS} from 'react-scroll';
import tw from "twin.macro";
import {theme} from '../../data/theme_data';

export const NavbarContainer = styled.header.attrs({
  className: "w-full fixed top-0 h-20 flex items-center shadow-xl",
})`
  background-color: ${({navBg}) => (navBg ? theme.colors.darkBlue : 'transparent')};
  color : ${props => props.theme.colors.secondary};
  transition: 0.3s ease-in;
  z-index: 1;

  @media screen and (max-width: 768px){
    background-color: ${props => props.theme.colors.darkBlue};
  }
`;

export const NavbarGrid = styled.div.attrs({
  className : "w-full grid grid-cols-2 items-center h-full"
})`
  max-width: 1200px;
  margin: 0 auto;
  font-size: 15px;

  @media screen and (max-width: 768px){
    padding: 0 20px;
  }

  @media screen and (min-width: 768px) and (max-width: 1287px){
    grid-template-columns: 1fr 1fr;
    padding: 0 90px;
  }

  @media screen and (min-width: 1287px){
    grid-template-columns: 1fr 1fr 1fr ;
  }

`;

export const LogoWrap = styled.div``;
export const Logo = styled.img`
  width : 184px;
`;
export const NavMenuWrap = styled.div.attrs({
  className : "h-full"
})`

  &{
    nav{
      height: 100% ;
      ul{
        ${tw`flex h-full`}
      }
      li{
        padding: 0 15px;  
        display: flex;
        align-items:center;
        position: relative;
        cursor:pointer;
        transition: 0.2s ease-in-out;
        &:hover{
          a{
            color: #fff;
            transition : 0.15s ease-in;
          }
        }
        
      }
    } 
  }

  @media screen and (max-width: 768px){
    display : none;
  }

  @media screen and (min-width: 768px) and (max-width: 1287px){
    display: none;
  }

`;
export const NavLink = styled(LinkS)`
  transition: 0.2s ease-in-out;
  &::before{
    content: "";
    position: absolute;
    top: 47%;
    left: 0;
    background-color : ${props => props.theme.colors.red};
    width: 6px;
    height: 6px;
    border-radius: 50%;
    transition: 0.2s ease-in-out;
    transform: scale(0);
  }
  &.active {
    &::before{
      transform: scale(1);
    }

    color : ${props => props.theme.colors.red};
  }
`;


export const HumbergerIcon = styled.div.attrs({
  className : "md:hidden cursor-pointer"
})`
  &{
    div {
      width: 35px;
      height: 3px;
      margin-bottom: 8px;
      background-color: ${props => props.theme.colors.secondary} ;
    }
    div:last-child{
      margin-bottom: 0;
    }

    @media screen and (min-width: 768px) and (max-width: 1287px){
      display: block;
    }

  }
`;

export const SignBtn1 = styled.div`
  padding: 0 20px;
`;
export const SignBtn2 = styled.div`
  @media screen and (max-width: 768px){
    display: none;
  }

  @media screen and (min-width: 768px) and (max-width: 1287px){
    display: none;
  }
`;
export const MobileItem = styled.div.attrs({
  className : "flex justify-self-end items-center"
})``;