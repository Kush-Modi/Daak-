import { Section } from '../components/Section';
import { Button } from '../components/Button';
import { MapPin, Navigation } from 'lucide-react';

export function Location() {
    return (
        <Section className="bg-cafe-50 text-center space-y-8">
            <div className="flex justify-center text-mustard mb-4">
                <MapPin className="w-8 h-8" />
            </div>

            <h2 className="text-3xl md:text-4xl font-serif font-bold text-cafe-800">
                Find Us
            </h2>

            <div className="max-w-xl mx-auto space-y-4 text-cafe-700">
                <p className="text-xl font-medium text-cafe-900">Daak Coffee House</p>
                <p className="leading-relaxed">
                    Plot No: 1293, Road No. 63,<br />
                    Jubilee Hills, Hyderabad, Telangana 500033
                </p>
            </div>

            <div className="pt-4">
                <Button
                    onClick={() => window.open('https://www.google.com/maps/search/?api=1&query=Daak+Coffee+House+Jubilee+Hills+Hyderabad', '_blank')}
                    className="gap-2 bg-mustard text-cafe-900 hover:bg-yellow-500 border-none"
                >
                    <Navigation className="w-5 h-5" />
                    Open in Google Maps
                </Button>
            </div>
        </Section>
    );
}
