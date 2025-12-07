import { motion } from 'framer-motion'

const InfluencerPromo = () => {
    return (
        <section className="section bg-neutral-900 relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl pointer-events-none" />

            {/* Subtle border */}
            <div className="absolute top-0 left-0 right-0 gold-border" />

            <div className="container-lg mx-auto relative z-10">
                {/* Quote Section */}
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        className="flex items-center justify-center gap-4 mb-12"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        <div className="w-12 h-px bg-accent" />
                        <p className="text-label">Testimonials</p>
                        <div className="w-12 h-px bg-accent" />
                    </motion.div>

                    {/* Large Quote - Premium */}
                    <motion.div
                        className="relative mb-12"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        {/* Quote marks */}
                        <span className="absolute -top-8 -left-4 text-8xl text-accent/10 font-serif">"</span>

                        <blockquote className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white leading-tight relative z-10">
                            AfriTutors is changing how we learn creative skills in{' '}
                            <span className="gradient-text">Ethiopia</span>. The production quality is unlike anything I've seen.
                        </blockquote>
                    </motion.div>

                    {/* Avatar Group - Premium */}
                    <motion.div
                        className="flex items-center justify-center gap-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                    >
                        <div className="flex -space-x-3">
                            {['A', 'B', 'S', 'M', 'T'].map((initial, i) => (
                                <motion.div
                                    key={i}
                                    className="w-12 h-12 rounded-full bg-gradient-to-br from-accent/30 to-accent/10 border-2 border-neutral-900 flex items-center justify-center text-accent text-sm font-semibold shadow-lg"
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.4 + i * 0.05 }}
                                >
                                    {initial}
                                </motion.div>
                            ))}
                            <motion.div
                                className="w-12 h-12 rounded-full bg-accent border-2 border-neutral-900 flex items-center justify-center text-neutral-950 text-xs font-bold"
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.7 }}
                            >
                                +99
                            </motion.div>
                        </div>
                        <div className="text-left">
                            <p className="text-white font-semibold">Trusted by creators</p>
                            <p className="text-sm text-neutral-500">Ethiopia's top talent</p>
                        </div>
                    </motion.div>
                </div>

                {/* Divider */}
                <div className="divider my-20" />

                {/* Social Proof - Premium */}
                <motion.div
                    className="text-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    <p className="text-label mb-10">As Featured On</p>
                    <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16">
                        {[
                            { name: 'TikTok', icon: '📱' },
                            { name: 'YouTube', icon: '▶️' },
                            { name: 'Instagram', icon: '📷' },
                            { name: 'Twitter', icon: '🐦' },
                        ].map((platform, i) => (
                            <motion.div
                                key={i}
                                className="flex items-center gap-2 text-neutral-500 hover:text-accent transition-colors duration-300 cursor-pointer group"
                                whileHover={{ scale: 1.05 }}
                            >
                                <span className="text-2xl group-hover:scale-110 transition-transform">{platform.icon}</span>
                                <span className="text-xl font-semibold">{platform.name}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section >
    )
}

export default InfluencerPromo
