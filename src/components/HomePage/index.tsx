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
  ButtonsContainer,
  TextContainer,
  Title,
  SubTitle
} from './styles'

const HomePage: React.FC = () => {
  return (
    <Container>
      <Stars />
      <Stars2 />
      <Stars3 />
      <Menu>
        <TextContainer>
          <Title>Ricardo Lopes</Title>
          <SubTitle>Junior Web Developer</SubTitle>
        </TextContainer>
        <Image src={'/cartoon_profy.png'} />
        <ButtonsContainer>
          <About>About Me</About>
          <Projects>Projects</Projects>
        </ButtonsContainer>
      </Menu>
    </Container>
  )
}

export default HomePage
