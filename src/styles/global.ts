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
    font-size: calc(28px + (72 - 28) * ((100vw - 300px) / (1600 - 300)));



     h1, h2, h3, h4, h5, h6, strong {
     font-weight: 500;
}
     height: 200vw;

}
 `
