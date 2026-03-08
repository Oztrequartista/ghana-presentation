import { motion } from 'framer-motion'
import { ParallaxLayer } from '../components/MouseParallax'

const foods = [
  {
    name: 'Jollof Rice',
    desc: 'The king of West African dishes — smoky, spicy tomato rice. Ghana vs Nigeria: the eternal debate.',
    img: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Ghana_Jollof_Rice_with_Chicken.jpg',
  },
  {
    name: 'Fufu',
    desc: 'Pounded cassava and plantain — the staple. Served with light soup or groundnut soup.',
    img: 'https://upload.wikimedia.org/wikipedia/commons/e/eb/Ghana_fufu.jpg',
  },
  {
    name: 'Waakye',
    desc: 'Rice and beans cooked with millet leaves, served with shito (black pepper sauce) and spaghetti.',
    img: 'https://upload.wikimedia.org/wikipedia/commons/8/81/Ghanaian_Wache_(Waakye)_cuisine_food.jpg',
  },
  {
    name: 'Kelewele',
    desc: 'Spicy fried plantain cubes — the perfect street food snack, seasoned with ginger and pepper.',
    img: 'https://upload.wikimedia.org/wikipedia/commons/a/ac/Kelewele,_a_Ghanaian_snack.jpg',
  },
  {
    name: 'Banku & Tilapia',
    desc: 'Fermented corn and cassava dough paired with grilled tilapia and hot pepper sauce.',
    img: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Banku_and_Tilapia_1.jpg',
  },
]

export default function FoodSlide() {
  return (
    <div className="relative w-full h-full overflow-hidden bg-black">
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a0a00] via-black to-[#0a1a00]" />

      <div className="relative z-10 h-full flex flex-col justify-center px-4 sm:px-8 md:px-16 max-w-7xl mx-auto overflow-y-auto py-12 sm:py-0 sm:overflow-visible">
        <ParallaxLayer depth={0.3}>
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-poppins font-bold text-3xl sm:text-5xl md:text-6xl text-white mb-1"
          >
            Food
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="font-poppins text-ghana-gold text-sm sm:text-lg mb-4 sm:mb-8"
          >
            A feast for the senses — bold, spicy, unforgettable
          </motion.p>
        </ParallaxLayer>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
          {foods.map((food, i) => (
            <motion.div
              key={food.name}
              initial={{
                opacity: 0,
                rotateZ: Math.random() * 20 - 10,
                y: 100,
                scale: 0.5,
              }}
              animate={{
                opacity: 1,
                rotateZ: 0,
                y: 0,
                scale: 1,
              }}
              transition={{
                delay: 0.3 + i * 0.15,
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{
                scale: 1.08,
                rotateY: 5,
                rotateX: -5,
                z: 50,
                transition: { duration: 0.3 },
              }}
              className="group relative bg-white/5 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-sm hover:border-ghana-red/50 transition-all duration-300 cursor-pointer"
              style={{ perspective: 800, transformStyle: 'preserve-3d' }}
            >
              <div className="relative h-28 sm:h-36 overflow-hidden">
                <img
                  src={food.img}
                  alt={food.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />
              </div>
              <div className="p-3">
                <h3 className="font-poppins font-semibold text-sm text-ghana-gold">
                  {food.name}
                </h3>
                <p className="font-poppins text-[11px] text-white/50 mt-1 group-hover:text-white/70 transition-colors line-clamp-3">
                  {food.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
