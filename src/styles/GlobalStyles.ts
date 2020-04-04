import { createGlobalStyle } from 'styled-components';

import 'font-awesome/css/font-awesome.css';
import 'typeface-nunito';
import 'react-toastify/dist/ReactToastify.css';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }
  body {
    background: #0b0a0d !important;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    width: 100%;
  }
`;

export default GlobalStyles;
