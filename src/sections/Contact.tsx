import { Section } from '../components/Section';
import { Button } from '../components/Button';
import { Phone, Instagram, MessageCircle } from 'lucide-react';
import { FadeInUp } from '../components/Animation';

export function Contact() {
    const contactItems = [
        { icon: Phone, label: "Call Us", value: "+91 98636 36301", href: "tel:+919863636301" },
        { icon: MessageCircle, label: "WhatsApp", value: "+91 98636 36301", href: "https://wa.me/919863636301" },
        { icon: Instagram, label: "Instagram", value: "@daakcoffee", href: "https://instagram.com/daakcoffee" }
    ];

    return (
        <Section className="bg-white overflow-hidden" id="contact">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
                {/* Contact Info */}
                <div className="space-y-8">
                    <FadeInUp className="space-y-4">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-cafe-800">
                            Get in Touch
                        </h2>
                        <p className="text-cafe-600">
                            Planning a meetup or just want to say hi? Reach out to us!
                        </p>
                    </FadeInUp>

                    <div className="space-y-6">
                        {contactItems.map((item, index) => (
                            <FadeInUp key={index} delay={0.2 * (index + 1)} y={10}>
                                <a 
                                    href={item.href} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-4 text-cafe-800 group"
                                >
                                    <div className="w-12 h-12 rounded-full bg-cafe-100 flex items-center justify-center text-mustard group-hover:bg-mustard group-hover:text-cafe-900 transition-all duration-300">
                                        <item.icon className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-cafe-500 font-medium uppercase tracking-wider">{item.label}</p>
                                        <p className="text-lg font-medium group-hover:text-mustard transition-colors duration-300">{item.value}</p>
                                    </div>
                                </a>
                            </FadeInUp>
                        ))}
                    </div>
                </div>

                {/* Placeholder Form */}
                <FadeInUp delay={0.6} className="bg-cafe-50 p-8 rounded-3xl border border-cafe-100 shadow-sm hover:shadow-md transition-shadow duration-500">
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

                        <Button className="w-full bg-mustard text-cafe-900 hover:bg-yellow-500 transition-all duration-300 transform hover:scale-[1.02] active:scale-95">
                            Send Message
                        </Button>
                        <p className="text-xs text-center text-cafe-400">
                            *This form is currently a placeholder. Please call us directly for urgent reservations.
                        </p>
                    </form>
                </FadeInUp>
            </div>
        </Section>
    );
}
