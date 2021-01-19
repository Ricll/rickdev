import React, { useState } from 'react'
import { Gallery } from '../Gallery'
import {
  Container,
  Image,
  Triangle,
  About,
  AboutText,
  Project,
  ProjectText,
  Contact,
  ContactText,
  AboutContent,
  AboutImageContainer,
  AboutImage,
  AboutDescription,
  AboutDescriptionTextContainer,
  AboutDescriptionText,
  AboutSkills,
  CloseGalleryContainer,
  CloseGallery,
  CloseContent
} from './styles'

const HomePage: React.FC = () => {
  const [showContent, setShowContent] = useState(true)
  const [contentTransition, setContentTransition] = useState(true)
  const [showAbout, setShowAbout] = useState(false)
  const [displayAbout, setDisplayAbout] = useState(false)

  const contentVariants = {
    open: { opacity: 1 },
    closed: { width: '0em' }
  }

  const aboutVariants = {
    open: { opacity: 1, zIndex: 1 },
    closed: { opacity: 0, zIndex: -1 }
  }
  function handleContent() {
    const timeAbout = setTimeout(() => {
      setShowContent(!showContent)
    }, 5500)
    setContentTransition(false)

    return () => clearTimeout(timeAbout)
  }

  function handleAbout() {
    const timeAbout = setTimeout(() => {
      setShowAbout(!showAbout)
    }, 5500)
    setDisplayAbout(true)
    setContentTransition(!contentTransition)

    return () => clearTimeout(timeAbout)
  }
  function backContent() {
    setContentTransition(!contentTransition)
    setShowAbout(!showAbout)
  }
  return (
    <Container>
      <Image src="/sun.png" />
      <Triangle>
        <About
          animate={contentTransition ? 'open' : 'closed'}
          variants={contentVariants}
          transition={{ duration: 5 }}
          onClick={() => handleAbout()}
        >
          <AboutText type="reset">About</AboutText>
        </About>

        <Project
          animate={contentTransition ? 'open' : 'closed'}
          variants={contentVariants}
          transition={{ duration: 5 }}
          onClick={() => handleContent()}
        >
          <ProjectText>Projects</ProjectText>
        </Project>
        <Contact
          animate={contentTransition ? 'open' : 'closed'}
          variants={contentVariants}
          transition={{ duration: 5 }}
          onClick={() => handleContent()}
        >
          <ContactText>Contact</ContactText>
        </Contact>
      </Triangle>

      {displayAbout && (
        <AboutContent
          animate={showAbout ? 'open' : 'closed'}
          variants={aboutVariants}
          transition={{ duration: 1, ease: 'linear' }}
        >
          <AboutImageContainer
            animate={showAbout ? 'open' : 'closed'}
            variants={aboutVariants}
            transition={{ duration: 1, ease: 'linear' }}
          >
            <AboutImage src="cartoon_profy.png" />
          </AboutImageContainer>

          <AboutDescription
            animate={showAbout ? 'open' : 'closed'}
            variants={aboutVariants}
            transition={{ duration: 1, ease: 'linear' }}
          >
            <AboutDescriptionTextContainer>
              <AboutDescriptionText title color>
                Nice to meet you
              </AboutDescriptionText>
              <AboutDescriptionText>
                I&apos;m Junior developer searching for an oportunity. <br></br>
                I concluded the bootcamp of Rocketseat and I now using this
                knowledge to build some projects to my portfolio{' '}
              </AboutDescriptionText>
            </AboutDescriptionTextContainer>
          </AboutDescription>
          <AboutSkills
            animate={showAbout ? 'open' : 'closed'}
            variants={aboutVariants}
            transition={{ duration: 1, ease: 'linear' }}
          ></AboutSkills>
          <CloseContent
            animate={showAbout ? 'open' : 'closed'}
            variants={aboutVariants}
            transition={{ duration: 1, ease: 'linear' }}
            onClick={() => backContent()}
          />
        </AboutContent>
      )}
    </Container>
  )
}

export default HomePage
