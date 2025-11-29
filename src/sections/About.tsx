import { Section } from '../components/Section';
import { Coffee } from 'lucide-react';

export function About() {
    return (
        <Section className="text-center space-y-8 bg-cafe-50">
            <div className="flex justify-center text-mustard mb-4">
                <Coffee className="w-8 h-8" />
            </div>

            <h2 className="text-3xl md:text-4xl font-serif font-bold text-cafe-800">
                The Vibe
            </h2>

            <div className="max-w-3xl mx-auto space-y-6 text-lg text-cafe-700 leading-relaxed">
                <p>
                    <span className="font-semibold text-cafe-900">Daak Coffee House</span> brings you a cozy, trendy café experience in the heart of Jubilee Hills. We are known for our viral <span className="text-mustard font-medium">XXXL Tote Bag Coffee</span> and a vibe that's perfect for your Instagram feed.
                </p>
                <p>
                    Whether you're here for our buttery tissue bread, a quick coffee date, or a long hangout with friends, Daak offers a relaxed atmosphere with comfort food and desserts that hit the spot. Not high-brow, just good vibes.
                </p>
            </div>
        </Section>
    );
}
