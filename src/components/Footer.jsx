import { motion } from 'framer-motion'

const Footer = () => {
    const currentYear = new Date().getFullYear()

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

    return (
        <footer className="section-sm bg-neutral-950 border-t border-white/5 relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute top-0 left-1/4 w-[300px] h-[300px] bg-accent/5 rounded-full blur-3xl pointer-events-none" />

            <div className="container-lg mx-auto relative z-10">
                {/* Main Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">
                    {/* Brand */}
                    <div className="lg:col-span-2">
                        <motion.a
                            href="/"
                            className="block mb-6"
                            whileHover={{ scale: 1.02 }}
                        >
                            <img
                                src="/Afri_tutors_logo_white.png"
                                alt="AfriTutors"
                                loading="lazy"
                                className="h-14 w-auto"
                            />
                        </motion.a>
                        <p className="text-neutral-500 max-w-xs mb-6 leading-relaxed">
                            Ethiopia's first studio-quality creative education platform. Learn from the best, become the best.
                        </p>

                        {/* Social - Premium */}
                        <div className="flex gap-3 mb-6">
                            {socials.map((social, i) => (
                                <motion.a
                                    key={i}
                                    href="#"
                                    className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-sm text-neutral-400 hover:bg-accent hover:border-accent hover:text-neutral-950 transition-all duration-300"
                                    whileHover={{ scale: 1.1, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {social.icon}
                                </motion.a>
                            ))}
                        </div>

                        {/* Powered By Afrohub - Premium */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
                            <span className="text-xs text-neutral-500">Powered by</span>
                            <span className="text-accent font-bold text-sm">Afrohub</span>
                        </div>
                    </div>

                    {/* Links */}
                    {Object.entries(links).map(([title, items]) => (
                        <div key={title}>
                            <p className="font-semibold text-white mb-5">{title}</p>
                            <ul className="space-y-3">
                                {items.map((item) => (
                                    <li key={item}>
                                        <motion.a
                                            href="#"
                                            className="text-neutral-500 hover:text-accent transition-colors duration-300 text-sm inline-block"
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

                {/* Border */}
                <div className="gold-border mb-8" />

                {/* Bottom - Premium */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-neutral-600">
                        © {currentYear} AfriTutors. All rights reserved.
                    </p>
                    <p className="text-sm text-neutral-600 flex items-center gap-2">
                        Made with <motion.span
                            className="text-accent"
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 1, repeat: Infinity }}
                        >♥</motion.span> in Ethiopia
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
