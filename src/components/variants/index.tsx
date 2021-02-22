export const parentVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      staggerChildren: 1,
      duration: 1,
      type: 'ease'
    }
  }
}

export const titleEffectVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 3, type: 'ease-out' },
    rotate: 360
  }
}

export const imageVariants = {
  hidden: { scale: 0 },
  visible: {
    scale: 1,
    x: 0,
    transition: {
      duration: 1,
      type: 'ease',
      delay: 3
    }
  }
}

export const LogoVariantB = {
  hidden: { y: 30, x: 0, opacity: 0 },
  start: {
    opacity: 0.5,

    x: 0,
    y: 30,

    transition: {
      duration: 3,
      delay: 2,
      repeat: Infinity,
      ease: 'linear'
    }
  }
}

export const LogoVariantC = {
  hidden: { y: -50, x: 0, opacity: 0 },
  start: {
    opacity: 0.5,
    rotate: 270,

    y: 700,
    x: 0,
    transition: {
      duration: 12,
      repeat: Infinity,
      ease: 'linear'
    }
  }
}

export const LogoVariantD = {
  hidden: { y: 450, x: -100, opacity: 0 },
  start: {
    opacity: 0.5,
    rotate: 360,

    x: 600,

    transition: {
      duration: 12,
      repeat: Infinity,
      ease: 'linear'
    }
  }
}

export const triangleEvariant = {
  hidden: { y: 500, x: -400, opacity: 0.9 },
  start: {
    opacity: 0,
    rotate: 360,
    y: 0,
    x: 0,

    transition: {
      duration: 14,
      repeat: Infinity,
      ease: 'linear'
    }
  }
}

export const triangleFvariant = {
  hidden: { y: 0, x: 0, opacity: 0.9 },
  start: {
    opacity: 0,
    rotate: 360,
    y: 500,
    x: -400,

    transition: {
      duration: 14,
      repeat: Infinity,
      ease: 'linear'
    }
  }
}
