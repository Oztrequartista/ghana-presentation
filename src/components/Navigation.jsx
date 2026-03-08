import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Maximize } from 'lucide-react'

export default function Navigation({ currentSlide, totalSlides, onNext, onPrev, onGoTo, onFullscreen }) {
  return (
    <>
      {currentSlide > 0 && (
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={onPrev}
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-50 p-2 sm:p-3 rounded-full bg-black/40 backdrop-blur-sm border border-white/10 text-white hover:bg-ghana-gold/30 hover:border-ghana-gold/50 transition-all duration-300 group active:scale-95"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform" />
        </motion.button>
      )}

      {currentSlide < totalSlides - 1 && (
        <motion.button
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={onNext}
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-50 p-2 sm:p-3 rounded-full bg-black/40 backdrop-blur-sm border border-white/10 text-white hover:bg-ghana-gold/30 hover:border-ghana-gold/50 transition-all duration-300 group active:scale-95"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform" />
        </motion.button>
      )}

      <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-1.5 sm:gap-2">
        {Array.from({ length: totalSlides }).map((_, i) => (
          <button
            key={i}
            onClick={() => onGoTo(i)}
            className="group relative p-1"
          >
            <motion.div
              className="rounded-full transition-all duration-300"
              animate={{
                width: i === currentSlide ? 32 : 10,
                height: 10,
                backgroundColor: i === currentSlide ? '#FCD116' : 'rgba(255,255,255,0.3)',
              }}
              whileHover={{ backgroundColor: i === currentSlide ? '#FCD116' : 'rgba(255,255,255,0.6)' }}
            />
          </button>
        ))}
      </div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        onClick={onFullscreen}
        className="absolute top-4 right-4 z-50 p-2 rounded-lg bg-black/40 backdrop-blur-sm border border-white/10 text-white/60 hover:text-white hover:bg-ghana-gold/30 transition-all duration-300"
      >
        <Maximize className="w-4 h-4" />
      </motion.button>

      <div className="absolute bottom-4 sm:bottom-6 right-4 sm:right-6 z-50 text-white/30 text-xs sm:text-sm font-poppins">
        {currentSlide + 1} / {totalSlides}
      </div>
    </>
  )
}
