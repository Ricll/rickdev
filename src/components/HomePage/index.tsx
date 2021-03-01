import React, { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import {
  imageVariants,
  pageVariants,
  logoVariant,
  textVariant
} from '../variants'

import {
  Container,
  Stars,
  Stars2,
  Stars3,
  HomeContent,
  AboutContent,
  About,
  Projects,
  Home,
  Image,
  ButtonsContainer,
  TextContainer,
  Title,
  Text,
  SubTitle,
  TechsContainer,
  TechImage,
  SocialContainer,
  SocialLink,
  SocialImage
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
      <Stars />
      <Stars2 />
      <Stars3 />
      <AnimatePresence exitBeforeEnter>
        {activeElement === 'home' && (
          <HomeContent
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
          </HomeContent>
        )}

        {activeElement === 'about' && (
          <AboutContent
            key="about"
            variants={pageVariants}
            initial="exit"
            animate="enter"
            exit="exit"
          >
            <Title>Transition</Title>
            <Text
              initial="hidden"
              animate="visible"
              variants={textVariant}
              transition={{ duration: 3, type: 'ease', delay: 2 }}
            >
              I have more than 10 years of experience in the sales area.
              <br></br>
              However, I have been studying programming to get a new opportunity
              in the market for developing websites and mobile applications.
              <br></br>
            </Text>
            <TechsContainer>
              <TechImage
                src={'/html.webp'}
                initial="hidden"
                animate="visible"
                variants={logoVariant}
              />
              <TechImage
                src={'css.webp'}
                initial="hidden"
                animate="visible"
                variants={logoVariant}
              />
              <TechImage
                sizes
                src={'jscriptlogo.png'}
                initial="hidden"
                animate="visible"
                variants={logoVariant}
              />
              <TechImage
                sizes
                src={'react_logo.png'}
                initial="hidden"
                animate="visible"
                variants={logoVariant}
              />
              <TechImage
                sizes
                src={'nodejs2.png'}
                initial="hidden"
                animate="visible"
                variants={logoVariant}
              />
            </TechsContainer>
            <Text
              initial="hidden"
              animate="visible"
              variants={textVariant}
              transition={{ duration: 3, type: 'ease', delay: 3 }}
            >
              Here you can see some of my projects. I hope you enjoy it. Stay in
              touch.
            </Text>
            <SocialContainer>
              <SocialLink href="https://github.com/Ricll">
                <SocialImage src={'git.png'} />
              </SocialLink>
              <SocialLink href="https://github.com/Ricll">
                <SocialImage src={'linkedin.png'} />
              </SocialLink>
            </SocialContainer>
            <ButtonsContainer>
              <Home id="home" onClick={handleClick}>
                Back Home
              </Home>
              <Projects>Projects</Projects>
            </ButtonsContainer>
          </AboutContent>
        )}
      </AnimatePresence>
    </Container>
  )
}

export default HomePage
