import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const DESTINATION_URL = "https://24games.cl/register?token=seioeqvovmirpgcrktkbmpkkli&affiliateId=503785&"

const RedirectPage = () => {
  const [dots, setDots] = useState('')
  const [obstacles, setObstacles] = useState([])
  const [shouldJump, setShouldJump] = useState(false)

  useEffect(() => {
    // Animação das reticências
    const dotsInterval = setInterval(() => {
      setDots((prev) => {
        if (prev === '...') return ''
        return prev + '.'
      })
    }, 500)

    // Criar obstáculos periodicamente
    const obstaclesInterval = setInterval(() => {
      setObstacles((prev) => {
        const newObstacle = {
          id: Date.now() + Math.random(),
          createdAt: Date.now(),
        }
        return [...prev, newObstacle].slice(-5) // Manter máximo de 5 obstáculos
      })
    }, 2500)

    // Verificar se personagem deve pular (quando obstáculo está próximo)
    const jumpCheckInterval = setInterval(() => {
      const now = Date.now()
      const shouldTriggerJump = obstacles.some(obs => {
        const elapsed = now - obs.createdAt
        // Obstáculo está na posição certa após ~1.5s (meio do caminho)
        return elapsed > 1400 && elapsed < 1800
      })
      
      if (shouldTriggerJump && !shouldJump) {
        setShouldJump(true)
        setTimeout(() => setShouldJump(false), 500)
      }
    }, 100)

    // Redirecionamento após 5 segundos
    const redirectTimer = setTimeout(() => {
      window.location.href = DESTINATION_URL
    }, 5000)

    return () => {
      clearInterval(dotsInterval)
      clearInterval(obstaclesInterval)
      clearInterval(jumpCheckInterval)
      clearTimeout(redirectTimer)
    }
  }, [obstacles.length])

  return (
    <div className="min-h-screen w-full bg-[#0a0a0a] flex flex-col relative overflow-hidden">
      {/* Background Grid Pixelado */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(#00FF00 1px, transparent 1px),
            linear-gradient(90deg, #00FF00 1px, transparent 1px)
          `,
          backgroundSize: '20px 20px',
          imageRendering: 'pixelated',
        }}
      />

      {/* Conteúdo Principal */}
      <div className="flex-1 flex flex-col items-center justify-center relative z-10 px-4">
        {/* Ícone Slot Machine + Texto */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center gap-6 mb-16"
        >
          {/* Ícone Slot Machine Pixelado */}
          <motion.svg
            width="80"
            height="80"
            viewBox="0 0 80 80"
            className="mb-4"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }}
          >
            {/* Corpo da máquina */}
            <rect x="10" y="20" width="60" height="50" fill="#00FF00" stroke="#0a0a0a" strokeWidth="2" />
            <rect x="15" y="25" width="50" height="40" fill="#0a0a0a" />
            
            {/* Rolos */}
            <rect x="20" y="30" width="12" height="30" fill="#00FF00" stroke="#0a0a0a" strokeWidth="1" />
            <rect x="34" y="30" width="12" height="30" fill="#00FF00" stroke="#0a0a0a" strokeWidth="1" />
            <rect x="48" y="30" width="12" height="30" fill="#00FF00" stroke="#0a0a0a" strokeWidth="1" />
            
            {/* Símbolos nos rolos */}
            <circle cx="26" cy="40" r="3" fill="#0a0a0a" />
            <circle cx="40" cy="40" r="3" fill="#0a0a0a" />
            <circle cx="54" cy="40" r="3" fill="#0a0a0a" />
            
            {/* Alavanca */}
            <rect x="70" y="35" width="8" height="20" fill="#8B5CF6" stroke="#0a0a0a" strokeWidth="1" />
            <circle cx="74" cy="30" r="4" fill="#8B5CF6" stroke="#0a0a0a" strokeWidth="1" />
          </motion.svg>

          {/* Texto com Reticências Animadas */}
          <div className="flex items-center gap-2">
            <h1 
              className="text-white text-lg md:text-xl lg:text-2xl font-pixel"
              style={{ 
                fontFamily: "'Press Start 2P', monospace",
                textShadow: '0 0 10px #00FF00, 0 0 20px #00FF00',
                lineHeight: '1.8',
              }}
            >
              Espera para liberar tus giros gratis
            </h1>
            <div className="flex gap-1">
              {[0, 1, 2].map((index) => (
                <motion.span
                  key={index}
                  className="text-white text-lg md:text-xl lg:text-2xl"
                  style={{ fontFamily: "'Press Start 2P', monospace" }}
                  animate={{
                    y: index === dots.length - 1 ? [-4, 0] : 0,
                  }}
                  transition={{
                    duration: 0.3,
                    repeat: Infinity,
                    delay: index * 0.2,
                    ease: 'easeOut',
                  }}
                >
                  {index < dots.length ? '.' : ''}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Cena de Jogo 2D (Rodapé - 30% inferior) */}
      <div className="h-[30vh] relative overflow-hidden border-t-2 border-[#00FF00]">
        {/* Chão que se move */}
        <motion.div
          className="absolute bottom-0 left-0 w-full h-4 bg-[#00FF00]"
          style={{
            boxShadow: '0 -2px 10px #00FF00',
          }}
          animate={{
            x: ['0%', '-100%'],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          {/* Padrão de chão pixelado */}
          <div 
            className="w-[200%] h-full"
            style={{
              backgroundImage: 'repeating-linear-gradient(90deg, #00FF00 0px, #00FF00 20px, #0a0a0a 20px, #0a0a0a 40px)',
            }}
          />
        </motion.div>

        {/* Personagem Pixelado */}
        <motion.div
          className="absolute bottom-4 left-[10%] z-20"
          animate={{
            y: [0, -2, 0],
          }}
          transition={{
            duration: 0.3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          {/* Animação de pulo quando obstáculo se aproxima */}
          <motion.div
            animate={{
              y: shouldJump ? [-30, 0] : 0,
            }}
            transition={{
              duration: 0.4,
              ease: 'easeOut',
            }}
            className="relative"
          >
            {/* Cabeça */}
            <div className="w-6 h-6 bg-white border-2 border-[#0a0a0a] mb-0.5" />
            {/* Corpo */}
            <div className="w-6 h-8 bg-[#00FF00] border-2 border-[#0a0a0a] relative">
              {/* Olhos */}
              <div className="absolute top-1 left-1 w-1 h-1 bg-[#0a0a0a]" />
              <div className="absolute top-1 right-1 w-1 h-1 bg-[#0a0a0a]" />
            </div>
            {/* Pernas */}
            <div className="flex gap-1">
              <div className="w-2 h-4 bg-white border border-[#0a0a0a]" />
              <div className="w-2 h-4 bg-white border border-[#0a0a0a]" />
            </div>
          </motion.div>
        </motion.div>

        {/* Obstáculos */}
        {obstacles.map((obstacle) => (
          <motion.div
            key={obstacle.id}
            className="absolute bottom-4 right-0 z-10"
            initial={{ x: '100%' }}
            animate={{ x: '-20%' }}
            transition={{
              duration: 3,
              ease: 'linear',
              repeat: 0,
            }}
            onAnimationComplete={() => {
              setObstacles((prev) => prev.filter((obs) => obs.id !== obstacle.id))
            }}
          >
            {/* Espinho/Obstáculo Pixelado */}
            <div className="relative">
              {/* Base */}
              <div className="w-4 h-4 bg-[#8B5CF6] border-2 border-[#0a0a0a]" />
              {/* Pico superior */}
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[4px] border-r-[4px] border-b-[6px] border-l-transparent border-r-transparent border-b-[#8B5CF6]" />
              {/* Brilho */}
              <div className="absolute top-0.5 left-0.5 w-1 h-1 bg-white opacity-80" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default RedirectPage
