import { motion } from 'framer-motion'

const ProductionShowcase = () => {
    const equipment = [
        { name: 'Cinema Cameras', desc: 'RED & Blackmagic', icon: '📹' },
        { name: 'Steadicam', desc: 'Smooth movement', icon: '🎬' },
        { name: 'Pro Audio', desc: 'Crystal clear', icon: '🎙️' },
        { name: 'Studio Lighting', desc: 'Film-grade', icon: '💡' },
    ]

    return (
        <section className="section bg-neutral-900 relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl pointer-events-none" />

            <div className="container-lg mx-auto relative z-10">
                {/* Header */}
                <div className="grid lg:grid-cols-2 gap-8 mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-px bg-accent" />
                            <p className="text-label">Production</p>
                        </div>
                        <h2 className="text-white">
                            Shot like a film,{' '}
                            <span className="gradient-text">taught like a masterclass</span>
                        </h2>
                    </motion.div>
                    <motion.div
                        className="lg:flex lg:items-end"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <p className="text-body-lg">
                            We produce cinematic learning experiences using the same equipment
                            and techniques as professional film productions.
                        </p>
                    </motion.div>
                </div>

                {/* Video Showcase - Premium */}
                <motion.div
                    className="relative rounded-3xl overflow-hidden mb-16 glow"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="relative aspect-video bg-neutral-800">
                        <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-cover"
                        >
                            <source src="/Instructor_vid.mp4" type="video/mp4" />
                        </video>

                        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-neutral-950/40" />

                        {/* Play Button - Premium */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <motion.div
                                className="w-24 h-24 rounded-full bg-accent/90 backdrop-blur-sm flex items-center justify-center cursor-pointer group"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <svg className="w-8 h-8 text-neutral-950 ml-1 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M8 5v14l11-7z" />
                                </svg>
                            </motion.div>
                        </div>

                        {/* Info overlay */}
                        <div className="absolute bottom-0 left-0 right-0 p-8 flex justify-between items-end">
                            <div>
                                <p className="text-white text-xl font-semibold mb-1">Behind The Scenes</p>
                                <p className="text-neutral-400">See how we create our courses</p>
                            </div>
                            <div className="bg-accent/20 backdrop-blur-sm px-4 py-2 rounded-full border border-accent/30">
                                <p className="text-accent font-semibold">4K Quality</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Equipment Grid - Premium */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {equipment.map((item, index) => (
                        <motion.div
                            key={index}
                            className="group text-center p-6 rounded-2xl bg-neutral-950/50 border border-white/5 hover:border-accent/30 hover:bg-neutral-950 transition-all duration-300"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                        >
                            <div className="text-4xl mb-4">{item.icon}</div>
                            <p className="font-semibold text-white mb-1 group-hover:text-accent transition-colors duration-300">
                                {item.name}
                            </p>
                            <p className="text-sm text-neutral-500">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ProductionShowcase
