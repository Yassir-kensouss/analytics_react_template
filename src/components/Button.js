import styled from 'styled-components'
import {theme} from '../data/theme_data';

export const Button = styled.button`
  color : ${({sec}) => (sec ? theme.colors.secondary : "#fff")};
  background-color: ${({transp}) => (transp ? "transparent" : theme.colors.red)};
  border : ${({bordered}) => (bordered ? `1.5px solid ${theme.colors.secondary}` : "none")};
  padding : ${({noPadding}) => (noPadding ? "8px 0px" : "8px 55px")};
  width : ${({full}) => (full ? "100%" : "max-content")};
  transition: 0.2s ease-out;
  border-radius: 50px;

  &:hover{
    background-color: ${({transp}) => (transp ? "transparent" : theme.colors.darkRed)};
    color : ${({bordered}) => (bordered ? `${theme.colors.red}` : "white")};
    border : ${({bordered}) => (bordered ? `1.5px solid ${theme.colors.red}` : "none")};
  }
`;

