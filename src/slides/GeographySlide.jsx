import { motion } from 'framer-motion'
import { ParallaxLayer } from '../components/MouseParallax'
import Globe3D from '../components/Globe3D'

const accraImg = 'https://upload.wikimedia.org/wikipedia/commons/f/f0/Accra_Skyline.jpg'

const facts = [
  { label: 'Capital', value: 'Accra' },
  { label: 'Population', value: '~34 Million' },
  { label: 'Official Language', value: 'English' },
  { label: 'Local Languages', value: 'Akan, Twi, Ewe, Ga' },
  { label: 'Region', value: 'West Africa' },
  { label: 'Size', value: '238,535 km²' },
]

export default function GeographySlide({ isActive }) {
  return (
    <div className="relative w-full h-full overflow-hidden bg-black">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0a1628] to-black" />

      <div className="relative z-10 h-full grid grid-cols-1 lg:grid-cols-2 gap-4 items-center px-4 sm:px-8 md:px-16 max-w-7xl mx-auto overflow-y-auto py-12 sm:py-0 sm:overflow-visible">
        <ParallaxLayer depth={0.3}>
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-poppins font-bold text-3xl sm:text-5xl md:text-6xl text-white mb-2"
          >
            Geography
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="font-poppins text-ghana-gold text-sm sm:text-lg mb-4 sm:mb-8"
          >
            A jewel on the Gulf of Guinea
          </motion.p>

          <div className="grid grid-cols-2 gap-3 mb-6">
            {facts.map((fact, i) => (
              <motion.div
                key={fact.label}
                initial={{ opacity: 0, y: 20, rotateX: -20 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
                className="bg-white/5 border border-white/10 rounded-lg p-3 backdrop-blur-sm hover:border-ghana-gold/40 hover:bg-ghana-gold/5 transition-all duration-300"
                style={{ perspective: 600 }}
              >
                <p className="font-poppins text-xs text-white/40 uppercase tracking-wider">{fact.label}</p>
                <p className="font-poppins text-sm text-white font-semibold mt-1">{fact.value}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2 }}
            className="relative rounded-xl overflow-hidden"
          >
            <img src={accraImg} alt="Accra" className="w-full h-28 sm:h-40 object-cover" />
            <div className="absolute inset-0 bg-black/50" />
            <div className="absolute bottom-3 left-4">
              <p className="font-poppins text-sm text-white font-semibold">Accra, Ghana</p>
              <p className="font-poppins text-xs text-white/60">The vibrant capital city</p>
            </div>
          </motion.div>
        </ParallaxLayer>

        <motion.div
          initial={{ opacity: 0, scale: 0.5, rotateY: 90 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ delay: 0.4, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="w-full h-[250px] sm:h-[400px] md:h-[500px]"
        >
          <Globe3D isActive={isActive} />
        </motion.div>
      </div>
    </div>
  )
}
