import { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ParallaxLayer } from '../components/MouseParallax'

const drumsImg = 'https://upload.wikimedia.org/wikipedia/commons/7/7f/Homowo_Festival_in_Ghana_7.jpg'
const drumsImg2 = 'https://upload.wikimedia.org/wikipedia/commons/2/27/Damba_Festival_16.jpg'

const genres = [
  { name: 'Highlife', desc: 'Born in Ghana in the early 20th century — a fusion of jazz, brass, and traditional rhythms' },
  { name: 'Hiplife', desc: 'Hip-hop meets Highlife — Ghana\'s modern sound, pioneered by Reggie Rockstone' },
  { name: 'Afrobeats', desc: 'Ghana\'s global export — Sarkodie, Stonebwoy, Shatta Wale leading the charge' },
  { name: 'Azonto', desc: 'The dance that took the world by storm — originated in Accra, went viral globally' },
]

function AudioWave() {
  const bars = 40
  return (
    <div className="absolute bottom-0 left-0 right-0 h-32 flex items-end justify-center gap-[3px] opacity-20 pointer-events-none">
      {Array.from({ length: bars }).map((_, i) => (
        <motion.div
          key={i}
          className="w-[6px] rounded-t-full"
          style={{ background: `linear-gradient(to top, #CE1126, #FCD116)` }}
          animate={{
            height: [
              Math.random() * 60 + 10,
              Math.random() * 100 + 20,
              Math.random() * 40 + 10,
              Math.random() * 80 + 15,
            ],
          }}
          transition={{
            duration: 1 + Math.random() * 0.5,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
            delay: i * 0.03,
          }}
        />
      ))}
    </div>
  )
}

export default function MusicSlide() {
  return (
    <div className="relative w-full h-full overflow-hidden bg-black">
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a0000] via-black to-black" />
      <AudioWave />

      <div className="relative z-10 h-full flex flex-col justify-center px-4 sm:px-8 md:px-16 max-w-7xl mx-auto overflow-y-auto py-12 sm:py-0 sm:overflow-visible">
        <ParallaxLayer depth={0.3}>
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-poppins font-bold text-3xl sm:text-5xl md:text-6xl text-white mb-1"
          >
            Music & Dance
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="font-poppins text-ghana-red text-sm sm:text-lg mb-4 sm:mb-8"
          >
            Where rhythm is a way of life
          </motion.p>
        </ParallaxLayer>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8 items-center">
          <div className="space-y-3 sm:space-y-4">
            {genres.map((genre, i) => (
              <motion.div
                key={genre.name}
                initial={{ opacity: 0, x: -60, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{
                  delay: 0.4 + i * 0.15,
                  duration: 0.6,
                  type: 'spring',
                  stiffness: 100,
                }}
                whileHover={{ x: 10, scale: 1.02 }}
                className="bg-white/5 border border-white/10 rounded-xl p-3 sm:p-4 backdrop-blur-sm hover:border-ghana-red/40 transition-all duration-300 cursor-pointer"
              >
                <h3 className="font-poppins font-semibold text-sm sm:text-base text-ghana-gold">
                  {genre.name}
                </h3>
                <p className="font-poppins text-xs sm:text-sm text-white/50 mt-1">
                  {genre.desc}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            <motion.div
              initial={{ opacity: 0, rotateY: 45 }}
              animate={{ opacity: 1, rotateY: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              whileHover={{ rotateY: -5, scale: 1.03 }}
              className="relative rounded-xl overflow-hidden"
              style={{ perspective: 800 }}
            >
              <img src={drumsImg} alt="Traditional Drums" className="w-full h-36 sm:h-56 object-cover" />
              <div className="absolute inset-0 bg-black/40" />
              <p className="absolute bottom-2 left-3 font-poppins text-xs text-white/80">Traditional Drumming</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, rotateY: -45 }}
              animate={{ opacity: 1, rotateY: 0 }}
              transition={{ delay: 1.0, duration: 0.8 }}
              whileHover={{ rotateY: 5, scale: 1.03 }}
              className="relative rounded-xl overflow-hidden"
              style={{ perspective: 800 }}
            >
              <img src={drumsImg2} alt="Drumming Group" className="w-full h-36 sm:h-56 object-cover" />
              <div className="absolute inset-0 bg-black/40" />
              <p className="absolute bottom-2 left-3 font-poppins text-xs text-white/80">Festival Performance</p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
