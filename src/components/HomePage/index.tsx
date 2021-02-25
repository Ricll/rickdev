import React, { useState } from 'react'
import { AnimatePresence, useCycle } from 'framer-motion'
import { imageVariants, pageVariants } from '../variants'

import {
  Container,
  Stars,
  Stars2,
  Stars3,
  Content,
  About,
  Projects,
  Home,
  Image,
  ButtonsContainer,
  TextContainer,
  Title,
  SubTitle
} from './styles'

const HomePage: React.FC = () => {
  const [activeElement, setElement] = useState('home')

  const handleClick = (e: any) => {
    e.preventDefault()
    const { id } = e.target

    return setElement(id)
  }
  return (
    <Container>
      <AnimatePresence exitBeforeEnter>
        <Stars />
        <Stars2 />
        <Stars3 />
        {activeElement === 'home' && (
          <Content
            key="home"
            variants={pageVariants}
            initial="exit"
            animate="enter"
            exit="exit"
          >
            <TextContainer>
              <Title>
                <span>R</span>i<span>c</span>a<span>r</span>d<span>o</span>
                &nbsp;L
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
              <About id="about" onClick={handleClick}>
                About Me
              </About>

              <Projects>Projects</Projects>
            </ButtonsContainer>
          </Content>
        )}

        {activeElement === 'about' && (
          <Content
            key="about"
            variants={pageVariants}
            initial="exit"
            animate="enter"
            exit="exit"
          >
            <Title>Transition</Title>
            <ButtonsContainer>
              <Home id="home" onClick={handleClick}>
                Back Home
              </Home>
              <Projects id="home" onClick={handleClick}>
                Projects
              </Projects>
            </ButtonsContainer>
          </Content>
        )}
      </AnimatePresence>
    </Container>
  )
}

export default HomePage
