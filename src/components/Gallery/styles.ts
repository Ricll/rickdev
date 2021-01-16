import styled from 'styled-components'

import { motion } from 'framer-motion'

export const Container = styled(motion.div).attrs({
  intial: { opacity: 0 },
  animate: { opacity: [0, 0.3, 0.6, 1] },
  transition: { duration: 1.5 }
})`
  width: 370px;
  height: 320px;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 230px;

  @media only screen and (max-width: 800px) {
    width: 240px;
    height: 220px;
  }
`
export const Next = styled.div`
  top: calc(50% - 20px);
  position: absolute;
  background: white;
  border-radius: 30px;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  cursor: pointer;
  font-weight: bold;
  font-size: 18px;
  z-index: 2;
  right: 10px;

  @media only screen and (max-width: 800px) {
    width: 20px;
    height: 20px;
  }
`
export const Prev = styled.div`
  top: calc(50% - 20px);
  position: absolute;
  background: white;
  border-radius: 30px;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  cursor: pointer;
  font-weight: bold;
  font-size: 18px;
  z-index: 2;
  left: 10px;
  transform: scale(-1);
  @media only screen and (max-width: 800px) {
    width: 20px;
    height: 20px;
  }
`

export const Image = styled(motion.img)`
  position: absolute;
  width: 520px;
  height: 300px;
  top: -15px;
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
  object-fit: cover;

  @media only screen and (max-width: 800px) {
    width: 200px;
    height: 170px;
    top: -30px;
  }
`
export const Link = styled(motion.a)`
  position: absolute;
  top: calc(75% - 20px);
  color: #fff;
  font-family: 'Oswald';
  font-weight: bold;
  font-size: 22px;
  text-align: center;
  width: 100px;
  height: 30px;
  border-radius: 50%;
  z-index: 2;
  text-decoration: none;
  opacity: 0.4;
  background: #000;

  @media only screen and (max-width: 800px) {
    width: 50px;
    height: 15px;
    font-size: 14px;
  }
`
