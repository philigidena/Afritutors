import { motion } from 'framer-motion'

const Hero = () => {
    return (
        <section className="relative min-h-screen overflow-hidden">
            {/* Video Background */}
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    className="w-full h-full object-cover"
                >
                    <source src="/Hero_section_vid.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/80 via-neutral-950/50 to-neutral-950" />
            </div>

            {/* Content */}
            <div className="relative z-20 min-h-screen flex flex-col justify-center section pb-32">
                <div className="container-lg mx-auto">
                    <div className="max-w-4xl">
                        {/* Label with animated line */}
                        <motion.div
                            className="flex items-center gap-4 mb-8"
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <motion.div
                                className="h-px bg-accent"
                                initial={{ width: 0 }}
                                animate={{ width: 48 }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                            />
                            <p className="text-label">Ethiopia's Creative Academy</p>
                        </motion.div>

                        {/* Headlines with stagger */}
                        <div className="overflow-hidden mb-2">
                            <motion.h1
                                className="uppercase"
                                initial={{ y: "100%" }}
                                animate={{ y: 0 }}
                                transition={{ duration: 0.7, ease: [0.33, 1, 0.68, 1], delay: 0.1 }}
                            >
                                Learn Creative Arts
                            </motion.h1>
                        </div>
                        <div className="overflow-hidden mb-8">
                            <motion.h1
                                className="gradient-text text-glow uppercase"
                                initial={{ y: "100%" }}
                                animate={{ y: 0 }}
                                transition={{ duration: 0.7, ease: [0.33, 1, 0.68, 1], delay: 0.2 }}
                            >
                                From The Best
                            </motion.h1>
                        </div>

                        {/* Subheadline */}
                        <motion.p
                            className="text-body-lg max-w-xl mb-8 md:mb-10"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                        >
                            8 studio-produced courses in cinematography, editing, directing & more.
                            Taught by international experts and Ethiopia's top creative professionals.
                        </motion.p>

                        {/* CTAs */}
                        <motion.div
                            className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-12 md:mb-16"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                        >
                            <motion.a
                                href="#join"
                                className="btn-primary text-center"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                Get Early Access
                                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </motion.a>
                            <motion.a
                                href="#about"
                                className="btn-outline text-center"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                Discover More
                            </motion.a>
                        </motion.div>

                        {/* Stats Row - Premium */}
                        <motion.div
                            className="grid grid-cols-3 gap-4 sm:flex sm:flex-wrap sm:items-center sm:gap-8 md:gap-12 pt-6 md:pt-8"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                        >
                            {[
                                { value: '8', label: 'Courses', suffix: '' },
                                { value: '80', label: 'Hours', suffix: '+' },
                                { value: '4K', label: 'Quality', suffix: '' },
                            ].map((stat, i) => (
                                <motion.div
                                    key={i}
                                    className="flex flex-col sm:flex-row sm:items-baseline gap-0 sm:gap-2"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: 0.7 + i * 0.1 }}
                                >
                                    <p className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white">
                                        {stat.value}<span className="text-accent">{stat.suffix}</span>
                                    </p>
                                    <p className="text-xs sm:text-sm uppercase tracking-wider sm:tracking-widest text-neutral-500">{stat.label}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator - Hidden on very small screens */}
            <motion.div
                className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-20 flex-col items-center gap-2 hidden sm:flex"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
            >
                <motion.div
                    className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center pt-2"
                    animate={{ y: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                >
                    <div className="w-1 h-2 rounded-full bg-accent" />
                </motion.div>
            </motion.div>
        </section>
    )
}

export default Hero
