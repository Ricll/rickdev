import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Container = styled.div`
  display: column;
  width: 100vw;
  height: 100vh;
  min-height: 100vh;
  background: #000;
`

export const TriangleContainer = styled(motion.div)`
  display: flex;
  width: 100%;
  height: 50%;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 800px) {
    height: 65%;
  }
`
export const Image = styled(motion.img).attrs({
  animate: { rotate: 360 },
  transition: { duration: 20, loop: Infinity, ease: 'linear' }
})`
  width: 100%;
  position: absolute;
  width: 300px;
  height: 300px;

  @media only screen and (max-width: 800px) {
    width: 200px;
    height: 200px;
  }
`
export const Triangle = styled(motion.div)`
  display: flex;

  width: 860px;
  height: 860px;
  background: black;
  border: 1px solid #000;

  clip-path: polygon(50% 45%, 0% 100%, 100% 100%);

  @media only screen and (max-width: 800px) {
    width: 100%;
    height: 485px;
    background: black;
  }
`

export const About = styled(motion.div)`
  display: flex;
  position: absolute;
  width: 310px;
  height: 250px;
  background: #17202a;
  justify-content: center;
  align-items: center;
  border: none;
  clip-path: polygon(50% 33%, 0% 100%, 100% 100%);

  @media (width: 1440px) {
    clip-path: polygon(50% 33%, 0% 100%, 100% 100%);
  }

  @media only screen and (max-width: 800px) {
    width: 35%;
    height: 150px;
  }
`

export const AboutText = styled(motion.button).attrs({
  whileHover: { textShadow: '#000  3px 2px 4px', color: '#FFFF00' }
})`
  margin-top: 135px;
  margin-right: 7px;
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

  @media only screen and (max-width: 800px) {
    font-size: 18px;
    margin-top: 80px;
    margin-right: 2.5px;
  }
`

export const Project = styled(motion.div)`
  display: flex;
  position: absolute;
  margin-top: 280px;
  width: 525px;
  height: 220px;
  justify-content: center;
  align-items: center;
  background: #17202a;

  clip-path: polygon(20% 45%, 80% 45%, 99.5% 96.5%, 0.5% 96%);
  @media only screen and (max-width: 800px) {
    width: 61.5%;
    height: 150px;
    margin-top: 170px;
    clip-path: polygon(21% 45%, 79% 45%, 99.5% 93.5%, 0% 94%);
  }
`

export const ProjectText = styled(motion.button).attrs({
  whileHover: { textShadow: '#000  3px 2px 4px', color: '#FFFF00' }
})`
  font-size: 46px;
  font-family: 'Oswald';
  font-weight: bold;
  color: #ffff;
  padding: 0;
  border: none;
  outline: none;
  background: none;
  letter-spacing: 0.1rem;
  text-shadow: #474747 3px 2px 4px;
  text-transform: uppercase;
  margin-top: 90px;

  @media only screen and (max-width: 800px) {
    font-size: 18px;
    margin-top: 60px;
  }
`
export const Contact = styled(motion.div)`
  display: flex;
  position: absolute;
  margin-top: 535px;
  width: 875px;
  height: 450px;
  justify-content: center;
  align-items: center;
  background: #17202a;
  clip-path: polygon(20% 45%, 80% 45%, 96.5% 80%, 3.5% 80%);

  @media only screen and (max-width: 800px) {
    width: 97.5%;
    height: 255px;
    margin-top: 333px;
    clip-path: polygon(18% 45%, 82% 45%, 97.5% 80%, 2.5% 80%);
  }
`
export const ContactText = styled(motion.button).attrs({
  whileHover: { textShadow: '#000  3px 2px 4px', color: '#FFFF00' }
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
  @media only screen and (max-width: 800px) {
    font-size: 20px;
    margin-top: 55px;
  }
`

// transform: matrix(1, -0.3, 0, 1, 0, 0);
// clip-path: polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%);
