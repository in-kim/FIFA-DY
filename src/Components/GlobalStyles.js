import { createGlobalStyle } from 'styled-components';
import reset from "styled-reset";

const globalStyles = createGlobalStyle`
  ${reset};
  @font-face {
    font-family: 'SDKukdetopokki';
    src: url('/assets/fonts/SDKukdetopokki-aLt.woff') format('woff');
    font-style: normal;
    font-weight: 400;
    font-display: fallback;
  }
  @font-face {
    font-family: 'SDKukdetopokki';
    src: url('/assets/fonts/SDKukdetopokki-bBd.woff') format('woff');
    font-style: normal;
    font-weight: 700;
    font-display: fallback;
  }
  a{
    text-decoration:none;
    color:inherit;
  }
  *{
    box-sizing:border-box;
  }
  body{
    font-family:'SDKukdetopokki';
    font-size:14px;
    font-weight:400;
    background-color:#222;
    color:#fff;
  }
  html, body, #root{
    width:100%;
    height:100%;
  }
`;

export default globalStyles;