import { motion } from 'framer-motion'

const photos = [
  { url: 'https://upload.wikimedia.org/wikipedia/commons/4/4a/Independence_Arch_-_Accra%2C_Ghana1.jpg', label: 'Independence Arch, Accra' },
  { url: 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Cape_Coast_Castle,_Cape_Coast,_Ghana.JPG', label: 'Cape Coast Castle' },
  { url: 'https://upload.wikimedia.org/wikipedia/commons/f/f0/Accra_Skyline.jpg', label: 'Accra Skyline' },
  { url: 'https://upload.wikimedia.org/wikipedia/commons/4/40/Kente_fashion_in_Ghana.jpg', label: 'Kente Fashion' },
  { url: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Ghana_Jollof_Rice_with_Chicken.jpg', label: 'Jollof Rice' },
  { url: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/Elmina_Castle_-_Ghana.jpg', label: 'Elmina Castle' },
  { url: 'https://upload.wikimedia.org/wikipedia/commons/9/9e/Kwame_Nkrumah_Memorial_Park_%26_Mausoleum_4.jpg', label: 'Nkrumah Mausoleum' },
  { url: 'https://upload.wikimedia.org/wikipedia/commons/8/83/Mary_Adwoa_Acheampongmaa_02.jpg', label: 'Cocoa Drying' },
  { url: 'https://upload.wikimedia.org/wikipedia/commons/7/7f/Homowo_Festival_in_Ghana_7.jpg', label: 'Homowo Festival' },
]

const depths = [0.8, 1.2, 0.6, 1.0, 0.7, 1.1, 0.9, 0.5, 1.3]

export default function PhotosSlide() {
  return (
    <div className="relative w-full h-full overflow-hidden bg-black">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-black to-[#0a0a0a]" />

      <div className="relative z-10 h-full flex flex-col justify-center items-center px-4 sm:px-8">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-poppins font-bold text-2xl sm:text-4xl md:text-5xl text-white mb-4 sm:mb-8 text-center"
        >
          Ghana in <span className="text-ghana-gold">Pictures</span>
        </motion.h2>

        <div className="grid grid-cols-3 gap-2 sm:gap-3 max-w-5xl w-full">
          {photos.map((photo, i) => (
            <motion.div
              key={i}
              initial={{
                opacity: 0,
                scale: 0.3,
                z: -500 * depths[i],
                rotateY: (Math.random() - 0.5) * 60,
                rotateX: (Math.random() - 0.5) * 40,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                z: 0,
                rotateY: 0,
                rotateX: 0,
              }}
              transition={{
                delay: 0.2 + i * 0.12,
                duration: 1,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{
                scale: 1.15,
                z: 100,
                rotateY: 5,
                zIndex: 50,
                transition: { duration: 0.3 },
              }}
              className="relative group rounded-xl overflow-hidden cursor-pointer"
              style={{
                perspective: 1000,
                transformStyle: 'preserve-3d',
                aspectRatio: i === 0 || i === 4 || i === 8 ? '1' : '4/3',
              }}
            >
              <img
                src={photo.url}
                alt={photo.label}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="w-full p-3 bg-gradient-to-t from-black/80 to-transparent">
                  <p className="font-poppins text-xs text-white font-medium">{photo.label}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
