import React from 'react'

import {
  Container,
  Stars,
  Stars2,
  Stars3,
  ImageContainer,
  About,
  Image,
  Projects,
  AboutContainer,
  ProjectContainer,
  Menu
} from './styles'

const HomePage: React.FC = () => {
  return (
    <Container>
      <Stars />
      <Stars2 />
      <Stars3 />
      <Menu>
        <AboutContainer>
          <About onClick={() => console.log('AAAA')}>About</About>
        </AboutContainer>
        <ImageContainer>
          <Image src={'/cartoon_profy.png'} />
        </ImageContainer>
        <ProjectContainer>
          <Projects>Projects</Projects>
        </ProjectContainer>
      </Menu>
    </Container>
  )
}

export default HomePage
