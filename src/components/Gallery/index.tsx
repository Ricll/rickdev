import * as React from 'react'
import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { wrap } from 'popmotion'
import { images, imageLinks } from '../../data'
import { Container, Next, Prev, Image, Link } from './styles'

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 10 : -10,
      opacity: 0
    }
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 10 : -10,
      opacity: 0
    }
  }
}

const swipeConfidenceThreshold = 10000
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity
}

export const Gallery: React.FC = () => {
  const [[page, direction], setPage] = useState([0, 0])
  const imageIndex = wrap(0, images.length, page)
  const imageLinksIndex = wrap(0, imageLinks.length, page)

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection])
  }

  return (
    <Container>
      <AnimatePresence initial={false} custom={direction}>
        <Image
          key={page}
          src={images[imageIndex]}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: 'spring', stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 }
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x)

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1)
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1)
            }
          }}
        />
      </AnimatePresence>
      <Next onClick={() => paginate(1)}>{'‣'}</Next>
      <Prev onClick={() => paginate(-1)}>{'‣'}</Prev>
      <Link key={page} href={imageLinks[imageLinksIndex]}>
        LOOK
      </Link>
    </Container>
  )
}
