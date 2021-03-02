import React, { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import {
  FaGithubSquare,
  FaFacebookSquare,
  FaEnvelopeSquare
} from 'react-icons/fa'

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
              {' '}
              I have more than 10 years of experience in the sales area.
              <br></br>
            </Text>

            <Text
              initial="hidden"
              animate="visible"
              variants={textVariant}
              transition={{ duration: 3, type: 'ease', delay: 7 }}
            >
              However, I have been studying programming to get a new opportunity
              in the market for developing websites and mobile applications.
            </Text>
            <Text
              initial="hidden"
              animate="visible"
              variants={textVariant}
              transition={{ duration: 3, type: 'ease', delay: 13 }}
            >
              Here you can see some of my projects. <br></br>I hope you enjoy
              it.
            </Text>
            <Text
              initial="hidden"
              animate="visible"
              variants={textVariant}
              transition={{ duration: 3, type: 'ease', delay: 19 }}
            >
              {' '}
              Stay in touch.
            </Text>
            <SocialContainer>
              <SocialLink
                initial="hidden"
                animate="visible"
                variants={logoVariant}
                href="https://github.com/Ricll"
              >
                <FaGithubSquare style={{ width: '50px', height: '50px' }} />
              </SocialLink>
              <SocialLink
                initial="hidden"
                animate="visible"
                variants={logoVariant}
                href="https://github.com/Ricll"
              >
                <FaFacebookSquare style={{ width: '50px', height: '50px' }} />
              </SocialLink>
              <SocialLink
                initial="hidden"
                animate="visible"
                variants={logoVariant}
                href="https://github.com/Ricll"
              >
                <FaEnvelopeSquare style={{ width: '50px', height: '50px' }} />
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
