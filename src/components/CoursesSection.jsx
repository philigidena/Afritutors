import { motion } from 'framer-motion'

const CoursesSection = () => {
    const courses = [
        { title: 'Cinematography', hours: 10, image: '/recording-setup-with-modern-camera-equipment-on-ta-2025-03-16-01-45-22-utc.jpg', color: 'from-amber-500/20' },
        { title: 'Video Editing', hours: 10, image: '/female-photographer-using-computer-2025-03-06-13-39-53-utc.jpg', color: 'from-blue-500/20' },
        { title: 'Scriptwriting', hours: 10, image: '/smiling-mixed-race-businesswoman-sitting-at-desk-u-2025-04-05-04-46-33-utc.jpg', color: 'from-purple-500/20' },
        { title: 'Production', hours: 10, image: '/people-shooting-model-in-studio-2025-01-29-14-49-27-utc.jpg', color: 'from-red-500/20' },
        { title: 'Directing', hours: 10, image: '/creative-checking-the-shot-on-the-monitor-2025-02-10-09-58-15-utc.jpg', color: 'from-green-500/20' },
        { title: 'Mindfulness', hours: 10, image: '/improve-the-skills-and-learning-of-children-by-pla-2025-10-30-21-02-52-utc.jpg', color: 'from-teal-500/20' },
        { title: 'Acting', hours: 10, image: '/image-gen (33).png', color: 'from-pink-500/20' },
        { title: 'Graphics Design', hours: 10, image: '/female-photographer-using-computer-2025-03-06-13-39-53-utc.jpg', color: 'from-orange-500/20' },
    ]

    return (
        <section id="courses" className="section bg-neutral-900 relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl pointer-events-none" />

            <div className="container-lg mx-auto relative z-10">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
                    <motion.div
                        className="max-w-2xl"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-px bg-accent" />
                            <p className="text-label">Courses</p>
                        </div>
                        <h2 className="text-white">
                            8 creative courses to{' '}
                            <span className="gradient-text">master your craft</span>
                        </h2>
                    </motion.div>

                    <motion.p
                        className="text-neutral-400 max-w-md"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        Each course is professionally produced with cinema cameras and taught by industry experts.
                    </motion.p>
                </div>

                {/* Course Grid - Premium */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {courses.map((course, index) => (
                        <motion.div
                            key={index}
                            className="group relative rounded-2xl overflow-hidden cursor-pointer card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.05 }}
                            whileHover={{ y: -5 }}
                        >
                            <div className="relative aspect-[4/3] overflow-hidden">
                                <img
                                    src={course.image}
                                    alt={course.title}
                                    loading="lazy"
                                    decoding="async"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />

                                {/* Gradient overlay with color accent */}
                                <div className={`absolute inset-0 bg-gradient-to-t ${course.color} via-neutral-950/60 to-neutral-950/30 group-hover:opacity-80 transition-opacity duration-500`} />

                                {/* Content */}
                                <div className="absolute inset-0 p-5 flex flex-col justify-between">
                                    {/* Course number */}
                                    <div className="flex justify-between items-start">
                                        <span className="text-accent text-sm font-semibold">0{index + 1}</span>
                                        <motion.div
                                            className="w-10 h-10 rounded-full bg-accent flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
                                            whileHover={{ scale: 1.1 }}
                                        >
                                            <svg className="w-4 h-4 text-neutral-950" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                            </svg>
                                        </motion.div>
                                    </div>

                                    {/* Title and hours */}
                                    <div>
                                        <h3 className="text-white text-xl font-semibold mb-1 group-hover:text-accent transition-colors duration-300">
                                            {course.title}
                                        </h3>
                                        <p className="text-neutral-400 text-sm">{course.hours} credit hours</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom CTA - Premium */}
                <motion.div
                    className="mt-16 pt-16 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-8"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    <div className="flex items-center gap-6">
                        <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center">
                            <span className="text-2xl">🎓</span>
                        </div>
                        <div>
                            <p className="text-white font-medium">Complete all courses</p>
                            <p className="text-neutral-500">Earn <span className="text-accent font-semibold">80+ credit hours</span> and certificates</p>
                        </div>
                    </div>
                    <motion.a
                        href="#join"
                        className="btn-primary"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        Start Learning
                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </motion.a>
                </motion.div>
            </div>
        </section>
    )
}

export default CoursesSection
