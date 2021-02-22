import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: 0;

}
body {
   overflow: hidden;
  -webkit-font-smoothing: antialiased;
  height: 200vh;
  font-family: 'Oswald', sans-serif;

}

  h1, h2, h3, h4, h5, h6, button, strong, a {
    font-size: 16px;
    cursor: pointer;
    font-weight: 500;
  }
`
