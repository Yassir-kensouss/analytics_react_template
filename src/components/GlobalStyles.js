import {createGlobalStyle} from 'styled-components';
import bottomImg from '../images/background-bottom.png'

export const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing: border-box;
    font-family: 'Robotto' , sans-serif;
  }

  html,body{
    overflow-x:hidden;
    font-size: 16px;
  }
  body{
    background-color: #f8f9ff;  
  }

  .bottom-bg{
    background : url(${bottomImg});
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    padding: 200px 0 0 0;

    @media screen and (min-width: 2560px){
      padding: 350px 0 0 0;
    }
  }
`;
