import { motion } from 'framer-motion'
import { SplitReveal } from './AnimatedText'

const InfluencerShowcase = () => {
    return (
        <section className="section bg-neutral-950 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-accent/[0.03] rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent/[0.02] rounded-full blur-3xl pointer-events-none" />

            <div className="container-lg mx-auto relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left - Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <motion.div 
                                className="w-12 h-px bg-accent"
                                initial={{ width: 0 }}
                                whileInView={{ width: 48 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                            />
                            <p className="text-label">Success Story</p>
                        </div>

                        <h2 className="text-white mb-6 uppercase">
                            <SplitReveal>Become the Next</SplitReveal>{' '}
                            <span className="gradient-text text-glow">Big Creator</span>
                        </h2>

                        <div className="space-y-4 mb-8">
                            <p className="text-body-lg">
                                Meet <span className="text-accent font-semibold">Adonay</span> — Ethiopia's most followed TikToker 
                                with millions of fans worldwide. His journey from dreamer to digital star 
                                proves that with the right skills, anyone can make it.
                            </p>
                            <p className="text-neutral-500">
                                Our courses teach you the exact techniques top creators use — 
                                from viral content strategies to professional production quality.
                            </p>
                        </div>

                        {/* Stats */}
                        <div className="flex flex-wrap gap-8 mb-8">
                            <div>
                                <p className="text-3xl sm:text-4xl font-bold text-white">5M<span className="text-accent">+</span></p>
                                <p className="text-sm text-neutral-500 uppercase tracking-wider">Followers</p>
                            </div>
                            <div>
                                <p className="text-3xl sm:text-4xl font-bold text-white">100M<span className="text-accent">+</span></p>
                                <p className="text-sm text-neutral-500 uppercase tracking-wider">Views</p>
                            </div>
                            <div>
                                <p className="text-3xl sm:text-4xl font-bold gradient-text">#1</p>
                                <p className="text-sm text-neutral-500 uppercase tracking-wider">In Ethiopia</p>
                            </div>
                        </div>

                        {/* CTA */}
                        <div className="flex flex-wrap gap-4">
                            <motion.a
                                href="#join"
                                className="btn-primary"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                Start Your Journey
                                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </motion.a>
                            <motion.a
                                href="#courses"
                                className="btn-ghost group"
                                whileHover={{ x: 5 }}
                            >
                                View Courses
                                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </motion.a>
                        </div>
                    </motion.div>

                    {/* Right - Artistic Image Mosaic */}
                    <motion.div
                        className="relative h-[400px] sm:h-[500px] lg:h-[550px]"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        {/* Main large image - hero piece */}
                        <motion.div
                            className="absolute top-[5%] left-[8%] w-[52%] h-[58%] rounded-3xl overflow-hidden shadow-2xl z-[3]"
                            initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
                            whileInView={{ opacity: 1, scale: 1, rotate: -2 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.1 }}
                            whileHover={{ scale: 1.03, rotate: 0, zIndex: 20 }}
                        >
                            <motion.div
                                className="w-full h-full"
                                animate={{ y: [0, -6, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                            >
                                <img src="/optimized/Adonay.webp" alt="Adonay" className="w-full h-full object-cover object-[center_20%]" />
                                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/50 via-transparent to-transparent" />
                                <div className="absolute inset-0 border-2 border-white/10 rounded-3xl" />
                            </motion.div>
                        </motion.div>

                        {/* Top right piece */}
                        <motion.div
                            className="absolute top-0 right-[8%] w-[32%] h-[38%] rounded-2xl overflow-hidden shadow-xl z-[2]"
                            initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
                            whileInView={{ opacity: 1, scale: 1, rotate: 3 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            whileHover={{ scale: 1.05, rotate: 0, zIndex: 20 }}
                        >
                            <motion.div
                                className="w-full h-full"
                                animate={{ y: [0, 8, 0] }}
                                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
                            >
                                <img src="/optimized/Adonay.webp" alt="Adonay" className="w-full h-full object-cover object-[center_15%]" />
                                <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent" />
                                <div className="absolute inset-0 border border-white/10 rounded-2xl" />
                            </motion.div>
                        </motion.div>

                        {/* Right vertical piece */}
                        <motion.div
                            className="absolute top-[42%] right-0 w-[28%] h-[42%] rounded-2xl overflow-hidden shadow-xl z-[1]"
                            initial={{ opacity: 0, scale: 0.9, x: 20 }}
                            whileInView={{ opacity: 1, scale: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.3 }}
                            whileHover={{ scale: 1.05, zIndex: 20 }}
                        >
                            <motion.div
                                className="w-full h-full"
                                animate={{ y: [0, -7, 0] }}
                                transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
                            >
                                <img src="/optimized/Adonay.webp" alt="Adonay" className="w-full h-full object-cover object-[center_30%]" />
                                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/40 to-transparent" />
                                <div className="absolute inset-0 border border-white/10 rounded-2xl" />
                            </motion.div>
                        </motion.div>

                        {/* Bottom left piece */}
                        <motion.div
                            className="absolute bottom-[8%] left-0 w-[38%] h-[32%] rounded-2xl overflow-hidden shadow-xl z-[2]"
                            initial={{ opacity: 0, scale: 0.9, rotate: -3 }}
                            whileInView={{ opacity: 1, scale: 1, rotate: 2 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.35 }}
                            whileHover={{ scale: 1.05, rotate: 0, zIndex: 20 }}
                        >
                            <motion.div
                                className="w-full h-full"
                                animate={{ y: [0, 6, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                            >
                                <img src="/optimized/Adonay.webp" alt="Adonay" className="w-full h-full object-cover object-[center_25%]" />
                                <div className="absolute inset-0 bg-gradient-to-tr from-accent/15 to-transparent" />
                                <div className="absolute inset-0 border border-white/10 rounded-2xl" />
                            </motion.div>
                        </motion.div>

                        {/* Bottom center small piece */}
                        <motion.div
                            className="absolute bottom-0 left-[42%] w-[25%] h-[25%] rounded-xl overflow-hidden shadow-lg z-[1]"
                            initial={{ opacity: 0, scale: 0.8, y: 20 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            whileHover={{ scale: 1.08, zIndex: 20 }}
                        >
                            <motion.div
                                className="w-full h-full"
                                animate={{ y: [0, -5, 0], rotate: [0, 1, 0] }}
                                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                            >
                                <img src="/optimized/Adonay.webp" alt="Adonay" className="w-full h-full object-cover object-[center_20%]" />
                                <div className="absolute inset-0 border border-accent/20 rounded-xl" />
                            </motion.div>
                        </motion.div>

                        {/* Floating small accent piece */}
                        <motion.div
                            className="absolute top-[18%] right-[30%] w-[18%] h-[18%] rounded-xl overflow-hidden shadow-lg z-[4]"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.45 }}
                            whileHover={{ scale: 1.1, zIndex: 20 }}
                        >
                            <motion.div
                                className="w-full h-full"
                                animate={{ y: [0, -10, 0], rotate: [5, 3, 5] }}
                                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                            >
                                <img src="/optimized/Adonay.webp" alt="Adonay" className="w-full h-full object-cover object-[center_10%]" />
                                <div className="absolute inset-0 border-2 border-accent/30 rounded-xl" />
                            </motion.div>
                        </motion.div>

                        {/* Floating TikTok badge */}
                        <motion.div
                            className="absolute bottom-2 left-2 sm:bottom-8 sm:-left-4 bg-neutral-900/95 backdrop-blur-xl rounded-2xl p-3 sm:p-4 border border-white/10 shadow-2xl z-20"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6, duration: 0.5 }}
                        >
                            <motion.div
                                animate={{ y: [0, -5, 0] }}
                                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#ff0050] via-[#00f2ea] to-[#ff0050] flex items-center justify-center">
                                        <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-white font-semibold text-sm">@adonay</p>
                                        <p className="text-accent text-xs">Verified Creator</p>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* Audio waveform decoration */}
                        <motion.div
                            className="absolute top-2 right-2 sm:top-6 sm:right-4 bg-neutral-900/90 backdrop-blur-xl rounded-full px-3 sm:px-4 py-2 border border-white/10 flex items-center gap-2 z-20"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.8, duration: 0.4 }}
                        >
                            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-accent flex items-center justify-center">
                                <svg className="w-3 h-3 sm:w-4 sm:h-4 text-neutral-950 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M8 5v14l11-7z"/>
                                </svg>
                            </div>
                            {/* Animated waveform bars */}
                            <div className="flex items-center gap-[2px]">
                                {[...Array(10)].map((_, i) => (
                                    <motion.div
                                        key={i}
                                        className="w-[2px] sm:w-[3px] bg-accent rounded-full"
                                        animate={{
                                            height: [6, 14 + Math.random() * 6, 6],
                                        }}
                                        transition={{
                                            duration: 0.4 + Math.random() * 0.3,
                                            repeat: Infinity,
                                            delay: i * 0.05,
                                        }}
                                    />
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default InfluencerShowcase
