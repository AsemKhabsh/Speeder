import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Linkedin, ArrowRight, Network } from 'lucide-react';
import logo from '../assets/images/SpeederLogo.png';

// Brand Colors
const BRAND = {
    primary: '#1a2e5a',
    accent: '#c41e3a',
    gradient: 'linear-gradient(135deg, #0f1c38 0%, #1a2e5a 100%)',
};

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const quickLinks = [
        { label: 'Home', path: '/' },
        { label: 'Products', path: '/products' },
        { label: 'About Us', path: '/about' },
        { label: 'Contact', path: '/contact' },
    ];

    const categories = [
        { label: 'Routers', path: '/products?category=network-devices&subcategory=routers' },
        { label: 'Switches', path: '/products?category=network-devices&subcategory=switches' },
        { label: 'Printers', path: '/products?category=printers' },
        { label: 'Barcode Scanners', path: '/products?category=barcode-scanners' },
    ];

    const socialLinks = [
        { icon: Facebook, href: 'https://www.facebook.com/share/1AT7ZC1Pn6/', label: 'Facebook' },
        { icon: Instagram, href: '#', label: 'Instagram' },
        { icon: Twitter, href: '#', label: 'Twitter' },
        { icon: Linkedin, href: '#', label: 'LinkedIn' },
    ];

    return (
        <footer style={{ background: BRAND.gradient }}>
            {/* Main Footer - White text on brand bg */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
                    {/* Company Info */}
                    <div className="sm:col-span-2 lg:col-span-1">
                        <Link to="/" className="inline-block mb-5">
                            <img src={logo} alt="Speeder Network" className="h-14 w-auto bg-white p-2 rounded-lg" />
                        </Link>
                        <p className="mb-5 leading-relaxed text-sm" style={{ color: 'rgba(255,255,255,0.85)' }}>
                            Speeder Network is your trusted partner for all networking solutions.
                            Quality products and exceptional service for businesses across the region.
                        </p>
                        <div className="flex gap-2">
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-lg flex items-center justify-center transition-all hover:opacity-80"
                                    style={{ backgroundColor: 'rgba(255,255,255,0.1)', color: '#ffffff' }}
                                    aria-label={social.label}
                                >
                                    <social.icon className="w-4 h-4" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links - White text */}
                    <div>
                        <h4 className="text-base font-bold mb-5 flex items-center gap-2" style={{ color: '#ffffff' }}>
                            <span className="w-6 h-0.5" style={{ backgroundColor: BRAND.accent }} />
                            Quick Links
                        </h4>
                        <ul className="space-y-3">
                            {quickLinks.map((link, index) => (
                                <li key={index}>
                                    <Link
                                        to={link.path}
                                        className="text-sm flex items-center gap-2 transition-all hover:translate-x-1 font-medium"
                                        style={{ color: 'rgba(255,255,255,0.85)' }}
                                    >
                                        <ArrowRight className="w-3 h-3 opacity-50" />
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Categories - White text */}
                    <div>
                        <h4 className="text-base font-bold mb-5 flex items-center gap-2" style={{ color: '#ffffff' }}>
                            <span className="w-6 h-0.5" style={{ backgroundColor: BRAND.accent }} />
                            Categories
                        </h4>
                        <ul className="space-y-3">
                            {categories.map((link, index) => (
                                <li key={index}>
                                    <Link
                                        to={link.path}
                                        className="text-sm flex items-center gap-2 transition-all hover:translate-x-1 font-medium"
                                        style={{ color: 'rgba(255,255,255,0.85)' }}
                                    >
                                        <ArrowRight className="w-3 h-3 opacity-50" />
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact - White text */}
                    <div>
                        <h4 className="text-base font-bold mb-5 flex items-center gap-2" style={{ color: '#ffffff' }}>
                            <span className="w-6 h-0.5" style={{ backgroundColor: BRAND.accent }} />
                            Contact Us
                        </h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-4 h-4 shrink-0 mt-1" style={{ color: '#ea5a70' }} />
                                <span className="text-sm font-medium" style={{ color: 'rgba(255,255,255,0.85)' }}>Ma'rib, Yemen</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-4 h-4 shrink-0" style={{ color: '#ea5a70' }} />
                                <a href="tel:+967777540528" className="text-sm font-medium hover:underline" style={{ color: 'rgba(255,255,255,0.85)' }}>
                                    +967 777 540 528
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-4 h-4 shrink-0" style={{ color: '#ea5a70' }} />
                                <a href="mailto:info@speeder.com" className="text-sm font-medium break-all hover:underline" style={{ color: 'rgba(255,255,255,0.85)' }}>
                                    info@speeder.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-3 text-sm" style={{ color: 'rgba(255,255,255,0.7)' }}>
                        <p>© {currentYear} Speeder Network. All rights reserved.</p>
                        <p className="flex items-center gap-2">
                            <Network className="w-4 h-4" />
                            Part of Al-Nadir Technology Group
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
