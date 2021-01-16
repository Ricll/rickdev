import React, { useState } from 'react'
import { Gallery } from '../Gallery'
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
  ContactText,
  CloseGalleryContainer,
  CloseGallery
} from './styles'

const HomePage: React.FC = () => {
  const [rotate, setRotate] = useState(false)
  const [about, setAbout] = useState(true)
  const [gallery, setGallery] = useState(false)
  const [showCloseGalleryButton, setShowCloseGalleryButton] = useState(false)
  const [contact, setContact] = useState(false)
  const projectRotation = {
    open: { transform: 'rotate(180deg)', width: '0px', height: '0px' },
    closed: { transform: 'rotate(0deg)' }
  }

  const projectTextOpacity = {
    open: { opacity: 0.3 },
    closed: { opacity: 1 }
  }

  function showAbout() {
    const timeAbout = setTimeout(() => {
      setGallery(!gallery)
    }, 1000)
    setRotate(!rotate)
    return () => clearTimeout(timeAbout)
  }

  function handleGallery() {
    const timeGallery = setTimeout(() => {
      setGallery(!gallery)
      setShowCloseGalleryButton(!showCloseGalleryButton)
    }, 1000)
    setRotate(!rotate)
    return () => clearTimeout(timeGallery)
  }
  return (
    <Container>
      <TriangleContainer>
        <Image src="/sun.png" />
        <Triangle />
        {about && (
          <About onClick={() => showAbout()}>
            <AboutText type="reset">About</AboutText>
          </About>
        )}

        <Project
          animate={rotate ? 'open' : 'closed'}
          variants={projectRotation}
          transition={{ duration: 2 }}
        >
          <ProjectText
            animate={rotate ? 'open' : 'closed'}
            variants={projectTextOpacity}
            transition={{ duration: 1 }}
            onClick={() => handleGallery()}
          >
            Projects
          </ProjectText>
        </Project>
        <Contact>
          <ContactText>Contact Me</ContactText>
        </Contact>
        {gallery && <Gallery />}
        {showCloseGalleryButton && (
          <CloseGalleryContainer>
            <CloseGallery onClick={() => handleGallery()}>{'X'}</CloseGallery>
          </CloseGalleryContainer>
        )}
      </TriangleContainer>
    </Container>
  )
}

export default HomePage
