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


  h1, h2, h3, h4, h5, h6, button, strong, a {
    font-size: 1.9rem; // 36px
    font-family: 'Oswald', sans-serif;
    cursor: pointer;
    @media (min-width: 414px){

    font-size: calc(1.5rem + 1.4vw); // fluidly scale
}

@media (min-width: 1440px){

    font-size: 4.50rem; // 76px

}

    font-weight: 500;
  }

`
