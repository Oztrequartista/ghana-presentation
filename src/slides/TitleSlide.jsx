import { motion } from 'framer-motion'
import { ParallaxLayer } from '../components/MouseParallax'

const bgImage = 'https://upload.wikimedia.org/wikipedia/commons/4/4a/Independence_Arch_-_Accra%2C_Ghana1.jpg'

export default function TitleSlide() {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      />
      <div className="absolute inset-0 bg-black/60" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />

      <ParallaxLayer depth={0.5} className="relative z-10 text-center px-4 sm:px-8">
        <motion.div
          initial={{ rotateX: 90, opacity: 0, y: -100 }}
          animate={{ rotateX: 0, opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          style={{ perspective: 800 }}
        >
          <h1 className="font-poppins font-black text-6xl sm:text-8xl md:text-9xl tracking-tight leading-none"
            style={{
              background: 'linear-gradient(180deg, #FCD116 0%, #CE1126 50%, #006B3F 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: 'none',
              filter: 'drop-shadow(0 0 60px rgba(252, 209, 22, 0.3))',
            }}
          >
            GHANA
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.8, ease: 'easeOut' }}
        >
          <p className="font-poppins text-lg sm:text-2xl md:text-3xl text-white/90 mt-4 font-light tracking-wide">
            The Gateway to Africa
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <p className="font-poppins text-sm sm:text-lg text-ghana-gold mt-4 sm:mt-6 font-medium italic tracking-widest">
            Akwaaba — Welcome
          </p>
        </motion.div>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1.6, duration: 1, ease: 'easeOut' }}
          className="mt-6 sm:mt-8 mx-auto h-1 w-48 rounded-full"
          style={{ background: 'linear-gradient(90deg, #CE1126, #FCD116, #006B3F)' }}
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.8 }}
          className="mt-4 sm:mt-6 max-w-2xl mx-auto"
        >
          <p className="font-poppins text-xs sm:text-sm text-white/50 text-center leading-relaxed mb-4 sm:mb-5">
            The Independence Arch stands in Black Star Square, Accra — commemorating Ghana becoming the first sub-Saharan African nation to gain independence on March 6, 1957.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.2, duration: 0.5 }}
              className="bg-white/5 border border-white/10 rounded-lg p-2 sm:p-3 text-center backdrop-blur-sm"
            >
              <p className="font-poppins text-ghana-gold text-sm sm:text-base font-bold">0° 0°</p>
              <p className="font-poppins text-[9px] sm:text-[10px] text-white/40 mt-0.5">Closest country to where the Prime Meridian meets the Equator</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.4, duration: 0.5 }}
              className="bg-white/5 border border-white/10 rounded-lg p-2 sm:p-3 text-center backdrop-blur-sm"
            >
              <p className="font-poppins text-ghana-gold text-sm sm:text-base font-bold">1957</p>
              <p className="font-poppins text-[9px] sm:text-[10px] text-white/40 mt-0.5">First sub-Saharan African country to gain independence</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.6, duration: 0.5 }}
              className="bg-white/5 border border-white/10 rounded-lg p-2 sm:p-3 text-center backdrop-blur-sm"
            >
              <p className="font-poppins text-ghana-gold text-sm sm:text-base font-bold">7th</p>
              <p className="font-poppins text-[9px] sm:text-[10px] text-white/40 mt-0.5">Most politically stable country globally</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.8, duration: 0.5 }}
              className="bg-white/5 border border-white/10 rounded-lg p-2 sm:p-3 text-center backdrop-blur-sm"
            >
              <p className="font-poppins text-ghana-gold text-sm sm:text-base font-bold">Tema</p>
              <p className="font-poppins text-[9px] sm:text-[10px] text-white/40 mt-0.5">The Greenwich Meridian passes through Tema, 25km from Accra</p>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.2, duration: 1 }}
          className="mt-4 sm:mt-6 flex items-center justify-center gap-2 text-white/40 text-sm"
        >
          <motion.span
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          >
            ↓
          </motion.span>
          <span className="hidden sm:inline">Press arrow keys to navigate</span>
          <span className="sm:hidden">Swipe or tap arrows to navigate</span>
          <motion.span
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          >
            ↓
          </motion.span>
        </motion.div>
      </ParallaxLayer>
    </div>
  )
}
