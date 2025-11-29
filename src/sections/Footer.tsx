
export function Footer() {
    return (
        <footer className="bg-cafe-900 text-cafe-200 py-12 px-4">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-center md:text-left">
                    <h3 className="text-2xl font-serif font-bold text-white mb-2">Daak Coffee House</h3>
                    <p className="text-sm text-cafe-400">Jubilee Hills, Hyderabad</p>
                </div>

                <div className="text-center md:text-right text-sm space-y-2">
                    <p>&copy; {new Date().getFullYear()} Daak Coffee House. All rights reserved.</p>
                    <p className="text-cafe-500">Designed with <span className="text-red-400">♥</span> for coffee lovers.</p>
                </div>
            </div>
        </footer>
    );
}
