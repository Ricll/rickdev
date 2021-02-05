import React from 'react'
import {
  triangleAvariant,
  triangleBvariant,
  triangleCvariant,
  triangleDvariant,
  triangleEvariant,
  triangleFvariant
} from '../variants'
import {
  Container,
  DescriptionContainer,
  DescriptionTextContainer,
  DescriptionTitle,
  DescriptionText,
  ImageContainer,
  TriangleA,
  TriangleB,
  TriangleC,
  TriangleD,
  TriangleE,
  TriangleF,
  UserAvatar
} from './styles'

const HomePage: React.FC = () => {
  return (
    <Container>
      <DescriptionContainer>
        <DescriptionTextContainer>
          <DescriptionTitle>
            Hello, I&apos;m Ricardo!<br></br>
          </DescriptionTitle>
          <DescriptionText>
            A junior web developer who keep learning, continue challenging
            himself, and do interesting things that matter.
          </DescriptionText>
        </DescriptionTextContainer>
      </DescriptionContainer>
      <ImageContainer>
        <TriangleA
          initial="hidden"
          animate="start"
          variants={triangleAvariant}
        />
        <TriangleB
          initial="hidden"
          animate="start"
          variants={triangleBvariant}
        />
        <TriangleC
          initial="hidden"
          animate="start"
          variants={triangleCvariant}
        />

        <TriangleD
          initial="hidden"
          animate="start"
          variants={triangleDvariant}
        />
        <TriangleE
          initial="hidden"
          animate="start"
          variants={triangleEvariant}
        />
        <TriangleF
          initial="hidden"
          animate="start"
          variants={triangleFvariant}
        />
        <UserAvatar src={'/cartoon_profy.png'} />
      </ImageContainer>
    </Container>
  )
}

export default HomePage
