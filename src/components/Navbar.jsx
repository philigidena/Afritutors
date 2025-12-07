import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Courses', href: '#courses' },
        { name: 'Process', href: '#process' },
    ]

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-neutral-950/95 backdrop-blur-xl border-b border-white/5' : 'bg-transparent'
            }`}>
            <div className="container-lg mx-auto px-6 md:px-12 lg:px-24">
                <div className="flex items-center justify-between h-20 md:h-24">
                    {/* Logo - BIGGER */}
                    <a href="/" className="relative z-10">
                        <img
                            src="/Afri_tutors_logo_white.png"
                            alt="AfriTutors"
                            className="h-12 md:h-14 w-auto"
                        />
                    </a>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-10">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-sm font-medium text-neutral-400 hover:text-white transition-colors duration-200"
                            >
                                {link.name}
                            </a>
                        ))}
                        <a href="#join" className="btn-primary text-sm py-3 px-6">
                            Get Early Access
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden relative z-10 p-2"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <div className="w-6 flex flex-col gap-1.5">
                            <span className={`block h-0.5 bg-white transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
                            <span className={`block h-0.5 bg-white transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''}`} />
                            <span className={`block h-0.5 bg-white transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                        </div>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 bg-neutral-950 z-40 md:hidden"
                    >
                        <div className="flex flex-col items-center justify-center h-full gap-8">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-3xl font-medium text-white"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </a>
                            ))}
                            <a
                                href="#join"
                                className="btn-primary mt-4"
                                onClick={() => setIsOpen(false)}
                            >
                                Get Early Access
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    )
}

export default Navbar
