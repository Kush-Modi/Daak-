import { Section } from '../components/Section';
import { Button } from '../components/Button';
import { ArrowRight } from 'lucide-react';
import food1 from '../assets/daak-food-1.jpg';
import food2 from '../assets/daak-food-2.jpg';

export function MenuHighlights() {
    const highlights = [
        {
            title: "XXXL Tote-Bag Coffee",
            desc: "Our viral sensation! A massive glass-bag coffee that's perfect for sharing (and for your feed).",
            image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" // Placeholder for viral coffee if no specific image
        },
        {
            title: "Tissue Bread & Desserts",
            desc: "Buttery, flaky tissue bread and rich cheesecakes. The perfect sweet treat to pair with your brew.",
            image: food1
        },
        {
            title: "Comfort Meals",
            desc: "From loaded sandwiches to hearty pasta bowls. Comfort food done right.",
            image: food2
        }
    ];

    return (
        <Section className="bg-cafe-50" id="menu">
            <div className="text-center mb-12 space-y-4">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-cafe-800">Menu Highlights</h2>
                <p className="text-cafe-600 max-w-2xl mx-auto">
                    Trending now at Daak. Try our signature items that everyone is talking about.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {highlights.map((item, index) => (
                    <div key={index} className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-cafe-100">
                        <div className="h-48 overflow-hidden">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                            />
                        </div>
                        <div className="p-6 space-y-4">
                            <h3 className="text-xl font-bold text-cafe-800 font-serif">{item.title}</h3>
                            <p className="text-cafe-600 text-sm leading-relaxed">{item.desc}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="text-center mt-12">
                <Button variant="outline" className="gap-2">
                    View Full Menu <ArrowRight className="w-4 h-4" />
                </Button>
            </div>
        </Section>
    );
}
