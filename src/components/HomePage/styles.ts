/* eslint-disable @typescript-eslint/no-explicit-any */
import styled, { StyledComponent } from 'styled-components'
import { motion, HTMLMotionProps, ForwardRefComponent } from 'framer-motion'
export const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
`
export const Triangle = styled(motion.div)`
  display: flex;
  box-sizing: border-box;
  margin-top: 15px;
  width: 950px;
  height: 600px;
  justify-content: center;

  clip-path: polygon(50% 20%, 0% 100%, 100% 100%);

  @media only screen and (width: 768px) {
    width: 750px;
    height: 500px;

    clip-path: polygon(50% 15%, 0% 100%, 100% 100%);
  }

  @media only screen and (max-width: 600px) {
    height: 20em;
    width: 20em;
    margin-top: 75px;
    clip-path: polygon(50% 15%, 0% 100%, 100% 100%);
  }
`
export const About = styled(motion.div)`
  display: flex;
  position: absolute;
  width: 25em;
  height: 20em;
  background-image: url('/bricksjpg');

  justify-content: center;
  align-items: center;
  border: none;

  clip-path: polygon(50% 33%, 0% 100%, 100% 100%);

  @media only screen and (width: 768px) {
    width: 20em;
    height: 16em;

    clip-path: polygon(50% 3%, 0% 100%, 100% 100%);
  }
  @media only screen and (max-width: 600px) {
    width: 9em;
    height: 10.5em;
    clip-path: polygon(51% 3%, 0% 100%, 100% 100%);
  }
`

export const AboutText = styled(motion.button).attrs({
  whileHover: { textShadow: '#000 3px 2px 4px', color: '#FFFF00' },
  whileTap: { textShadow: '#000 3px 2px 4px', color: '#FFFF00', scale: 1.2 }
})`
  margin-top: 185px;
  margin-right: 8px;
  font-size: 3rem;
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
    font-size: 3rem;
    margin-top: 130px;
    margin-right: 5px;
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
  top: 220px;
  width: 42em;
  height: 16.5em;
  justify-content: center;
  align-items: center;
  background: url('/bricksjpg');
  z-index: 2;

  clip-path: polygon(20% 45%, 80% 45%, 100% 96.5%, 0% 96%);

  @media only screen and (width: 768px) {
    width: 32em;
    height: 12.5em;
    top: 183px;
    clip-path: polygon(17% 45%, 83% 45%, 99.5% 96.5%, 0.5% 96%);
  }

  @media only screen and (max-width: 600px) {
    width: 15em;
    height: 9em;
    top: 180px;

    clip-path: polygon(20% 45%, 80% 45%, 100% 96.5%, 0.5% 96%);
  }
`

export const ProjectText = styled(motion.button).attrs({
  whileHover: { textShadow: '#000 3px 2px 4px', color: '#FFFF00' },
  whileTap: { textShadow: '#000 3px 2px 4px', color: '#FFFF00', scale: 1.2 }
})`
  font-size: 3.1rem;
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
  margin-top: 105px;

  @media only screen and (width: 768px) {
    font-size: 3rem;
    margin-top: 75px;
  }
  @media only screen and (max-width: 600px) {
    font-size: 22px;
    margin-top: 60px;
  }
`
export const Contact = styled(motion.div)`
  display: flex;
  position: absolute;
  top: 305px;
  width: 65em;
  height: 24em;
  justify-content: center;
  align-items: center;
  background: url('/bricksjpg');
  clip-path: polygon(17% 45%, 83% 45%, 96.5% 80%, 3.5% 80%);

  @media only screen and (width: 768px) {
    width: 47em;
    height: 17em;
    top: 253px;

    clip-path: polygon(16% 46%, 84% 46%, 100% 96%, 0% 96%);
  }
  @media only screen and (max-width: 600px) {
    width: 20em;
    height: 15em;
    top: 210px;
    clip-path: polygon(13% 46%, 87% 46%, 110% 96%, -10% 96%);
  }
`
export const ContactText = styled(motion.button).attrs({
  whileHover: { textShadow: '#000 3px 2px 4px', color: '#FFFF00' },
  whileTap: { textShadow: '#000 3px 2px 4px', color: '#FFFF00', scale: 1.2 }
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

  @media only screen and (width: 768px) {
    font-size: 3rem;
    margin-top: 105px;
  }
  @media only screen and (max-width: 600px) {
    font-size: 22px;
    margin-top: 60px;
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
export const Image = styled(motion.img).attrs({
  animate: { rotate: 360 },
  transition: { duration: 20, loop: Infinity, ease: 'linear' }
})`
  position: absolute;
  width: 280px;
  height: 280px;
  top: 10px;
  border-radius: 50%;
  @media only screen and (width: 768px) {
    width: 200px;
    height: 200px;
  }

  @media only screen and (max-width: 600px) {
    top: 45px;
    width: 180px;
    height: 180px;
  }
`

export const CloseContent = styled(motion.button)`
  display: flex;
  position: relative;

  background: white;
  border-radius: 30px;
  border: 1px solid #fff;
  width: 40px;
  height: 40px;
  justify-content: center;
  align-items: center;
  user-select: none;
  padding: 0;
  outline: none;
  cursor: pointer;
  font-weight: bold;
  font-size: 18px;
  left: 200px;
  top: -150px;
  z-index: 2;
`
export const AboutContent = styled(motion.div)`
  display: column;
  position: absolute;
  box-sizing: border-box;
  margin-top: 15px;
  width: 950px;
  height: 600px;
  justify-content: center;
  align-items: center;

  clip-path: polygon(50% 20%, 0% 100%, 100% 100%);

  @media only screen and (width: 768px) {
    width: 750px;
    height: 500px;

    clip-path: polygon(50% 15%, 0% 100%, 100% 100%);
  }

  @media only screen and (max-width: 600px) {
    height: 20em;
    width: 20em;
    margin-top: 75px;
    clip-path: polygon(50% 15%, 0% 100%, 100% 100%);
  }
`

export const AboutImageContainer = styled(motion.div)`
  display: flex;
  position: relative;
  width: 25em;
  height: 20em;
  left: 275px;
  top: 0px;
  justify-content: center;
  align-items: center;

  background: #0d0d0d;

  clip-path: polygon(50% 33%, 0% 100%, 100% 100%);
`
export const AboutImage = styled(motion.img)`
  display: flex;
  position: relative;
  width: 140px;
  height: 140px;
  left: 0px;
  top: 75px;
  background: #000;
  border-radius: 50%;
  object-fit: cover;
`
export const AboutDescription = styled(motion.div)`
  display: flex;
  position: relative;
  width: 42em;
  height: 16.5em;
  justify-content: center;
  align-items: center;
  left: 140px;
  top: -115px;
  background: #0d0d0d;

  clip-path: polygon(20% 45%, 80% 45%, 100% 96.5%, 0% 96%);
`
export const AboutDescriptionTextContainer = styled.div`
  display: column;
  width: 25em;
  height: 8em;
  margin-top: 100px;
  justify-content: center;
  align-items: center;
`
export const AboutDescriptionText: StyledComponent<
  ForwardRefComponent<HTMLHeadingElement, HTMLMotionProps<'h1'>>,
  any,
  Record<string, unknown>,
  never
> = styled(motion.h1)`
  font-family: 'Oswald';
  font-size: ${props => (props.title ? '1.9rem' : '1.1rem')};
  color: ${props => (props.color ? '#FFFF00' : '#FFFF')};
  text-align: center;
`

export const AboutSkills = styled(motion.div)`
  display: flex;
  position: absolute;
  top: 305px;
  width: 65em;
  height: 24em;
  top: 290px;
  left: -40px;
  justify-content: center;
  align-items: center;
  background: #0d0d0d;
  clip-path: polygon(17% 45%, 83% 45%, 96.5% 80%, 3.5% 80%);
`
