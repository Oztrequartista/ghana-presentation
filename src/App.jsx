import { useState, useMemo } from 'react'
import Slideshow from './components/Slideshow'
import ParticleField from './components/ParticleField'

import TitleSlide from './slides/TitleSlide'
import HistorySlide from './slides/HistorySlide'
import GeographySlide from './slides/GeographySlide'
import CultureSlide from './slides/CultureSlide'
import FoodSlide from './slides/FoodSlide'
import MusicSlide from './slides/MusicSlide'
import FunFactsSlide from './slides/FunFactsSlide'
import PhotosSlide from './slides/PhotosSlide'
import ThankYouSlide from './slides/ThankYouSlide'

const slides = [
  { component: TitleSlide, name: 'Discover Ghana' },
  { component: HistorySlide, name: 'History & Gold Coast' },
  { component: GeographySlide, name: 'Geography' },
  { component: CultureSlide, name: 'Culture & Traditions' },
  { component: FoodSlide, name: 'Food' },
  { component: MusicSlide, name: 'Music & Dance' },
  { component: FunFactsSlide, name: 'Fun Facts' },
  { component: PhotosSlide, name: 'Photos' },
  { component: ThankYouSlide, name: 'Thank You' },
]

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const isHistorySlide = currentSlide === 1

  return (
    <div className="w-full h-screen bg-black overflow-hidden relative font-poppins">
      <ParticleField grayscale={isHistorySlide} />
      <div className="relative z-10 w-full h-full">
        <Slideshow slides={slides} onSlideChange={setCurrentSlide} />
      </div>
    </div>
  )
}
