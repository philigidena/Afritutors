import { useEffect, useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// Konami Code: ↑ ↑ ↓ ↓ ← → ← → B A
const KONAMI_CODE = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'KeyB', 'KeyA']

const EasterEggs = () => {
    const [konamiIndex, setKonamiIndex] = useState(0)
    const [showKonami, setShowKonami] = useState(false)
    const [showConfetti, setShowConfetti] = useState(false)

    const handleKeyDown = useCallback((e) => {
        if (e.code === KONAMI_CODE[konamiIndex]) {
            const nextIndex = konamiIndex + 1
            if (nextIndex === KONAMI_CODE.length) {
                // Konami code completed!
                setShowKonami(true)
                setShowConfetti(true)
                setKonamiIndex(0)
                
                // Hide after 5 seconds
                setTimeout(() => {
                    setShowKonami(false)
                    setShowConfetti(false)
                }, 5000)
            } else {
                setKonamiIndex(nextIndex)
            }
        } else {
            setKonamiIndex(0)
        }
    }, [konamiIndex])

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [handleKeyDown])

    // Generate confetti particles
    const confettiParticles = Array.from({ length: 50 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        delay: Math.random() * 0.5,
        duration: 2 + Math.random() * 2,
        color: ['#C4A052', '#E8D5A3', '#FFD700', '#FFA500', '#FF6B6B'][Math.floor(Math.random() * 5)]
    }))

    return (
        <>
            {/* Konami Code Success Modal */}
            <AnimatePresence>
                {showKonami && (
                    <motion.div
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-neutral-950/90 backdrop-blur-sm"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            className="text-center p-8 rounded-3xl bg-gradient-to-br from-neutral-900 to-neutral-800 border border-accent/30 max-w-md mx-4"
                            initial={{ scale: 0.5, y: 50 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.5, y: 50 }}
                            transition={{ type: 'spring', damping: 15 }}
                        >
                            <motion.div
                                className="text-6xl mb-4"
                                animate={{ rotate: [0, 10, -10, 0] }}
                                transition={{ duration: 0.5, repeat: Infinity }}
                            >
                                🎮
                            </motion.div>
                            <h2 className="text-2xl font-bold text-white mb-2">
                                <span className="gradient-text">Konami Code Activated!</span>
                            </h2>
                            <p className="text-neutral-400 mb-4">
                                You're a true gamer! 🎬 Welcome to the secret club of AfriTutors legends.
                            </p>
                            <div className="flex justify-center gap-2 text-sm text-neutral-500">
                                <span>↑↑↓↓←→←→BA</span>
                            </div>
                            <p className="text-xs text-accent/60 mt-4">
                                — Built by Filmon with 🎬 —
                            </p>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Confetti */}
            <AnimatePresence>
                {showConfetti && (
                    <div className="fixed inset-0 z-[99] pointer-events-none overflow-hidden">
                        {confettiParticles.map((particle) => (
                            <motion.div
                                key={particle.id}
                                className="absolute w-3 h-3 rounded-sm"
                                style={{ 
                                    left: `${particle.x}%`,
                                    backgroundColor: particle.color 
                                }}
                                initial={{ y: -20, opacity: 1, rotate: 0 }}
                                animate={{ 
                                    y: '100vh', 
                                    opacity: 0,
                                    rotate: 360 * (Math.random() > 0.5 ? 1 : -1)
                                }}
                                transition={{ 
                                    duration: particle.duration,
                                    delay: particle.delay,
                                    ease: 'linear'
                                }}
                            />
                        ))}
                    </div>
                )}
            </AnimatePresence>
        </>
    )
}

export default EasterEggs

