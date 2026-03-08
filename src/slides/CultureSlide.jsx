import { motion } from 'framer-motion'
import { ParallaxLayer } from '../components/MouseParallax'

const kenteImg = 'https://upload.wikimedia.org/wikipedia/commons/f/fd/Ewe_kente_stripes,_Ghana.jpg'
const festivalImg = 'https://upload.wikimedia.org/wikipedia/commons/4/40/Kente_fashion_in_Ghana.jpg'

const dayNames = [
  { day: 'Monday', male: 'Kojo', female: 'Adjoa' },
  { day: 'Tuesday', male: 'Kwabena', female: 'Abena' },
  { day: 'Wednesday', male: 'Kweku', female: 'Akua' },
  { day: 'Thursday', male: 'Yaw', female: 'Yaa' },
  { day: 'Friday', male: 'Kofi', female: 'Afua' },
  { day: 'Saturday', male: 'Kwame', female: 'Ama' },
  { day: 'Sunday', male: 'Kwesi', female: 'Akosua' },
]

const culturePoints = [
  { title: 'Kente Cloth', desc: 'Handwoven by the Ashanti — each pattern holds symbolic meaning' },
  { title: 'Adinkra Symbols', desc: 'Visual representations of proverbs, values, and concepts' },
  { title: '"Akwaaba" Hospitality', desc: 'Open-door policy — guests are welcome at any hour, no invitation needed' },
  { title: 'Festivals', desc: 'Homowo, Chale Wote, Panafest, Akwasidae — celebrations of harvest, art, and royalty' },
]

export default function CultureSlide() {
  return (
    <div className="relative w-full h-full overflow-hidden bg-black">
      <motion.div
        className="absolute inset-0 opacity-10"
        style={{ backgroundImage: `url(${kenteImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        animate={{ scale: [1, 1.05, 1], rotate: [0, 0.5, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div className="absolute inset-0 bg-black/80" />

      <div className="relative z-10 h-full flex flex-col justify-center px-4 sm:px-8 md:px-16 max-w-7xl mx-auto overflow-y-auto py-12 sm:py-0 sm:overflow-visible">
        <ParallaxLayer depth={0.3}>
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-poppins font-bold text-3xl sm:text-5xl md:text-6xl text-white mb-1"
          >
            Culture & Traditions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="font-poppins text-ghana-gold text-sm sm:text-lg mb-4 sm:mb-8"
          >
            70+ ethnic groups · 80+ languages · One heart
          </motion.p>
        </ParallaxLayer>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {culturePoints.map((point, i) => (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, z: -200, rotateY: -30 }}
                animate={{ opacity: 1, z: 0, rotateY: 0 }}
                transition={{ delay: 0.4 + i * 0.15, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="bg-white/5 border border-white/10 rounded-xl p-3 sm:p-5 backdrop-blur-sm hover:border-ghana-green/50 hover:bg-ghana-green/5 transition-all duration-500 group"
                style={{ perspective: 800 }}
              >
                <h3 className="font-poppins font-semibold text-base text-ghana-gold group-hover:text-ghana-gold transition-colors">
                  {point.title}
                </h3>
                <p className="font-poppins text-sm text-white/60 mt-2 group-hover:text-white/80 transition-colors">
                  {point.desc}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.7 }}
            className="space-y-4"
          >
            <div className="relative rounded-xl overflow-hidden">
              <img src={festivalImg} alt="Kente Fashion" className="w-full h-28 sm:h-40 object-cover" />
              <div className="absolute inset-0 bg-black/40" />
              <p className="absolute bottom-2 left-3 font-poppins text-xs text-white/80">Kente Fashion in Ghana</p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-4 backdrop-blur-sm">
              <h3 className="font-poppins font-semibold text-sm text-ghana-gold mb-3">
                Akan Day Names
              </h3>
              <div className="space-y-1.5">
                {dayNames.map((d, i) => (
                  <motion.div
                    key={d.day}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1 + i * 0.08 }}
                    className="flex justify-between text-xs font-poppins"
                  >
                    <span className="text-white/50">{d.day}</span>
                    <span className="text-white/80">{d.male} / {d.female}</span>
                  </motion.div>
                ))}
              </div>
              <p className="font-poppins text-[10px] text-white/30 mt-3 italic">
                Kwame Nkrumah = born Saturday · Kofi Annan = born Friday
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
