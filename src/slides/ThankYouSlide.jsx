import { motion } from 'framer-motion'
import { Canvas } from '@react-three/fiber'
import BlackStar3D from '../components/BlackStar3D'

export default function ThankYouSlide() {
  return (
    <div className="relative w-full h-full overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at center, #1a1a1a 0%, #000 70%)',
        }}
      />

      <div className="absolute inset-0 opacity-30"
        style={{
          background: `
            linear-gradient(135deg, #CE112620 0%, transparent 40%),
            linear-gradient(225deg, #FCD11620 0%, transparent 40%),
            linear-gradient(315deg, #006B3F20 0%, transparent 40%)
          `,
        }}
      />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] sm:w-[300px] sm:h-[300px]">
        <Canvas camera={{ position: [0, 0, 2], fov: 50 }} dpr={[1, 2]}>
          <ambientLight intensity={0.5} />
          <pointLight position={[5, 5, 5]} intensity={1} color="#FCD116" />
          <pointLight position={[-5, -5, -5]} intensity={0.5} color="#CE1126" />
          <BlackStar3D pulse />
        </Canvas>
      </div>

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2
            className="font-poppins font-black text-5xl sm:text-7xl md:text-8xl leading-none"
            style={{
              background: 'linear-gradient(135deg, #CE1126 0%, #FCD116 50%, #006B3F 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              filter: 'drop-shadow(0 0 40px rgba(252, 209, 22, 0.2))',
            }}
          >
            Medaase
          </h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="font-poppins text-lg sm:text-2xl text-white/60 mt-4 font-light"
          >
            Thank You
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1.2, duration: 0.8, ease: 'easeOut' }}
          className="mt-8 h-1 w-32 rounded-full"
          style={{ background: 'linear-gradient(90deg, #CE1126, #FCD116, #006B3F)' }}
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.6 }}
          className="mt-8 space-y-2"
        >
          <p className="font-poppins text-lg text-white/50">
            Questions?
          </p>
          <p className="font-poppins text-sm text-white/30 italic">
            "The spirit of Ghana lives in every one of us."
          </p>
        </motion.div>

        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full"
            style={{
              background: ['#CE1126', '#FCD116', '#006B3F'][i % 3],
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 0.6, 0],
              scale: [0, 1, 0],
              y: [0, -100 - Math.random() * 200],
            }}
            transition={{
              delay: 2 + i * 0.1,
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              repeatDelay: Math.random() * 3,
            }}
          />
        ))}
      </div>
    </div>
  )
}
