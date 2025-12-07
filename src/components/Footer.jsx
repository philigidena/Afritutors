import { motion } from 'framer-motion'
import { useState } from 'react'

const Footer = () => {
    const currentYear = new Date().getFullYear()
    const [easterEggTriggered, setEasterEggTriggered] = useState(false)
    const [clickCount, setClickCount] = useState(0)

    // Easter egg: Triple click on "Philocom" reveals a message
    const handlePhilocomClick = () => {
        const newCount = clickCount + 1
        setClickCount(newCount)
        if (newCount >= 3) {
            setEasterEggTriggered(true)
            setTimeout(() => {
                setEasterEggTriggered(false)
                setClickCount(0)
            }, 3000)
        }
    }

    const links = {
        Courses: ['Cinematography', 'Video Editing', 'Scriptwriting', 'Production'],
        Company: ['About', 'Careers', 'Press', 'Contact'],
        Legal: ['Privacy', 'Terms', 'Cookies'],
    }

    const socials = [
        { icon: '𝕏', label: 'Twitter' },
        { icon: '◎', label: 'Instagram' },
        { icon: '▶', label: 'YouTube' },
        { icon: '♪', label: 'TikTok' },
    ]

    // Subtle Phi (Φ) SVG pattern - golden color
    const phiPattern = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64' width='64' height='64'%3E%3Ccircle cx='32' cy='32' r='14' fill='none' stroke='%23C4A052' stroke-width='2' opacity='0.03'/%3E%3Crect x='30' y='12' width='4' height='40' rx='1' fill='%23C4A052' opacity='0.03'/%3E%3C/svg%3E")`

    return (
        <footer className="section-sm bg-neutral-950 relative overflow-hidden">
            {/* Subtle Phi Pattern Background */}
            <div 
                className="absolute inset-0 pointer-events-none opacity-60"
                style={{ 
                    backgroundImage: phiPattern,
                    backgroundSize: '80px 80px',
                    backgroundPosition: 'center',
                }}
            />
            
            {/* Background glow */}
            <div className="absolute top-0 left-1/4 w-[300px] h-[300px] bg-accent/5 rounded-full blur-3xl pointer-events-none" />

            <div className="container-lg mx-auto relative z-10">
                {/* Main Grid */}
                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-8 mb-12 md:mb-16">
                    {/* Brand */}
                    <div className="col-span-2 lg:col-span-2">
                        <motion.a
                            href="/"
                            className="block mb-4 sm:mb-6"
                            whileHover={{ scale: 1.02 }}
                        >
                            <img
                                src="/Afri_tutors_logo_white.png"
                                alt="AfriTutors"
                                loading="lazy"
                                className="h-10 sm:h-14 w-auto"
                            />
                        </motion.a>
                        <p className="text-neutral-500 max-w-xs mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                            Ethiopia's first studio-quality creative education platform. Learn from the best, become the best.
                        </p>

                        {/* Social - Premium */}
                        <div className="flex gap-2 sm:gap-3 mb-4 sm:mb-6">
                            {socials.map((social, i) => (
                                <motion.a
                                    key={i}
                                    href="#"
                                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-xs sm:text-sm text-neutral-400 hover:bg-accent hover:border-accent hover:text-neutral-950 transition-all duration-300"
                                    whileHover={{ scale: 1.1, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {social.icon}
                                </motion.a>
                            ))}
                        </div>

                        {/* Powered By Afrohub - Premium */}
                        <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-white/5 border border-white/10">
                            <span className="text-[10px] sm:text-xs text-neutral-500">Powered by</span>
                            <span className="text-accent font-bold text-xs sm:text-sm">Afrohub</span>
                        </div>
                    </div>

                    {/* Links */}
                    {Object.entries(links).map(([title, items]) => (
                        <div key={title}>
                            <p className="font-semibold text-white mb-3 sm:mb-5 text-sm sm:text-base">{title}</p>
                            <ul className="space-y-2 sm:space-y-3">
                                {items.map((item) => (
                                    <li key={item}>
                                        <motion.a
                                            href="#"
                                            className="text-neutral-500 hover:text-accent transition-colors duration-300 text-xs sm:text-sm inline-block"
                                            whileHover={{ x: 3 }}
                                        >
                                            {item}
                                        </motion.a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Subtle spacing */}
                <div className="mb-8" />

                {/* Bottom - Premium */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4">
                    <p className="text-xs sm:text-sm text-neutral-600">
                        © {currentYear} AfriTutors. All rights reserved.
                    </p>
                    <p className="text-xs sm:text-sm text-neutral-600 flex items-center gap-2">
                        Made with <motion.span
                            className="text-accent"
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 1, repeat: Infinity }}
                        >♥</motion.span> in Ethiopia
                    </p>
                </div>

                {/* Subtle Builder Credit */}
                <div className="mt-8 pt-4 border-t border-white/[0.03] text-center">
                    <p 
                        className="text-[10px] text-neutral-700/50 tracking-wider cursor-default select-none hover:text-neutral-600/60 transition-colors duration-500"
                        onClick={handlePhilocomClick}
                    >
                        Built with precision by <span className="hover:text-accent/40 transition-colors">Filmon</span> · <span className="hover:text-accent/40 transition-colors">Philocom</span>
                    </p>
                    
                    {/* Easter Egg Message */}
                    <motion.p
                        className="text-[9px] text-accent/60 mt-1"
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ 
                            opacity: easterEggTriggered ? 1 : 0, 
                            y: easterEggTriggered ? 0 : -5 
                        }}
                        transition={{ duration: 0.3 }}
                    >
                        ✨ You found the secret! Thanks for exploring ✨
                    </motion.p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
