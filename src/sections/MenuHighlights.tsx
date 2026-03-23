import { Section } from '../components/Section';
import { Button } from '../components/Button';
import { ArrowRight } from 'lucide-react';
import food1 from '../assets/viral-bread.png';
import coffeeImg from '../assets/viral-coffee.png';
import { FadeInUp } from '../components/Animation';

export function MenuHighlights() {
    const highlights = [
        {
            title: "XXXL Tote-Bag Coffee",
            desc: "Our viral sensation! A massive glass-bag coffee that's perfect for sharing (and for your feed).",
            image: coffeeImg
        },
        {
            title: "Viral Tissue Bread",
            desc: "Buttery, flaky tissue bread made of hundreds of paper-thin layers. A must-try dessert experience.",
            image: food1
        },
        {
            title: "Comfort Meals",
            desc: "From loaded sandwiches to hearty pasta bowls. Comfort food done right with premium ingredients.",
            image: "https://images.unsplash.com/photo-1546549032-9571cd6b27df?auto=format&fit=crop&w=800&q=80"
        }
    ];

    return (
        <Section className="bg-cafe-50" id="menu">
            <FadeInUp className="text-center mb-12 space-y-4">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-cafe-800">Menu Highlights</h2>
                <p className="text-cafe-600 max-w-2xl mx-auto">
                    Trending now at Daak. Try our signature items that everyone is talking about.
                </p>
            </FadeInUp>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {highlights.map((item, index) => (
                    <FadeInUp key={index} delay={0.2 * (index + 1)}>
                        <div className="group bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 border border-cafe-100/50 hover:-translate-y-2">
                            <div className="h-56 overflow-hidden">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                                />
                            </div>
                            <div className="p-6 space-y-3">
                                <h3 className="text-xl font-bold text-cafe-800 font-serif group-hover:text-mustard transition-colors duration-300">
                                    {item.title}
                                </h3>
                                <p className="text-cafe-600 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        </div>
                    </FadeInUp>
                ))}
            </div>

            <FadeInUp className="text-center mt-12" delay={0.4}>
                <Button variant="outline" className="gap-2 group hover:bg-mustard hover:text-cafe-900 transition-all duration-300">
                    View Full Menu <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </Button>
            </FadeInUp>
        </Section>
    );
}
