import { createGlobalStyle } from 'styled-components';
import reset from "styled-reset";

const globalStyles = createGlobalStyle`
  ${reset};
  @font-face {
    font-family: 'SDKukdetopokki';
    src: url('https://in-kim.github.io/FIFA-DY/assets/fonts/SDKukdetopokki-aLt.woff') format('woff');
    font-style: normal;
    font-weight: 400;
    font-display: fallback;
  }
  @font-face {
    font-family: 'SDKukdetopokki';
    src: url('https://in-kim.github.io/FIFA-DY/assets/fonts/SDKukdetopokki-bBd.woff') format('woff');
    font-style: normal;
    font-weight: 700;
    font-display: fallback;
  }
  @font-face {
    font-family: 'Bazzi';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-04@2.1/Bazzi.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  a{
    text-decoration:none;
    color:inherit;
  }
  *{
    box-sizing:border-box;
  }
  body{
    /* font-family:'SDKukdetopokki'; */
    width:1800px;
    font-family:'Bazzi';
    font-size:14px;
    font-weight:400;
    background-color:#222;
    color:#fff;
  }
  html, body, #root{
    width:100%;
    height:100%;
  }

  #root {
    height:calc(100% + 100px);
  }
`;

export default globalStyles;