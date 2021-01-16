import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Container = styled.div`
  display: column;
  width: 100vw;
  height: 100vh;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  background: red;
`

export const TriangleContainer = styled(motion.div).attrs({
  initial: { y: 0 },
  animate: { y: [0, 0.8, 1, 0.8, 0] },
  transition: { duration: 2, repeat: Infinity, ease: 'linear' }
})`
  display: flex;
  box-sizing: content-box;
  width: 100vw;
  height: 50vh;
  justify-content: center;
  align-items: center;

  background: blue;

  @media only screen and (width: 768px) {
    height: 50vh;
  }
  @media only screen and (max-width: 600px) {
    height: 50vh;
  }
`
export const Image = styled(motion.img).attrs({
  animate: { rotate: 360 },
  transition: { duration: 20, loop: Infinity, ease: 'linear' }
})`
  position: absolute;
  width: 280px;
  height: 280px;

  @media only screen and (width: 768px) {
    width: 200px;
    height: 200px;
  }

  @media only screen and (max-width: 600px) {
    width: 180px;
    height: 180px;
  }
`
export const Triangle = styled(motion.div)`
  display: flex;

  width: 820px;
  height: 820px;
  background: white;
  clip-path: polygon(50% 45%, 0% 100%, 100% 100%);

  @media only screen and (width: 768px) {
    width: 585px;
    height: 585px;
    background: white;
  }

  @media only screen and (max-width: 600px) {
    height: 70vh;
    width: 595px;
    height: 595px;
  }
`

export const About = styled(motion.div)`
  display: flex;
  position: absolute;
  width: 18.5em;
  height: 15em;
  background: url('/bricksjpg');
  justify-content: center;
  align-items: center;
  border: none;

  clip-path: polygon(50% 33%, 0% 100%, 100% 100%);

  @media only screen and (width: 768px) {
    width: 220px;
    height: 180px;
  }
  @media only screen and (max-width: 600px) {
    width: 35.5vw;
    height: 30vh;
  }
`

export const AboutText = styled(motion.button).attrs({
  whileHover: { textShadow: '#000  3px 2px 4px', color: '#FFFF00' },
  whileTap: { textShadow: '#000  3px 2px 4px', color: '#FFFF00', scale: 1.2 }
})`
  margin-top: 135px;
  margin-right: 8px;
  font-size: 46px;
  font-family: 'Oswald';
  font-weight: bold;
  color: #ffff;
  text-shadow: #474747 3px 2px 4px;
  letter-spacing: 0.1rem;
  padding: 0;
  border: none;
  outline: none;
  background: none;
  text-transform: uppercase;

  @media only screen and (width: 768px) {
    font-size: 18px;
    margin-top: 80px;
    margin-right: 2.5px;
  }

  @media only screen and (max-width: 600px) {
    font-size: 22px;
    margin-top: 80px;
    margin-right: 2.5px;
  }
`

export const Project = styled(motion.div)`
  display: flex;
  position: absolute;
  top: 170px;
  width: 34em;
  height: 16.5em;
  justify-content: center;
  align-items: center;
  background: url('/bricksjpg');
  z-index: 2;

  clip-path: polygon(22% 45%, 78% 45%, 100% 96.5%, 0% 96%);

  @media only screen and (width: 768px) {
    width: 340px;
    height: 120px;
    top: 183px;
    clip-path: polygon(17% 45%, 83% 45%, 99.5% 96.5%, 0.5% 96%);
  }

  @media only screen and (max-width: 600px) {
    width: 63vw;
    height: 30vh;
    top: 155px;

    clip-path: polygon(21% 45%, 79% 45%, 100% 96.5%, 0.5% 96%);
  }
`

export const ProjectText = styled(motion.button).attrs({
  whileHover: { textShadow: '#000  3px 2px 4px', color: '#FFFF00' },
  whileTap: { textShadow: '#000  3px 2px 4px', color: '#FFFF00', scale: 1.2 }
})`
  font-size: 46px;
  font-family: 'Oswald';
  font-weight: bold;
  color: #ffff;
  padding: 0;
  border: none;
  outline: none;
  background: none;
  letter-spacing: 0.15rem;
  text-shadow: #474747 3px 2px 4px;
  text-transform: uppercase;
  margin-top: 90px;

  @media only screen and (max-width: 800px) {
    font-size: 22px;
    margin-top: 60px;
  }
`
export const Contact = styled(motion.div)`
  display: flex;
  position: absolute;
  top: 235.5px;
  width: 64.5vw;
  height: 64vh;
  justify-content: center;
  overflow: hidden;
  border: none;
  align-items: center;
  background: url('/bricksjpg');
  clip-path: polygon(19% 45%, 81% 45%, 96.5% 80%, 3.5% 80%);

  @media only screen and (width: 768px) {
    width: 585px;
    height: 267px;
    top: 179px;

    clip-path: polygon(21% 46%, 79% 46%, 100% 96%, 0% 96%);
  }
  @media only screen and (max-width: 600px) {
    width: 100vw;
    height: 41vh;
    top: 215px;
    clip-path: polygon(18% 46%, 82% 46%, 100% 96%, 0% 96%);
  }
`
export const ContactText = styled(motion.button).attrs({
  whileHover: { textShadow: '#000  3px 2px 4px', color: '#FFFF00' },
  whileTap: { textShadow: '#000  3px 2px 4px', color: '#FFFF00', scale: 1.2 }
})`
  font-size: 48px;
  font-family: 'Oswald';
  font-weight: bold;
  color: #ffff;
  padding: 0;
  border: none;
  outline: none;
  background: none;
  margin-top: 105px;
  letter-spacing: 0.1rem;
  text-transform: uppercase;
  text-shadow: #474747 3px 2px 4px;
  @media only screen and (width: 768px) {
    font-size: 20px;
    margin-top: 55px;
  }

  @media only screen and (max-width: 600px) {
    font-size: 24px;
    margin-top: 70px;
  }
`
export const CloseGalleryContainer = styled(motion.div)`
  display: flex;
  position: absolute;
  width: 50px;
  height: 50px;
  margin-top: 500px;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border: none;

  z-index: 2;
`
export const CloseGallery = styled(motion.button)`
  background: white;
  border-radius: 30px;
  border: 1px solid #fff;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  padding: 0;
  outline: none;
  cursor: pointer;
  font-weight: bold;
  font-size: 18px;
  z-index: 2;
  left: 493px;
`

// transform: matrix(1, -0.3, 0, 1, 0, 0);
// clip-path: polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%);
