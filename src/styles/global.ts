import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background: #000;

  }

  body {
    -webkit-font-smoothing: antialiased;
    h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }
     height: 100vw;
}
 `
