import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, button, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    box-sizing: border-box;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  a {
    color: #000;
    text-decoration: none;
  }
  button {
    background: none;
  }
  
  body{
    font-family: Noto Sans KR;
  }

  :root {
    --gray-cool-gray-light: #F6F7F8;
    --gray-cool-gray-light-2: #F0F2F3;
    --gray-cool-gray-light-3: #E0E4E8;

    --gray-gray-light: #BEBEBE;

    --gray-gray: #9C9C9C;
    --gray-gray-2: #9BA1A7;

    --gray-border: #DEDEDE;

    --primary-default: #024EEE;
    --primary-dark: #003AD6;
    --primary-light: #DBE1FD;
    
    --select-hover: #FAFBFC;

    --red: #f03738;
  }
`;

export default GlobalStyle;
