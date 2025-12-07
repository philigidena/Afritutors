import { motion } from 'framer-motion'
import { SplitReveal } from './AnimatedText'

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
            {/* Decorative background elements */}
            <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-accent/[0.02] rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-1/3 left-0 w-[300px] h-[300px] bg-accent/[0.03] rounded-full blur-3xl pointer-events-none" />

            <div className="container-lg mx-auto relative z-10">
                {/* Header */}
                <motion.div
                    className="max-w-2xl mb-16 md:mb-20"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="flex items-center gap-4 mb-6">
                        <motion.div 
                            className="w-12 h-px bg-accent"
                            initial={{ width: 0 }}
                            whileInView={{ width: 48 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        />
                        <p className="text-label">Process</p>
                    </div>
                    <h2 className="text-white uppercase">
                        <SplitReveal>Four Steps To</SplitReveal>{' '}
                        <span className="gradient-text text-glow">Creative Mastery</span>
                    </h2>
                    <p className="text-neutral-500 mt-4 max-w-lg">
                        Your journey from curious learner to creative professional starts here.
                    </p>
                </motion.div>

                {/* Steps - Premium Card Style */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 mb-16 md:mb-24">
                    {steps.map((item, index) => (
                        <motion.div
                            key={index}
                            className="group relative p-5 sm:p-6 rounded-2xl bg-gradient-to-b from-neutral-900/80 to-neutral-900/40 border border-white/[0.06] hover:border-accent/20 backdrop-blur-sm transition-all duration-500"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            whileHover={{ y: -4 }}
                        >
                            {/* Step number badge */}
                            <div className="flex items-center justify-between mb-5">
                                <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-accent/20 to-accent/5 border border-accent/20 flex items-center justify-center group-hover:border-accent/40 group-hover:shadow-lg group-hover:shadow-accent/10 transition-all duration-500">
                                    <span className="text-accent font-bold text-sm sm:text-base">{item.step}</span>
                                </div>
                                {/* Decorative arrow for non-last items */}
                                {index < 3 && (
                                    <div className="hidden lg:flex items-center text-neutral-700 group-hover:text-accent/40 transition-colors">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </div>
                                )}
                            </div>

                            <h3 className="text-white text-base sm:text-lg font-semibold mb-2 group-hover:text-accent transition-colors duration-300">
                                {item.title}
                            </h3>
                            <p className="text-neutral-500 text-xs sm:text-sm leading-relaxed">{item.description}</p>
                            
                            {/* Bottom accent line */}
                            <div className="absolute bottom-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-accent/0 to-transparent group-hover:via-accent/30 transition-all duration-500" />
                        </motion.div>
                    ))}
                </div>

                {/* CTA Section - Film Strip Style */}
                <motion.div
                    id="join"
                    className="rounded-2xl sm:rounded-3xl bg-gradient-to-br from-neutral-900 via-neutral-900/95 to-neutral-800 overflow-hidden border border-white/[0.08] shadow-2xl shadow-black/20 relative"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    {/* Inner glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/[0.03] via-transparent to-transparent pointer-events-none" />
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
