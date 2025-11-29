import { Section } from '../components/Section';
import { MapPin, Utensils, Wallet, Users } from 'lucide-react';

export function InfoCard() {
    const items = [
        {
            icon: MapPin,
            title: "Location",
            desc: "Plot 1293, Road 63, Jubilee Hills, Hyderabad 500033"
        },
        {
            icon: Utensils,
            title: "Vibe",
            desc: "Trendy Café, Viral Desserts, Coffee House"
        },
        {
            icon: Wallet,
            title: "Cost",
            desc: "₹500–₹700 for two (approx.)"
        },
        {
            icon: Users,
            title: "Good For",
            desc: "Hangouts, Coffee Dates, Instagram Photos"
        }
    ];

    return (
        <Section className="bg-white rounded-3xl shadow-xl -mt-12 relative z-20 mx-4 md:mx-auto max-w-6xl border border-cafe-100">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {items.map((item, index) => (
                    <div key={index} className="flex flex-col items-center text-center space-y-3 p-4 hover:bg-cafe-50 rounded-xl transition-colors duration-300">
                        <div className="p-3 bg-cafe-100 rounded-full text-mustard">
                            <item.icon className="w-6 h-6" />
                        </div>
                        <h3 className="font-serif font-bold text-lg text-cafe-800">{item.title}</h3>
                        <p className="text-cafe-600 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                ))}
            </div>
        </Section>
    );
}
