import { useRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ParallaxLayer } from '../components/MouseParallax'

const facts = [
  { icon: '🥇', title: "Africa's #1 Gold Producer", desc: 'Largest gold producer on the continent, 6th in the world', color: '#FCD116', img: 'https://upload.wikimedia.org/wikipedia/commons/6/61/Mponeng-goudmyn,_Merafong_City-pm,_Wesrand-dm,_a.jpg' },
  { icon: '🍫', title: '2nd Largest Cocoa Producer', desc: '1/3 of the world\'s chocolate starts in Ghana', color: '#8B4513', img: 'https://upload.wikimedia.org/wikipedia/commons/8/83/Mary_Adwoa_Acheampongmaa_02.jpg' },
  { icon: '🌊', title: 'Lake Volta', desc: "World's largest man-made lake by surface area", color: '#1a5276', img: 'https://upload.wikimedia.org/wikipedia/commons/2/28/Photo_of_Lake_Volta_near_the_Afrikiko_Hotel,_Akosombo,_Ghana.jpg' },
  { icon: '🏔️', title: 'Wli Waterfall', desc: "West Africa's tallest waterfall", color: '#006B3F', img: 'https://upload.wikimedia.org/wikipedia/commons/5/55/Kakum_National_Park,_Ghana.jpg' },
  { icon: '⚰️', title: 'Fantasy Coffins', desc: 'Teshie artisans craft coffins shaped like cars, fish, and phones', color: '#CE1126', img: 'https://upload.wikimedia.org/wikipedia/commons/e/e6/Accra_(Ghana)_-_Fantasy_coffins_(adebuu_adekai)_-_4.jpg' },
  { icon: '⚽', title: 'Black Stars', desc: '4x AFCON champions & first African team to reach a World Cup quarter-final (2010)', color: '#000', img: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Black_Stars_(Ghana_national_football_team)_XI.jpg' },
  { icon: '🌿', title: 'Kakum Canopy Walkway', desc: 'One of only 3 canopy walkways in Africa — suspended 40m above the rainforest', color: '#006B3F', img: 'https://upload.wikimedia.org/wikipedia/commons/6/6f/Kakum_Canopy_Walk.jpg' },
  { icon: '🇺🇳', title: 'Kofi Annan', desc: 'Born on a Friday ("Kofi") — former UN Secretary-General', color: '#FCD116', img: 'https://upload.wikimedia.org/wikipedia/commons/1/1b/Kofi_Annan_(2018).jpg' },
]

function CountUp({ target, duration = 2, suffix = '' }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)

  useEffect(() => {
    let start = 0
    const increment = target / (duration * 60)
    const timer = setInterval(() => {
      start += increment
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 1000 / 60)
    return () => clearInterval(timer)
  }, [target, duration])

  return <span ref={ref}>{count}{suffix}</span>
}

const randomDirections = [
  { x: -300, y: -200, rotate: -45 },
  { x: 300, y: -150, rotate: 30 },
  { x: -200, y: 200, rotate: 20 },
  { x: 250, y: 300, rotate: -25 },
  { x: 0, y: -350, rotate: 15 },
  { x: -350, y: 0, rotate: -35 },
  { x: 350, y: 100, rotate: 40 },
  { x: 0, y: 350, rotate: -20 },
]

export default function FunFactsSlide() {
  return (
    <div className="relative w-full h-full overflow-hidden bg-black">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0a0a1a] to-black" />

      <div className="relative z-10 h-full flex flex-col justify-center px-4 sm:px-8 md:px-16 max-w-7xl mx-auto overflow-y-auto py-12 sm:py-0 sm:overflow-visible">
        <ParallaxLayer depth={0.3}>
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-poppins font-bold text-3xl sm:text-5xl md:text-6xl text-white mb-1"
          >
            Fun Facts
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="font-poppins text-ghana-gold text-sm sm:text-lg mb-4 sm:mb-8"
          >
            The surprising side of Ghana
          </motion.p>
        </ParallaxLayer>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {facts.map((fact, i) => (
            <motion.div
              key={fact.title}
              initial={{
                opacity: 0,
                x: randomDirections[i].x,
                y: randomDirections[i].y,
                rotate: randomDirections[i].rotate,
                scale: 0.3,
              }}
              animate={{
                opacity: 1,
                x: 0,
                y: 0,
                rotate: 0,
                scale: 1,
              }}
              transition={{
                delay: 0.3 + i * 0.1,
                duration: 0.8,
                type: 'spring',
                stiffness: 80,
                damping: 15,
              }}
              className="group cursor-pointer"
              style={{ perspective: 800 }}
            >
              <div
                className="relative w-full h-[140px] sm:h-[170px] transition-transform duration-700 group-hover:[transform:rotateY(180deg)]"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div
                  className="absolute inset-0 bg-white/5 border border-white/10 rounded-xl p-3 sm:p-4 backdrop-blur-sm flex flex-col justify-start"
                  style={{ backfaceVisibility: 'hidden' }}
                >
                  <span className="text-2xl sm:text-3xl">{fact.icon}</span>
                  <h3 className="font-poppins font-semibold text-xs sm:text-sm text-white mt-2 sm:mt-3">
                    {fact.title}
                  </h3>
                  <p className="font-poppins text-[10px] sm:text-xs text-white/50 mt-1 line-clamp-3">
                    {fact.desc}
                  </p>
                </div>
                <div
                  className="absolute inset-0 rounded-xl overflow-hidden"
                  style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
                >
                  <img
                    src={fact.img}
                    alt={fact.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50" />
                  <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent">
                    <p className="font-poppins text-xs text-white font-semibold">{fact.title}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="mt-4 sm:mt-8 flex justify-center gap-6 sm:gap-12"
        >
          <div className="text-center">
            <p className="font-poppins font-bold text-2xl sm:text-3xl text-ghana-gold">
              <CountUp target={7} suffix="th" />
            </p>
            <p className="font-poppins text-[10px] sm:text-xs text-white/40 mt-1">Political Stability</p>
          </div>
          <div className="text-center">
            <p className="font-poppins font-bold text-2xl sm:text-3xl text-ghana-green">
              <CountUp target={34} suffix="M" />
            </p>
            <p className="font-poppins text-[10px] sm:text-xs text-white/40 mt-1">Population</p>
          </div>
          <div className="text-center">
            <p className="font-poppins font-bold text-2xl sm:text-3xl text-ghana-red">
              <CountUp target={80} suffix="+" />
            </p>
            <p className="font-poppins text-[10px] sm:text-xs text-white/40 mt-1">Languages</p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
