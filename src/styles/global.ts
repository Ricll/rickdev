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
}
body, input, button{
    font-family: 'Oswald', sans-serif;
    font-size: calc(14px + (26 - 14) * ((100vw - 300px) / (1600 - 300)));

  }
  h1, h2, h3, h4, h5, h6, button, strong {
    font-size: 1.6rem; // 36px
    @media (min-width: 414px){

    font-size: calc(1.5rem + 1.4vw); // fluidly scale

}

@media (min-width: 1440px){

    font-size: 4.75rem; // 76px

}

    font-weight: 500;
  }
  button {
    cursor: pointer;
  }
`
