import React, { useRef, useEffect } from 'react'

import { useCycle, useAnimation } from 'framer-motion'

import {
  Container,
  PyramidMenu,
  PyramidAboutButtonContainer,
  PyramidAboutButton,
  TopDivisor,
  MiddleDivisor,
  PyramidContent,
  AboutImg,
  Description,
  Title
} from './styles'

const HomePage: React.FC = () => {
  const [isOpen, toggleOpen] = useCycle(true, false)

  const contentControl = useAnimation()

  const containerRef = useRef(null)

  useEffect(() => {
    if (isOpen) {
      contentControl.stop()
    } else {
      contentControl.start('open')
    }
  }, [isOpen, contentControl])

  const menu = {
    open: { opacity: 1 },
    closed: { opacity: 0, width: '0vw' }
  }

  const about = {
    open: { opacity: 1, width: '75%' },
    closed: { opacity: 0 }
  }

  const content = {
    visible: { marginTop: '0px' },
    hidden: { marginTop: '100px' }
  }

  function handleMenu() {
    toggleOpen()
  }
  return (
    <Container>
      <PyramidMenu
        animate={isOpen ? 'open' : 'closed'}
        variants={menu}
        transition={{ duration: 3 }}
      >
        <PyramidAboutButtonContainer>
          <PyramidAboutButton onClick={() => handleMenu()}>
            About
          </PyramidAboutButton>
        </PyramidAboutButtonContainer>
      </PyramidMenu>
      <TopDivisor />
      <MiddleDivisor />
      <PyramidContent
        animate={contentControl}
        variants={about}
        transition={{ duration: 3 }}
        ref={containerRef}
      >
        <AboutImg src={'/cartoon_profy.png'} />
        <Title>Nice to meet you!</Title>
        <Description>
          I&apos;m web developer searching for an oportunity. <br></br>I
          concluded the bootcamp of Rocketseat and I now using this knowledge to
          build some projects to my portfolio
        </Description>
      </PyramidContent>
    </Container>
  )
}

export default HomePage
