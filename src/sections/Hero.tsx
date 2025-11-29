import { Button } from '../components/Button';
import { Clock, Phone, UtensilsCrossed } from 'lucide-react';
import heroBg from '../assets/daak-exterior.jpg';

export function Hero() {
    return (
        <div className="relative h-screen min-h-[600px] flex items-center justify-center text-center text-white overflow-hidden">
            {/* Background Image with Overlay */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: `url(${heroBg})`,
                }}
            >
                <div className="absolute inset-0 bg-black/40" />
            </div>

            {/* Content */}
            <div className="relative z-10 px-4 max-w-4xl mx-auto space-y-8 animate-fade-in-up">
                <div className="space-y-4">
                    <h1 className="text-5xl md:text-7xl font-bold font-serif tracking-tight text-cafe-50">
                        Daak Coffee House
                    </h1>
                    <p className="text-xl md:text-2xl font-light text-cafe-100 tracking-wide">
                        Where coffee meets vibe — Jubilee Hills, Hyderabad.
                    </p>
                </div>

                <p className="text-lg md:text-xl text-cafe-200 max-w-2xl mx-auto leading-relaxed">
                    From viral glass-tote coffees to comfort eats and a vibe made for friends.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                    <Button
                        size="lg"
                        className="w-full sm:w-auto gap-2 bg-mustard text-cafe-900 hover:bg-yellow-500 border-none"
                        onClick={() => window.location.href = 'tel:+919863636301'}
                    >
                        <Phone className="w-5 h-5" />
                        Call & Reserve
                    </Button>
                    <Button
                        variant="outline"
                        size="lg"
                        className="w-full sm:w-auto gap-2 border-cafe-100 text-cafe-100 hover:bg-cafe-50 hover:text-cafe-900"
                        onClick={() => window.open('https://www.zomato.com/hyderabad/daak-coffee-house-jubilee-hills', '_blank')}
                    >
                        <UtensilsCrossed className="w-5 h-5" />
                        Check Out Menu
                    </Button>
                </div>

                <div className="pt-8 flex items-center justify-center gap-2 text-cafe-200 text-sm md:text-base font-medium">
                    <Clock className="w-4 h-4" />
                    <span>Open daily · 8:00 AM – 11:59 PM</span>
                </div>
            </div>
        </div>
    );
}
