import styled, { StyledComponent } from 'styled-components'
import { motion } from 'framer-motion'

export const Container = styled.div`
  display: flex;
  box-sizing: border-box;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 95%;
  height: 95%;

  transform: translate(-50%, -50%);
`
export const PyramidMenu = styled(motion.div)`
  display: flex;
  width: 95%;
  height: 75%;
  position: absolute;
  top: 55%;
  left: 50%;
  justify-content: center;
  align-items: center;
  background: url('noise.png');
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
  filter: brightness(130%);

  animation: animate 0.5s steps(10) infinite;

  @keyframes animate {
    0% {
      background-position: 0 0;
    }
    100% {
      background-position: 100% 100%;
    }
  }
  transform: translate(-50%, -50%);

  @media (max-width: 600px) {
    width: 100%;
    height: 90%;
    clip-path: polygon(50% 10%, 0% 100%, 100% 100%);
  }
`

export const PyramidAboutButtonContainer = styled(motion.div)`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 100px;
  top: -20%;
  background: none;

  @media (max-width: 600px) {
    top: -15%;
  }
`

export const PyramidAboutButton = styled(motion.button).attrs({
  whileHover: {
    textShadow: '#000 3px 2px 4px',
    color: '#FFFF00'
  },
  whileTap: {
    textShadow: '#000 3px 2px 4px',
    color: '#FFFF00'
  }
})`
  font-size: 52px;

  padding: 0px;
  border: none;
  outline: none;
  background: none;
  text-transform: uppercase;
  font-family: 'Oswald';
  font-weight: bold;
  color: white;

  text-shadow: #474747 3px 2px 4px;
  letter-spacing: 0.1rem;

  @media (max-width: 600px) {
    font-size: 22px;
  }
`

export const TopDivisor = styled(motion.span)`
  display: flex;
  position: fixed;
  width: 45%;
  height: 0.2%;
  top: 53%;
  left: 50%;
  transform: translate(-50%, -50%);

  background-color: #000;

  @media (max-width: 600px) {
    width: 42%;
  }
`
export const MiddleDivisor = styled(motion.span)`
  display: flex;
  position: fixed;
  top: 73%;
  left: 50%;
  width: 70%;
  height: 0.3%;
  transform: translate(-50%, -50%);
  background-color: #000;

  @media (max-width: 600px) {
    width: 66%;
  }
`

export const PyramidContent = styled(motion.div)`
  display: block;

  width: 0%;
  height: 75%;
  position: absolute;
  top: 55%;
  left: 50%;
  justify-content: center;
  align-items: center;
  transform: translate(-50%, -50%);
  background: #0d0d0d;
  z-index: -1;
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
  filter: brightness(130%);
  @media (max-width: 600px) {
    height: 90%;
    clip-path: polygon(50% 10%, 0% 100%, 100% 100%);
  }
`
export const AboutImg = styled(motion.img)`
  position: relative;
  top: 28%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 150px;
  height: 165px;
  background: #000;
  border-radius: 50%;
  object-fit: cover;

  @media (width: 768px) {
    top: 25%;
    width: 100px;
    height: 115px;
  }

  @media (max-width: 600px) {
    top: 32%;
    width: 70px;
    height: 85px;
  }
`

export const Title = styled(motion.h1)`
  position: relative;
  width: 340px;
  height: 60px;
  text-align: center;
  top: 22%;
  left: 50%;
  margin: 0;
  padding: 0;
  font-family: 'Oswald', serif;
  font-size: 3rem;
  color: #ffff00;
  background: none;
  transform: translate(-50%, -50%);

  @media (width: 768px) {
    top: 30%;
    font-size: 2.8rem;
  }
  @media (max-width: 600px) {
    font-size: 1.5rem;
    top: 43%;
  }
`

export const Description = styled(motion.p)`
  position: relative;
  width: 520px;
  height: 120px;
  text-align: center;
  top: 40%;
  left: 50%;
  margin: 0;
  padding: 0;
  font-size: 1.3rem;
  font-family: 'Oswald', serif;
  color: #ffff;

  background: none;
  transform: translate(-50%, -50%);

  @media (width: 768px) {
    top: 45%;
    font-size: 1rem;
    width: 480px;
    height: 80px;
  }

  @media (max-width: 600px) {
    font-size: 1rem;
    top: 47%;
    width: 220px;
    height: 70px;
  }
`
