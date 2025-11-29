import { Section } from '../components/Section';
import { Button } from '../components/Button';
import { Phone, Instagram, MessageCircle } from 'lucide-react';

export function Contact() {
    return (
        <Section className="bg-white" id="contact">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
                {/* Contact Info */}
                <div className="space-y-8">
                    <div className="space-y-4">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-cafe-800">
                            Get in Touch
                        </h2>
                        <p className="text-cafe-600">
                            Planning a meetup or just want to say hi? Reach out to us!
                        </p>
                    </div>

                    <div className="space-y-6">
                        <div className="flex items-center gap-4 text-cafe-800">
                            <div className="w-12 h-12 rounded-full bg-cafe-100 flex items-center justify-center text-mustard">
                                <Phone className="w-6 h-6" />
                            </div>
                            <div>
                                <p className="text-sm text-cafe-500 font-medium uppercase tracking-wider">Call Us</p>
                                <p className="text-lg font-medium">+91 98636 36301</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 text-cafe-800">
                            <div className="w-12 h-12 rounded-full bg-cafe-100 flex items-center justify-center text-mustard">
                                <MessageCircle className="w-6 h-6" />
                            </div>
                            <div>
                                <p className="text-sm text-cafe-500 font-medium uppercase tracking-wider">WhatsApp</p>
                                <p className="text-lg font-medium">+91 98636 36301</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 text-cafe-800">
                            <div className="w-12 h-12 rounded-full bg-cafe-100 flex items-center justify-center text-mustard">
                                <Instagram className="w-6 h-6" />
                            </div>
                            <div>
                                <p className="text-sm text-cafe-500 font-medium uppercase tracking-wider">Instagram</p>
                                <p className="text-lg font-medium">@daakcoffee</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Placeholder Form */}
                <div className="bg-cafe-50 p-8 rounded-3xl border border-cafe-100">
                    <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                        <div className="space-y-2">
                            <label htmlFor="name" className="text-sm font-medium text-cafe-700">Name</label>
                            <input
                                type="text"
                                id="name"
                                className="w-full px-4 py-3 rounded-xl border border-cafe-200 focus:ring-2 focus:ring-mustard focus:border-transparent outline-none transition-all bg-white"
                                placeholder="Your Name"
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="phone" className="text-sm font-medium text-cafe-700">Phone</label>
                            <input
                                type="tel"
                                id="phone"
                                className="w-full px-4 py-3 rounded-xl border border-cafe-200 focus:ring-2 focus:ring-mustard focus:border-transparent outline-none transition-all bg-white"
                                placeholder="Your Phone Number"
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-medium text-cafe-700">Message</label>
                            <textarea
                                id="message"
                                rows={4}
                                className="w-full px-4 py-3 rounded-xl border border-cafe-200 focus:ring-2 focus:ring-mustard focus:border-transparent outline-none transition-all bg-white resize-none"
                                placeholder="Tell us about your plans..."
                            />
                        </div>

                        <Button className="w-full bg-mustard text-cafe-900 hover:bg-yellow-500">Send Message</Button>
                        <p className="text-xs text-center text-cafe-400">
                            *This form is currently a placeholder. Please call us directly for urgent reservations.
                        </p>
                    </form>
                </div>
            </div>
        </Section>
    );
}
