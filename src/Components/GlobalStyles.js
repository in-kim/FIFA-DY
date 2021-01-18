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
    background-color:rgba(20, 20, 20, 1);
    color:#fff;
    padding-top:50px;
  }
`;

export default globalStyles;