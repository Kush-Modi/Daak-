import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { Coffee, Menu, X } from 'lucide-react';

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Menu', href: '#menu' },
        { name: 'Gallery', href: '#gallery' },
        { name: 'The Vibe', href: '#vibe' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                isScrolled 
                ? 'py-4 bg-cafe-50/80 backdrop-blur-md shadow-lg border-b border-cafe-100' 
                : 'py-6 bg-transparent'
            }`}
        >
            <motion.div
                className="absolute top-0 left-0 right-0 h-[3px] bg-mustard origin-left z-50"
                style={{ scaleX }}
            />
            <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
                <a href="#" className="flex items-center gap-2 group">
                    <div className="w-10 h-10 bg-mustard rounded-xl flex items-center justify-center text-cafe-900 group-hover:rotate-12 transition-transform duration-300">
                        <Coffee className="w-6 h-6" />
                    </div>
                    <span className={`text-2xl font-serif font-bold tracking-tight transition-colors ${
                        isScrolled ? 'text-cafe-900' : 'text-white'
                    }`}>
                        Daak
                    </span>
                </a>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className={`text-sm font-medium uppercase tracking-widest hover:text-mustard transition-colors ${
                                isScrolled ? 'text-cafe-700' : 'text-cafe-50'
                            }`}
                        >
                            {link.name}
                        </a>
                    ))}
                    <button className="bg-mustard text-cafe-900 px-6 py-2 rounded-full text-sm font-bold hover:bg-white hover:text-mustard transition-all duration-300 shadow-md hover:shadow-xl active:scale-95">
                        Reserve Now
                    </button>
                </div>

                {/* Mobile Toggle */}
                <button 
                    className={`md:hidden p-2 transition-colors ${isScrolled ? 'text-cafe-900' : 'text-white'}`}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-cafe-50 border-b border-cafe-100 overflow-hidden"
                    >
                        <div className="flex flex-col p-4 gap-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-cafe-800 font-medium py-2 px-4 hover:bg-cafe-100 rounded-lg"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </a>
                            ))}
                            <button className="w-full bg-mustard text-cafe-900 py-3 rounded-xl font-bold shadow-sm">
                                Reserve Table
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
