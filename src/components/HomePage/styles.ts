import styled, { StyledComponent } from 'styled-components'
import { motion } from 'framer-motion'

export const Container = styled.div`
  display: flex;
  width: 100%;

  @media screen and (max-width: 600px) {
    flex-direction: column-reverse;
  }
`
export const DescriptionContainer = styled(motion.div)`
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  width: 680px;
  height: 700px;
  align-items: center;
  justify-content: center;
  background: none;

  @media screen and (max-width: 600px) {
    width: 800px;
  }
`
export const DescriptionTextContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  width: 600px;
  height: 550px;
  background: none;

  @media screen and (max-width: 600px) {
    align-items: center;
  }
`
export const DescriptionTitle = styled(motion.h1)`
  font-family: Oswald, Helvetica, sans-serif;
  font-size: calc(42px + (68 - 48) * ((100vw - 300px) / (1600 - 300)));
  text-align: center;
  line-height: 1.3em;
  padding: 15px;
  color: #ffff;

  background: none;
`
export const DescriptionText = styled(motion.p)`
  font-family: Oswald, Helvetica, sans-serif;
  font-size: calc(48px + (64 - 48) * ((100vw - 300px) / (1600 - 300)));
  color: #2f4f4f;
  text-align: center;
  line-height: 1.3em;

  background: none;
`
export const ImageContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  width: 680px;
  height: 700px;
  min-width: 500px;
  justify-content: center;
  background: #dcdcdc;

  @media screen and (max-width: 600px) {
    width: 800px;
  }
`
export const TriangleA = styled(motion.span)`
  display: flex;
  position: relative;
  margin: 20px;
  color: #ffff;
  width: 50px;
  height: 50px;
  background: #00ffff;
  filter: brightness(90%);
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
  z-index: 10;
`

export const TriangleB = styled(motion.span)`
  display: flex;
  position: relative;
  color: #ffff;
  margin: 20px;
  width: 50px;
  height: 50px;
  background: #dc143c;
  filter: brightness(90%);
  z-index: 11;
  clip-path: polygon(
    50% 0%,
    90% 20%,
    100% 60%,
    75% 100%,
    25% 100%,
    0% 60%,
    10% 20%
  );
`

export const TriangleC = styled(motion.span)`
  display: flex;
  position: relative;
  color: #ffff;
  width: 50px;
  height: 50px;
  margin: 20px;
  z-index: 12;
  background: #006400;
  filter: brightness(90%);
`

export const TriangleD = styled(motion.span)`
  display: flex;
  position: relative;
  color: #ffff;
  width: 50px;
  height: 50px;
  margin: 20px;
  background: #ff4500;
  z-index: 13;
  filter: brightness(90%);

  clip-path: circle(50% at 50% 50%);
`

export const TriangleE = styled(motion.span)`
  display: flex;
  position: relative;
  color: #ffff;
  width: 50px;
  height: 50px;
  margin: 20px;
  z-index: 14;
  background: #ea1717;
  filter: brightness(90%);
  clip-path: polygon(
    20% 0%,
    80% 0%,
    100% 20%,
    100% 80%,
    80% 100%,
    20% 100%,
    0% 80%,
    0% 20%
  );
`
export const TriangleF = styled(motion.span)`
  display: flex;
  position: relative;
  color: #ffff;
  width: 50px;
  height: 50px;
  margin: 20px;
  background: #6a5acd;
  z-index: 13;
  filter: brightness(90%);

  clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
`
// max 67 min 30
export const UserAvatar = styled(motion.img)`
  display: flex;
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 450px;
  height: 605px;
  filter: brightness(85%);
  object-fit: cover;

  background: none;
  @media screen and (max-width: 600px) {
    width: 550px;
    height: 965px;
  }
`
