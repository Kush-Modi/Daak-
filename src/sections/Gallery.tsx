import { Section } from '../components/Section';
import interior from '../assets/premium-interior.png';
import food1 from '../assets/viral-bread.png';
import coffee from '../assets/viral-coffee.png';
import { ScaleIn } from '../components/Animation';

export function Gallery() {
    const images = [
        interior,
        food1,
        coffee,
        "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=800&q=80"
    ];

    return (
        <Section className="bg-white">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-cafe-800 mb-4">The Vibe</h2>
                <p className="text-cafe-600">A glimpse into our cozy world.</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {images.map((src, index) => (
                    <ScaleIn
                        key={index}
                        delay={0.1 * index}
                        className={`group relative rounded-xl overflow-hidden shadow-lg ${index === 0 ? 'md:col-span-2 md:row-span-2' : ''}`}
                    >
                        <img
                            src={src}
                            alt={`Gallery image ${index + 1}`}
                            className="w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-700 ease-in-out"
                            style={{ minHeight: index === 0 ? '400px' : '200px' }}
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
                    </ScaleIn>
                ))}
            </div>
        </Section>
    );
}
