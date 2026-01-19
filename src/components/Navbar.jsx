import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, ChevronRight } from 'lucide-react';
import logo from '../assets/images/SpeederLogo.png';

// Brand Colors
const BRAND = {
    primary: '#1a2e5a',    // Navy Blue
    accent: '#c41e3a',     // Crimson Red
    light: '#e8ecf4',      // Light Blue tint
};

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    const navLinks = [
        { path: '/', label: 'Home' },
        { path: '/products', label: 'Products' },
        { path: '/about', label: 'About Us' },
        { path: '/contact', label: 'Contact' },
    ];

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 10);
        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => { setIsOpen(false); }, [location]);

    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [isOpen]);

    return (
        <>
            {/* Navbar - White bg, Brand Navy text */}
            <nav
                className="fixed top-0 left-0 right-0 z-50 bg-white border-b"
                style={{ borderColor: BRAND.light, boxShadow: '0 2px 10px rgba(26, 46, 90, 0.08)' }}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16 md:h-20">
                        <Link to="/" className="flex items-center gap-3 shrink-0">
                            <img src={logo} alt="Speeder Network" className="h-10 md:h-12 w-auto object-contain" />
                        </Link>

                        {/* Desktop Nav - Brand Navy text */}
                        <div className="hidden lg:flex items-center gap-1">
                            {navLinks.map((link) => {
                                const isActive = location.pathname === link.path;
                                return (
                                    <Link
                                        key={link.path}
                                        to={link.path}
                                        className="px-4 py-2 font-semibold text-sm rounded-lg transition-all duration-300"
                                        style={isActive
                                            ? { backgroundColor: BRAND.accent, color: '#ffffff' }
                                            : { color: BRAND.primary }
                                        }
                                    >
                                        {link.label}
                                    </Link>
                                );
                            })}
                        </div>

                        {/* Desktop CTA */}
                        <div className="hidden lg:flex items-center gap-4">
                            <a
                                href="tel:+967777540528"
                                className="flex items-center gap-2 text-sm font-semibold transition-colors"
                                style={{ color: BRAND.primary }}
                            >
                                <Phone className="w-4 h-4" />
                                +967 777 540 528
                            </a>
                            <Link
                                to="/contact"
                                className="px-5 py-2.5 text-sm font-semibold text-white rounded-lg transition-all hover:opacity-90"
                                style={{ backgroundColor: BRAND.accent }}
                            >
                                Get Quote
                            </Link>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsOpen(true)}
                            className="lg:hidden p-2 rounded-lg transition-colors"
                            style={{ color: BRAND.primary }}
                        >
                            <Menu className="w-6 h-6" />
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Overlay */}
            {isOpen && <div className="fixed inset-0 bg-black/50 z-40" onClick={() => setIsOpen(false)} />}

            {/* Mobile Drawer */}
            <div
                className={`fixed top-0 right-0 h-full w-72 max-w-[85vw] bg-white z-50 transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
                style={{ boxShadow: '-4px 0 20px rgba(26, 46, 90, 0.15)' }}
            >
                <div className="flex flex-col h-full">
                    <div className="flex items-center justify-between p-4 border-b" style={{ borderColor: BRAND.light }}>
                        <img src={logo} alt="Speeder Network" className="h-10 w-auto" />
                        <button onClick={() => setIsOpen(false)} className="p-2 rounded-lg" style={{ color: BRAND.primary }}>
                            <X className="w-5 h-5" />
                        </button>
                    </div>

                    <nav className="flex-1 p-4 space-y-1">
                        {navLinks.map((link) => {
                            const isActive = location.pathname === link.path;
                            return (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    className="flex items-center justify-between px-4 py-3.5 rounded-xl font-semibold transition-all"
                                    style={isActive
                                        ? { backgroundColor: BRAND.accent, color: '#ffffff' }
                                        : { color: BRAND.primary }
                                    }
                                >
                                    {link.label}
                                    <ChevronRight className="w-4 h-4" style={{ opacity: isActive ? 1 : 0.5 }} />
                                </Link>
                            );
                        })}
                    </nav>

                    <div className="p-4 border-t space-y-3" style={{ borderColor: BRAND.light, backgroundColor: BRAND.light }}>
                        <a
                            href="tel:+967777540528"
                            className="flex items-center justify-center gap-2 py-3 rounded-xl bg-white font-semibold"
                            style={{ color: BRAND.primary, border: `1px solid ${BRAND.light}` }}
                        >
                            <Phone className="w-4 h-4" />
                            +967 777 540 528
                        </a>
                        <Link
                            to="/contact"
                            className="flex items-center justify-center w-full py-3 rounded-xl font-semibold text-white"
                            style={{ backgroundColor: BRAND.accent }}
                        >
                            Get a Quote
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
