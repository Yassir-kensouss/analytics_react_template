import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const FooterContainer = styled.div`
padding: 20px 0 40px 0;
`;
export const FooterWrapper = styled.div`
margin: 0 auto;
max-width: 1200px;

@media screen and (max-width: 768px){
  padding: 0 20px;
}
`;
export const ItemsGrid = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr;

@media screen and (max-width: 768px){
  grid-template-columns: 1fr 1fr;
}
`;
export const Logo = styled(Link)``;
export const LogoImg = styled.img`
width: 138px;
max-width: 138px;
`;
export const NavMenu = styled.div`
justify-self: center;
ul{
  display: flex;
}

li{
  margin: 0 20px;
  color : ${props => props.theme.colors.secondary};
  font-size: 15px;
  transition: 0.2s ease-in-out;

  &:hover{
    color : ${props => props.theme.colors.red};
    transform: translateY(-3px)
  }
}

@media screen and (max-width: 768px){
  display: none;
}
`;
export const NavLink = styled(Link)``;
export const SocialMedia = styled.div`
display: flex;
color : ${props => props.theme.colors.secondary};
justify-self: end;
`;
export const Facebook = styled(Link)`
margin-left: 20px;
transition : 0.2s ease-in-out;

&:hover{
  color : ${props => props.theme.colors.red};
  transform: translateY(-3px)
}

`;
export const Twitter = styled(Link)`
margin-left: 20px;
transition : 0.2s ease-in-out;

&:hover{
  color : ${props => props.theme.colors.red};
  transform: translateY(-3px)
}

`;
export const Instagram = styled(Link)`
margin-left: 20px;
transition : 0.2s ease-in-out;

&:hover{
  color : ${props => props.theme.colors.red};
  transform: translateY(-3px)
}

`;