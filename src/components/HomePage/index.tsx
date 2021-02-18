import React from 'react'

import {
  Container,
  Stars,
  Stars2,
  Stars3,
  Menu,
  About,
  Projects,
  Image,
  ImageContainer
} from './styles'

const HomePage: React.FC = () => {
  return (
    <Container>
      <Stars />
      <Stars2 />
      <Stars3 />
      <Menu>
        <About>About Me</About>
        <ImageContainer>
          <Image src={'/cartoon_profy.png'} />
        </ImageContainer>

        <Projects>Projects</Projects>
      </Menu>
    </Container>
  )
}

export default HomePage
