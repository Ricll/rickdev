import React from 'react'

import {
  Container,
  Stars,
  Stars2,
  Stars3,
  Menu,
  About,
  Image,
  Projects
} from './styles'

const HomePage: React.FC = () => {
  return (
    <Container>
      <Stars />
      <Stars2 />
      <Stars3 />
      <Menu>
        <About>About</About>
        <Image src={'/cartoon_profy.png'} />
        <Projects>Projects</Projects>
      </Menu>
    </Container>
  )
}

export default HomePage
