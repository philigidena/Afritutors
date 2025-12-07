import { motion } from 'framer-motion'

// Animated text component with multiple animation styles
const AnimatedText = ({ 
    children, 
    className = '', 
    type = 'words', // 'words', 'letters', 'lines'
    staggerDelay = 0.03,
    duration = 0.5,
    once = true,
    delay = 0
}) => {
    const text = children

    // Split text into words
    const words = text.split(' ')

    // Container variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: staggerDelay,
                delayChildren: delay
            }
        }
    }

    // Word/letter variants
    const childVariants = {
        hidden: { 
            opacity: 0, 
            y: 20,
            filter: 'blur(8px)'
        },
        visible: { 
            opacity: 1, 
            y: 0,
            filter: 'blur(0px)',
            transition: {
                duration: duration,
                ease: [0.25, 0.46, 0.45, 0.94]
            }
        }
    }

    if (type === 'letters') {
        const letters = text.split('')
        return (
            <motion.span
                className={`inline-block ${className}`}
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once }}
            >
                {letters.map((letter, index) => (
                    <motion.span
                        key={index}
                        className="inline-block"
                        variants={childVariants}
                        style={{ display: letter === ' ' ? 'inline' : 'inline-block' }}
                    >
                        {letter === ' ' ? '\u00A0' : letter}
                    </motion.span>
                ))}
            </motion.span>
        )
    }

    return (
        <motion.span
            className={`inline-block ${className}`}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once }}
        >
            {words.map((word, index) => (
                <motion.span
                    key={index}
                    className="inline-block mr-[0.25em]"
                    variants={childVariants}
                >
                    {word}
                </motion.span>
            ))}
        </motion.span>
    )
}

// Gradient animated text with shimmer
export const GradientText = ({ children, className = '' }) => (
    <motion.span 
        className={`gradient-text ${className}`}
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
    >
        {children}
    </motion.span>
)

// Split reveal animation (words slide up from behind a mask)
export const SplitReveal = ({ children, className = '', delay = 0 }) => {
    const words = children.split(' ')
    
    return (
        <span className={className}>
            {words.map((word, i) => (
                <span key={i} className="inline-block overflow-hidden mr-[0.25em]">
                    <motion.span
                        className="inline-block"
                        initial={{ y: '100%' }}
                        whileInView={{ y: 0 }}
                        viewport={{ once: true }}
                        transition={{ 
                            duration: 0.5, 
                            delay: delay + i * 0.05,
                            ease: [0.33, 1, 0.68, 1]
                        }}
                    >
                        {word}
                    </motion.span>
                </span>
            ))}
        </span>
    )
}

export default AnimatedText

