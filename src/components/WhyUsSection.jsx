import { motion } from 'framer-motion'

const WhyUsSection = () => {
    const features = [
        { title: 'Studio-Grade Production', description: 'Cinema cameras, Steadicam, professional lighting.', icon: '🎥' },
        { title: 'Ethiopian Instructors', description: 'Local experts who understand our creative landscape.', icon: '🇪🇹' },
        { title: 'Learn Anywhere', description: 'Access courses on any device, any time.', icon: '💻' },
        { title: 'Affordable Access', description: 'Quality education at prices for Ethiopian learners.', icon: '💰' },
        { title: 'Beginner Friendly', description: 'Start from zero, become professional.', icon: '🚀' },
        { title: 'Earn Certificates', description: 'Complete courses and earn certificates.', icon: '🎓' },
    ]

    return (
        <section className="section bg-neutral-950 relative overflow-hidden">
            {/* Background gradient */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl pointer-events-none" />

            {/* Subtle borders */}
            <div className="absolute top-0 left-0 right-0 gold-border" />
            <div className="absolute bottom-0 left-0 right-0 gold-border" />

            <div className="container-lg mx-auto relative z-10">
                {/* Header */}
                <motion.div
                    className="max-w-3xl mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-px bg-accent" />
                        <p className="text-label">Why AfriTutors</p>
                    </div>
                    <h2 className="text-white">
                        We're building something{' '}
                        <span className="gradient-text">different</span>
                    </h2>
                </motion.div>

                {/* Features Grid - Premium */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px sm:gap-1 bg-white/5 rounded-2xl sm:rounded-3xl overflow-hidden">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            className="bg-neutral-950 p-5 sm:p-8 group relative hover:bg-neutral-900/50 transition-all duration-500"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.05 }}
                        >
                            {/* Number watermark */}
                            <p className="text-4xl sm:text-5xl font-bold text-white/[0.03] absolute top-3 sm:top-4 right-3 sm:right-4">
                                0{index + 1}
                            </p>

                            {/* Icon */}
                            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-accent/10 flex items-center justify-center mb-4 sm:mb-5 group-hover:scale-110 transition-transform duration-300">
                                <span className="text-xl sm:text-2xl">{feature.icon}</span>
                            </div>

                            <h3 className="text-white text-base sm:text-xl mb-2 sm:mb-3 group-hover:text-accent transition-colors duration-300">
                                {feature.title}
                            </h3>
                            <p className="text-neutral-500 text-xs sm:text-sm leading-relaxed">
                                {feature.description}
                            </p>

                            {/* Bottom accent line */}
                            <div className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-accent to-transparent w-0 group-hover:w-full transition-all duration-500" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default WhyUsSection
