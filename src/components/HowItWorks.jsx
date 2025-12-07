import { motion } from 'framer-motion'

const HowItWorks = () => {
    const steps = [
        { step: '01', title: 'Join Early Access', description: 'Sign up with your email to be among the first.' },
        { step: '02', title: 'Get Notified', description: 'We\'ll notify you when courses are ready.' },
        { step: '03', title: 'Start Learning', description: 'Access studio-quality courses on any device.' },
        { step: '04', title: 'Earn Certificate', description: 'Complete courses and receive your certificate.' },
    ]

    // Using optimized WebP images for performance
    const leftImages = [
        '/optimized/african-mother-and-daughter-having-fun-using-vinta-2025-02-21-13-22-14-utc.webp',
        '/optimized/film_strip_1_1765132585039.webp',
        '/optimized/smiling-mixed-race-businesswoman-sitting-at-desk-u-2025-04-05-04-46-33-utc.webp',
        '/optimized/film_strip_3_1765132639143.webp',
        '/optimized/improve-the-skills-and-learning-of-children-by-pla-2025-10-30-21-02-52-utc.webp',
        '/optimized/film_strip_5_1765132688548.webp',
    ]

    const rightImages = [
        '/optimized/film_strip_2_1765132601656.webp',
        '/optimized/image-gen (33).webp',
        '/optimized/film_strip_4_1765132670723.webp',
        '/optimized/people-shooting-model-in-studio-2025-01-29-14-49-27-utc.webp',
        '/optimized/film_strip_6_1765132704957.webp',
        '/optimized/creative-checking-the-shot-on-the-monitor-2025-02-10-09-58-15-utc.webp',
    ]

    return (
        <section id="process" className="section bg-neutral-950 relative overflow-hidden">
            <div className="container-lg mx-auto relative z-10">
                {/* Header */}
                <motion.div
                    className="max-w-2xl mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-px bg-accent" />
                        <p className="text-label">Process</p>
                    </div>
                    <h2 className="text-white">
                        Four steps to{' '}
                        <span className="gradient-text">creative mastery</span>
                    </h2>
                </motion.div>

                {/* Steps */}
                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mb-16 md:mb-24">
                    {steps.map((item, index) => (
                        <motion.div
                            key={index}
                            className="group relative"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                        >
                            <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-neutral-800 to-neutral-900 border border-white/10 flex items-center justify-center mb-4 sm:mb-6 group-hover:border-accent/50 group-hover:shadow-lg group-hover:shadow-accent/10 transition-all duration-500">
                                <span className="text-accent font-semibold text-sm sm:text-lg">{item.step}</span>
                            </div>

                            <h3 className="text-white text-base sm:text-xl mb-2 sm:mb-3 group-hover:text-accent transition-colors duration-300">
                                {item.title}
                            </h3>
                            <p className="text-neutral-500 text-xs sm:text-sm leading-relaxed">{item.description}</p>

                            {index < 3 && (
                                <div className="hidden lg:block absolute top-8 left-[calc(100%+1rem)] w-[calc(100%-2rem)] h-px bg-gradient-to-r from-white/10 to-transparent" />
                            )}
                        </motion.div>
                    ))}
                </div>

                {/* CTA Section - Film Strip Style */}
                <motion.div
                    id="join"
                    className="rounded-3xl bg-gradient-to-br from-neutral-900 via-neutral-900 to-neutral-800 overflow-hidden border border-white/5 glow"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="grid lg:grid-cols-5 gap-0">
                        {/* Left - Content (3 columns) */}
                        <div className="lg:col-span-3 p-6 sm:p-8 md:p-12 lg:p-14 flex flex-col justify-center">
                            <motion.p
                                className="text-label mb-4"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                            >
                                Join Now
                            </motion.p>

                            <h2 className="text-white text-2xl sm:text-3xl md:text-4xl mb-3 md:mb-4">
                                READY TO <span className="gradient-text">START</span>?
                            </h2>
                            <p className="text-neutral-400 mb-6 md:mb-8 max-w-md text-sm md:text-base">
                                Join our early access list and be the first to know when we launch.
                                Get exclusive access to high-quality educational content from international 
                                experts and Ethiopia's top creative professionals.
                            </p>

                            {/* Email Form */}
                            <form className="flex flex-col sm:flex-row gap-3 max-w-md">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="flex-1 px-4 sm:px-5 py-3 sm:py-4 rounded-full bg-neutral-950/80 border border-white/10 text-white placeholder-neutral-500 focus:border-accent transition-all duration-300 text-sm sm:text-base"
                                    required
                                />
                                <button type="submit" className="btn-primary whitespace-nowrap text-sm sm:text-base py-3 sm:py-4">
                                    Get Started
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </button>
                            </form>

                            <p className="text-[10px] sm:text-xs text-neutral-600 mt-3 sm:mt-4">
                                ✓ No spam &nbsp; ✓ Free forever &nbsp; ✓ Cancel anytime
                            </p>
                        </div>

                        {/* Right - Film Strip (2 columns) - INFINITE SEAMLESS */}
                        <div className="hidden lg:flex lg:col-span-2 gap-1 p-4 h-[400px] overflow-hidden">
                            {/* Left column - scrolls UP */}
                            <div className="flex-1 film-strip-wrapper">
                                <div className="film-strip-track scroll-up">
                                    {/* Triple the images for truly seamless loop */}
                                    {[...leftImages, ...leftImages, ...leftImages, ...leftImages].map((img, i) => (
                                        <div key={i} className="film-strip-image" style={{ marginBottom: '4px' }}>
                                            <img src={img} alt="AfriTutors" loading="lazy" />
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Right column - scrolls DOWN */}
                            <div className="flex-1 film-strip-wrapper">
                                <div className="film-strip-track scroll-down">
                                    {/* Triple the images for truly seamless loop */}
                                    {[...rightImages, ...rightImages, ...rightImages, ...rightImages].map((img, i) => (
                                        <div key={i} className="film-strip-image" style={{ marginBottom: '4px' }}>
                                            <img src={img} alt="AfriTutors" loading="lazy" />
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Gradient overlays */}
                            <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-neutral-900 to-transparent z-10 pointer-events-none" />
                            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-neutral-800 to-transparent z-10 pointer-events-none" />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default HowItWorks
