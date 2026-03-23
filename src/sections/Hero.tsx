import { Button } from '../components/Button';
import { Clock, Phone, UtensilsCrossed } from 'lucide-react';
import heroBg from '../assets/premium-interior.png';
import { motion } from 'framer-motion';
import { FadeInUp } from '../components/Animation';

export function Hero() {
    return (
        <div className="relative h-screen min-h-[700px] flex items-center justify-center text-center text-white overflow-hidden">
            {/* Background Image with Overlay */}
            <motion.div
                initial={{ scale: 1.2, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 2, ease: 'circOut' }}
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: `url(${heroBg})`,
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-cafe-900/40 backdrop-blur-[1px]" />
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
            </motion.div>

            {/* Content */}
            <div className="relative z-10 px-4 max-w-4xl mx-auto space-y-8">
                <div className="space-y-4">
                    <FadeInUp delay={0.2}>
                        <h1 className="text-5xl md:text-7xl font-bold font-serif tracking-tight text-cafe-50 drop-shadow-lg">
                            Daak Coffee House
                        </h1>
                    </FadeInUp>
                    <FadeInUp delay={0.4}>
                        <p className="text-xl md:text-2xl font-light text-cafe-100 tracking-wide drop-shadow-md">
                            Where coffee meets vibe — Jubilee Hills, Hyderabad.
                        </p>
                    </FadeInUp>
                </div>

                <FadeInUp delay={0.6}>
                    <p className="text-lg md:text-xl text-cafe-200 max-w-2xl mx-auto leading-relaxed drop-shadow-sm">
                        From viral glass-tote coffees to comfort eats and a vibe made for friends.
                    </p>
                </FadeInUp>

                <FadeInUp delay={0.8}>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                        <Button
                            size="lg"
                            className="w-full sm:w-auto gap-2 bg-mustard text-cafe-900 hover:bg-yellow-500 border-none transition-all duration-300 transform hover:scale-105"
                            onClick={() => window.location.href = 'tel:+919863636301'}
                        >
                            <Phone className="w-5 h-5" />
                            Call & Reserve
                        </Button>
                        <Button
                            variant="outline"
                            size="lg"
                            className="w-full sm:w-auto gap-2 border-cafe-100 text-cafe-100 hover:bg-cafe-50 hover:text-cafe-900 transition-all duration-300 transform hover:scale-105"
                            onClick={() => window.open('https://www.zomato.com/hyderabad/daak-coffee-house-jubilee-hills', '_blank')}
                        >
                            <UtensilsCrossed className="w-5 h-5" />
                            Check Out Menu
                        </Button>
                    </div>
                </FadeInUp>

                <FadeInUp delay={1} duration={0.8}>
                    <div className="pt-8 flex items-center justify-center gap-2 text-cafe-200 text-sm md:text-base font-medium opacity-80">
                        <Clock className="w-4 h-4" />
                        <span>Open daily · 8:00 AM – 11:59 PM</span>
                    </div>
                </FadeInUp>
            </div>
        </div>
    );
}
