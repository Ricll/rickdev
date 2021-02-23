import React from 'react'
import { imageVariants } from '../variants'

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
          <Title>
            <span>R</span>i<span>c</span>a<span>r</span>d<span>o</span>&nbsp;L
            <span>o</span>p<span>e</span>s
          </Title>

          <SubTitle>
            <span>W</span>/
            <span>
              <span>M</span>&nbsp;D
            </span>
            e<span>v</span>e<span>l</span>o<span>p</span>e<span>r</span>
          </SubTitle>
        </TextContainer>
        <Image
          initial="hidden"
          animate="visible"
          variants={imageVariants}
          src={'/cartoon_profy.png'}
        />
        <ButtonsContainer>
          <About>About Me</About>
          <Projects>Projects</Projects>
        </ButtonsContainer>
      </Menu>
    </Container>
  )
}

export default HomePage
