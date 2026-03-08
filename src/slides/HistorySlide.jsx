import { motion } from 'framer-motion'
import { ParallaxLayer } from '../components/MouseParallax'

const capeCoastImg = 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Cape_Coast_Castle,_Cape_Coast,_Ghana.JPG'
const nkrumahImg = 'https://upload.wikimedia.org/wikipedia/commons/9/9e/Kwame_Nkrumah_Memorial_Park_%26_Mausoleum_4.jpg'

const timelineEvents = [
  { year: '1471', text: 'Portuguese arrive on the Gold Coast, beginning European trade in gold and timber' },
  { year: '1482', text: 'Elmina Castle built — the first European structure in sub-Saharan Africa' },
  { year: '1874', text: 'Britain declares the Gold Coast a Crown Colony' },
  { year: '1957', text: 'Ghana becomes the first sub-Saharan African nation to gain independence' },
  { year: '2019', text: 'Year of Return — 400 years since 1619, diaspora welcomed home' },
]

function FlipCard({ front, back, delay = 0 }) {
  return (
    <motion.div
      initial={{ rotateY: 180, opacity: 0 }}
      animate={{ rotateY: 0, opacity: 1 }}
      transition={{ delay, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="relative group"
      style={{ perspective: 1000 }}
    >
      <div className="relative w-full transition-transform duration-700 group-hover:[transform:rotateY(180deg)]"
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div className="relative" style={{ backfaceVisibility: 'hidden' }}>
          {front}
        </div>
        <div className="absolute inset-0 flex items-center justify-center p-4 bg-black/90 border border-white/20 rounded-xl"
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        >
          {back}
        </div>
      </div>
    </motion.div>
  )
}

export default function HistorySlide() {
  return (
    <div className="relative w-full h-full overflow-hidden" style={{ filter: 'grayscale(100%)' }}>
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${capeCoastImg})` }}
      />
      <div className="absolute inset-0 bg-black/70" />

      <div className="relative z-10 h-full flex flex-col justify-center px-4 sm:px-8 md:px-16 max-w-7xl mx-auto overflow-y-auto py-12 sm:py-0 sm:overflow-visible">
        <ParallaxLayer depth={0.3}>
          <motion.h2
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="font-poppins font-bold text-3xl sm:text-5xl md:text-6xl text-white mb-2"
          >
            The Gold Coast
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="font-poppins text-sm sm:text-lg text-white/60 mb-6 sm:mb-10 italic"
          >
            From colonial rule to the birth of a nation
          </motion.p>
        </ParallaxLayer>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="space-y-4">
            {timelineEvents.map((event, i) => (
              <motion.div
                key={event.year}
                initial={{ opacity: 0, x: -40, rotateY: -15 }}
                animate={{ opacity: 1, x: 0, rotateY: 0 }}
                transition={{ delay: 0.5 + i * 0.15, duration: 0.6 }}
                className="flex gap-4 items-start group"
                style={{ perspective: 800 }}
              >
                <span className="font-poppins font-bold text-base sm:text-xl text-white/90 min-w-[50px] sm:min-w-[60px] group-hover:text-white transition-colors">
                  {event.year}
                </span>
                <div className="flex-1 border-l border-white/20 pl-4 group-hover:border-white/50 transition-colors">
                  <p className="font-poppins text-sm text-white/70 group-hover:text-white/90 transition-colors">
                    {event.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            <FlipCard
              delay={0.8}
              front={
                <div className="relative rounded-xl overflow-hidden">
                  <img src={capeCoastImg} alt="Cape Coast Castle" className="w-full h-32 sm:h-48 object-cover" />
                  <div className="absolute inset-0 bg-black/40" />
                  <p className="absolute bottom-2 left-3 font-poppins text-xs text-white/80">Cape Coast Castle</p>
                </div>
              }
              back={
                <p className="font-poppins text-xs text-white/80 text-center">
                  UNESCO World Heritage Site. The "Door of No Return" — where enslaved Africans took their last steps on home soil.
                </p>
              }
            />
            <FlipCard
              delay={1.0}
              front={
                <div className="relative rounded-xl overflow-hidden">
                  <img src={nkrumahImg} alt="Kwame Nkrumah Memorial" className="w-full h-32 sm:h-48 object-cover" />
                  <div className="absolute inset-0 bg-black/40" />
                  <p className="absolute bottom-2 left-3 font-poppins text-xs text-white/80">Nkrumah Memorial</p>
                </div>
              }
              back={
                <p className="font-poppins text-xs text-white/80 text-center">
                  Kwame Nkrumah — born on a Saturday ("Kwame"). Pan-Africanist visionary who led Ghana to freedom on March 6, 1957.
                </p>
              }
            />
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="mt-4 sm:mt-8 p-3 sm:p-4 border border-white/10 rounded-xl bg-white/5 backdrop-blur-sm"
        >
          <p className="font-poppins text-sm text-white/60 text-center italic">
            "We face neither East nor West; we face forward." — Kwame Nkrumah
          </p>
        </motion.div>
      </div>
    </div>
  )
}
