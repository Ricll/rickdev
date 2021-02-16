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
        <About onClick={() => console.log('AAAA')}>About</About>
        <Image src={'/cartoon_profy.png'} />
        <Projects>Projects</Projects>
      </Menu>
    </Container>
  )
}

export default HomePage
