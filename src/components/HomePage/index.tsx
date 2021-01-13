import React from 'react'
import {
  Container,
  TriangleContainer,
  Image,
  Triangle,
  About,
  AboutText,
  Project,
  ProjectText,
  Contact,
  ContactText
} from './styles'
const HomePage: React.FC = () => {
  return (
    <Container>
      <TriangleContainer>
        <Image src="/sun.png" />
        <Triangle></Triangle>
        <About>
          <AboutText type="reset">About</AboutText>
        </About>
        <Project>
          <ProjectText>Projects</ProjectText>
        </Project>
        <Contact>
          <ContactText>Contact Me</ContactText>
        </Contact>
      </TriangleContainer>
    </Container>
  )
}

export default HomePage
