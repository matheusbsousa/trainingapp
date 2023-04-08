import React from 'react';
import {createGlobalStyle} from "styled-components";
import RobotoRegular from "../fonts/Roboto-Regular.ttf";

const GlobalStyle = createGlobalStyle
    `
      @font-face {
        font-family: 'Roboto Regular';
        src: url(${RobotoRegular});
      }
      
     body{
       margin: 0;
       padding: 0;
       font-family: 'Roboto Regular', sans-serif;
     }

     :root{
       --primary: #A42828;
       --secondary: #D9D9D9;
       --secondary-with-transparecy: rgba(217, 217, 217, 0.7);
       --background: #F2F2F2;
       --background-bt: #434343;
       --title: #FFFFFF;
       --title-disabled: #CACACA;
       --subtitle: rgba(255, 255, 255, 0.44);
       --subtitle-disabled: #CACACA;
       --type-active: #D9D9D9;
       --type-inactive: #FFFFFF;
       --type-disabled: #CACACA;
       --username: #FFFFFF;
       --username-bt: #434343;
       
     }
    `
export default GlobalStyle;