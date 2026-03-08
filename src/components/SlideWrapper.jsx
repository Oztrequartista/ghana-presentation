import { AnimatePresence, motion } from 'framer-motion'

const cubeVariants = {
  enter: (direction) => ({
    rotateY: direction > 0 ? 90 : -90,
    opacity: 0,
    scale: 0.8,
    z: -500,
  }),
  center: {
    rotateY: 0,
    opacity: 1,
    scale: 1,
    z: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
  exit: (direction) => ({
    rotateY: direction > 0 ? -90 : 90,
    opacity: 0,
    scale: 0.8,
    z: -500,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
}

export default function SlideWrapper({ currentSlide, direction, slides }) {
  const SlideComponent = slides[currentSlide]?.component

  return (
    <div className="w-full h-full" style={{ perspective: '1200px' }}>
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={cubeVariants}
          initial="enter"
          animate="center"
          exit="exit"
          className="absolute inset-0"
          style={{ transformStyle: 'preserve-3d' }}
        >
          {SlideComponent && <SlideComponent isActive={true} slideIndex={currentSlide} />}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
