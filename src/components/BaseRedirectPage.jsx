import { motion } from 'framer-motion'

const BaseRedirectPage = ({ 
  title, 
  highlightedText, 
  imagePath = "/images/imagem-central.png",
  imageAlt = "Imagem Central"
}) => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background Degradê Escuro com Verde */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#0a1f13] to-[#000000]" />
      
      {/* Glow Radial Verde Sutil no Centro */}
      <div className="absolute inset-0 bg-gradient-radial from-[#00FF88]/10 via-transparent to-transparent pointer-events-none" />

      {/* Container Principal - Flex Column Centralizado */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full px-4">
        
        {/* Logo (Topo) */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16"
        >
          <img
            src="/images/logo.png"
            alt="24Games Logo"
            className="w-32 md:w-40 h-auto object-contain"
            onError={(e) => {
              e.target.src = "https://via.placeholder.com/160x160/00FF88/0a0a0a?text=24G"
            }}
          />
        </motion.div>

        {/* Imagem Central com Animação de Traçado Verde */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative mb-12 md:mb-16"
        >
          {/* Animação de Traçado Verde que se Expande e Some com Fade */}
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              className="absolute inset-0 rounded-2xl border-2 border-[#00FF88]"
              style={{
                boxShadow: '0 0 20px rgba(0, 255, 136, 0.6)',
              }}
              initial={{
                scale: 1,
                opacity: 0,
              }}
              animate={{
                scale: [1, 1.3, 1.6, 1.8],
                opacity: [0, 0.8, 0.5, 0],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                delay: index * 0.8,
                ease: [0.4, 0, 0.2, 1],
                repeatType: 'loop',
              }}
            />
          ))}

          {/* Imagem com Borda Arredondada e Traçado Verde */}
          <div className="relative rounded-2xl p-1" style={{
            background: 'linear-gradient(135deg, #00FF88, #00FF88)',
            boxShadow: '0 0 20px rgba(0, 255, 136, 0.6), 0 0 40px rgba(0, 255, 136, 0.4)',
          }}>
            <img
              src={imagePath}
              alt={imageAlt}
              className="w-32 h-32 md:w-40 md:h-40 rounded-2xl object-cover border-2 border-[#00FF88]"
              style={{
                boxShadow: 'inset 0 0 20px rgba(0, 255, 136, 0.3)',
              }}
              onError={(e) => {
                e.target.src = "https://via.placeholder.com/160x160/00FF88/0a0a0a?text=IMG"
              }}
            />
          </div>
        </motion.div>

        {/* Espaço */}
        <div className="h-4 md:h-6" />

        {/* Headline com Gradiente */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-8 md:mb-12 px-4"
        >
          <h1 
            className="text-2xl md:text-3xl lg:text-4xl font-extrabold leading-tight"
            style={{
              fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
              letterSpacing: '-0.02em',
              fontWeight: 800,
            }}
          >
            <span className="text-white">{title} </span>
            <motion.span 
              className="inline-block relative"
              style={{
                background: 'linear-gradient(90deg, #ffffff 0%, #ffffff 20%, #00FF88 40%, #00FF88 60%, #ffffff 80%, #ffffff 100%)',
                backgroundSize: '300% 100%',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                filter: 'drop-shadow(0 0 8px rgba(0, 255, 136, 0.5))',
              }}
              animate={{
                backgroundPosition: ['0% 50%', '300% 50%'],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: 'linear',
              }}
            >
              {highlightedText}
            </motion.span>
            <span className="text-white">...</span>
          </h1>
        </motion.div>

        {/* Loading Pulsante Elegante - Três Bolinhas Verdes Neon */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex items-center gap-2 md:gap-3"
        >
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-[#00FF88]"
              style={{
                boxShadow: '0 0 10px #00FF88, 0 0 20px #00FF88',
              }}
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                delay: index * 0.2,
                ease: 'easeInOut',
              }}
            />
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default BaseRedirectPage

