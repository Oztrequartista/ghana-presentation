import { useState, useEffect, useCallback, useRef } from 'react'
import SlideWrapper from './SlideWrapper'
import Navigation from './Navigation'

export default function Slideshow({ slides, onSlideChange }) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [direction, setDirection] = useState(1)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const touchStart = useRef(null)
  const touchEnd = useRef(null)
  const minSwipeDistance = 50

  const goToSlide = useCallback((index) => {
    if (isTransitioning || index === currentSlide) return
    if (index < 0 || index >= slides.length) return
    setIsTransitioning(true)
    setDirection(index > currentSlide ? 1 : -1)
    setCurrentSlide(index)
    onSlideChange?.(index)
    setTimeout(() => setIsTransitioning(false), 800)
  }, [currentSlide, slides.length, isTransitioning, onSlideChange])

  const next = useCallback(() => {
    if (currentSlide < slides.length - 1) goToSlide(currentSlide + 1)
  }, [currentSlide, slides.length, goToSlide])

  const prev = useCallback(() => {
    if (currentSlide > 0) goToSlide(currentSlide - 1)
  }, [currentSlide, goToSlide])

  const onTouchStart = (e) => {
    touchEnd.current = null
    touchStart.current = e.targetTouches[0].clientX
  }

  const onTouchMove = (e) => {
    touchEnd.current = e.targetTouches[0].clientX
  }

  const onTouchEnd = () => {
    if (!touchStart.current || !touchEnd.current) return
    const distance = touchStart.current - touchEnd.current
    if (Math.abs(distance) >= minSwipeDistance) {
      if (distance > 0) next()
      else prev()
    }
    touchStart.current = null
    touchEnd.current = null
  }

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault()
        next()
      }
      if (e.key === 'ArrowLeft') {
        e.preventDefault()
        prev()
      }
      if (e.key === 'f' || e.key === 'F') {
        e.preventDefault()
        toggleFullscreen()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [next, prev])

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen()
    } else {
      document.exitFullscreen()
    }
  }

  return (
    <div
      className="relative w-full h-full overflow-hidden bg-black"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <div className="absolute top-0 left-0 right-0 z-50 h-1 bg-black/30">
        <div
          className="h-full transition-all duration-700 ease-out"
          style={{
            width: `${((currentSlide + 1) / slides.length) * 100}%`,
            background: 'linear-gradient(90deg, #CE1126, #FCD116, #006B3F)',
          }}
        />
      </div>

      <SlideWrapper
        currentSlide={currentSlide}
        direction={direction}
        slides={slides}
      />

      <Navigation
        currentSlide={currentSlide}
        totalSlides={slides.length}
        onNext={next}
        onPrev={prev}
        onGoTo={goToSlide}
        onFullscreen={toggleFullscreen}
      />
    </div>
  )
}
