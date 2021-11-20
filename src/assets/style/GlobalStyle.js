/* eslint-disable no-tabs */
import { createGlobalStyle } from 'styled-components';
import Roboto700 from '../fonts/Roboto/Roboto-Bold.ttf';
import Roboto300 from '../fonts/Roboto/Roboto-Light.ttf';

const GlobalStyle = createGlobalStyle`

@font-face {
  font-family: 'primaryBold';
  src: url(${Roboto700}) format('truetype');
}

@font-face {
  font-family: 'primaryLigth';
  src: url(${Roboto300}) format('truetype');
}

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
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
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
  background-color: #6D7CE4;
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
input:focus, textarea:focus, select:focus{
        outline: none;
    }
*{
    box-sizing: border-box;
}
button{
  cursor: pointer;
  background-color: inherit;
  border: none;
}

h1{
  font-family: 'primaryBold';
  font-size: 28px;
  line-height: 32.81px;
  color: #FFFFFF;
  text-align: center;
  }

  h6{
    font-family: 'primaryLigth';
    color: #FFFFFF;
    font-size: 18px;
    line-height: 21px;
    text-align: center;
  }

  img{
    width: 100%;
  }
`;

export default GlobalStyle;
