import { useEffect } from 'react'
import { motion } from 'framer-motion'

const DESTINATION_URL = "https://24games.cl/register?token=seioeqvovmirpgcrktkbmpkkli&affiliateId=503785&"

const RedirectPage = () => {
  useEffect(() => {
    // Redirecionamento após 5 segundos
    const redirectTimer = setTimeout(() => {
      window.location.href = DESTINATION_URL
    }, 5000)

    return () => {
      clearTimeout(redirectTimer)
    }
  }, [])

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
          className="mb-16 md:mb-20"
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

        {/* Espaço */}
        <div className="h-8 md:h-12" />

        {/* Headline com Gradiente */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-8 md:mb-12"
        >
          <h1 
            className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight px-4"
            style={{
              background: 'linear-gradient(to right, #ffffff, #00FF88)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              fontFamily: 'system-ui, -apple-system, sans-serif',
            }}
          >
            Espera para liberar tus giros gratis...
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

export default RedirectPage
