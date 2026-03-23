
import { Instagram, Facebook, Twitter, Coffee } from 'lucide-react';

export function Footer() {
    return (
        <footer className="bg-cafe-900 text-cafe-200 py-20 px-4 border-t border-cafe-800">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
                <div className="space-y-6">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-mustard rounded-lg flex items-center justify-center text-cafe-900">
                            <Coffee className="w-5 h-5" />
                        </div>
                        <h3 className="text-2xl font-serif font-bold text-white tracking-tight">Daak</h3>
                    </div>
                    <p className="text-sm text-cafe-400 leading-relaxed max-w-xs">
                        Where specialty coffee meets communal vibes. Join us in the heart of Jubilee Hills for the viral moments you've been waiting for.
                    </p>
                    <div className="flex items-center gap-4">
                        {[Instagram, Facebook, Twitter].map((Icon, i) => (
                            <a key={i} href="#" className="w-10 h-10 rounded-full border border-cafe-700 flex items-center justify-center hover:bg-mustard hover:text-cafe-900 hover:border-mustard transition-all duration-300">
                                <Icon className="w-5 h-5" />
                            </a>
                        ))}
                    </div>
                </div>

                <div className="space-y-6">
                    <h4 className="text-white font-bold uppercase tracking-widest text-sm">Quick Links</h4>
                    <ul className="space-y-3 text-sm">
                        {['Menu Highlights', 'The Vibe Gallery', 'Location', 'Reservations'].map((link) => (
                            <li key={link}>
                                <a href="#" className="hover:text-mustard transition-colors">{link}</a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="space-y-6">
                    <h4 className="text-white font-bold uppercase tracking-widest text-sm">Join the Club</h4>
                    <p className="text-sm text-cafe-400">Get notified about our new viral drops and weekend specials.</p>
                    <div className="flex gap-2">
                        <input 
                            type="email" 
                            placeholder="your@email.com" 
                            className="bg-cafe-800 border-none rounded-xl px-4 py-2 text-sm focus:ring-2 focus:ring-mustard outline-none w-full"
                        />
                        <button className="bg-mustard text-cafe-900 px-4 py-2 rounded-xl text-sm font-bold hover:bg-white transition-colors">Join</button>
                    </div>
                </div>
            </div>
            
            <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-cafe-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-cafe-500">
                <p>&copy; {new Date().getFullYear()} Daak Coffee House. All rights reserved.</p>
                <p>Designed for the culture of coffee.</p>
            </div>
        </footer>
    );
}
