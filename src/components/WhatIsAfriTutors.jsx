import { motion } from 'framer-motion'

const WhatIsAfriTutors = () => {
    const features = [
        { label: 'Studio Production', desc: 'Cinema-quality filming', icon: '🎬' },
        { label: 'Local Experts', desc: 'Ethiopian instructors', icon: '👨‍🏫' },
        { label: 'Learn Anywhere', desc: 'Mobile & desktop', icon: '📱' },
        { label: 'Certificates', desc: 'Upon completion', icon: '🎓' },
    ]

    return (
        <section id="about" className="section bg-neutral-950 relative">
            {/* Subtle top border */}
            <div className="absolute top-0 left-0 right-0 gold-border" />

            <div className="container-lg mx-auto">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    {/* Left - Image with premium hover */}
                    <motion.div
                        className="relative aspect-[4/5] rounded-3xl overflow-hidden group"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <img
                            src="/african-mother-and-daughter-having-fun-using-vinta-2025-02-21-13-22-14-utc.jpg"
                            alt="Learning together"
                            loading="lazy"
                            decoding="async"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-neutral-950/20 to-transparent" />

                        {/* Stats Badge - Premium */}
                        <motion.div
                            className="absolute bottom-6 left-6 right-6 bg-neutral-950/90 backdrop-blur-xl rounded-2xl p-6 border border-white/10 glow-sm"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                        >
                            <div className="flex items-center justify-between text-center">
                                <div>
                                    <p className="text-3xl font-semibold text-white">80<span className="text-accent">+</span></p>
                                    <p className="text-xs uppercase tracking-widest text-neutral-500 mt-1">Hours</p>
                                </div>
                                <div className="w-px h-12 bg-gradient-to-b from-transparent via-white/20 to-transparent" />
                                <div>
                                    <p className="text-3xl font-semibold text-white">8</p>
                                    <p className="text-xs uppercase tracking-widest text-neutral-500 mt-1">Courses</p>
                                </div>
                                <div className="w-px h-12 bg-gradient-to-b from-transparent via-white/20 to-transparent" />
                                <div>
                                    <p className="text-3xl font-semibold gradient-text">4K</p>
                                    <p className="text-xs uppercase tracking-widest text-neutral-500 mt-1">Quality</p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Right - Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-px bg-accent" />
                            <p className="text-label">About Us</p>
                        </div>

                        <h2 className="text-white mb-8">
                            Ethiopia's first studio-quality creative{' '}
                            <span className="gradient-text">education platform</span>
                        </h2>

                        <div className="space-y-5 text-body-lg">
                            <p>
                                AfriTutors brings world-class film and creative education to Ethiopia.
                                Our courses are filmed with cinema cameras, professional lighting, and
                                the same production standards used in major film productions.
                            </p>
                            <p>
                                Every lesson is taught by local experts who understand our creative
                                landscape, culture, and industry needs.
                            </p>
                        </div>

                        {/* Features - Premium Grid */}
                        <div className="grid grid-cols-2 gap-6 mt-10 pt-10 border-t border-white/10">
                            {features.map((item, i) => (
                                <motion.div
                                    key={i}
                                    className="group flex items-start gap-3"
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1 * i }}
                                >
                                    <span className="text-2xl">{item.icon}</span>
                                    <div>
                                        <p className="font-medium text-white group-hover:text-accent transition-colors duration-300">
                                            {item.label}
                                        </p>
                                        <p className="text-sm text-neutral-500">{item.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <motion.a
                            href="#courses"
                            className="btn-ghost mt-10 inline-flex group"
                            whileHover={{ x: 5 }}
                        >
                            <span>Explore Courses</span>
                            <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1 duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </motion.a>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default WhatIsAfriTutors
