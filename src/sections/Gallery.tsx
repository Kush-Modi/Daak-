import { Section } from '../components/Section';
import exterior from '../assets/daak-exterior.jpg';
import interior from '../assets/daak-interior.jpg';
import food1 from '../assets/daak-food-1.jpg';
import food2 from '../assets/daak-food-2.jpg';

export function Gallery() {
    const images = [
        interior,
        food1,
        exterior,
        food2,
        "https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // Placeholder
        "https://images.unsplash.com/photo-1511920170033-f8396924c348?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"  // Placeholder
    ];

    return (
        <Section className="bg-white">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-cafe-800 mb-4">The Vibe</h2>
                <p className="text-cafe-600">A glimpse into our cozy world.</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {images.map((src, index) => (
                    <div key={index} className={`rounded-xl overflow-hidden ${index === 0 ? 'md:col-span-2 md:row-span-2' : ''}`}>
                        <img
                            src={src}
                            alt={`Gallery image ${index + 1}`}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                            style={{ minHeight: index === 0 ? '400px' : '200px' }}
                        />
                    </div>
                ))}
            </div>
        </Section>
    );
}
