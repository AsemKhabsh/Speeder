import { Link } from 'react-router-dom';
import { ArrowRight, Network, Shield, Headphones, Zap, Play } from 'lucide-react';

const Hero = () => {
    const features = [
        { icon: Network, text: 'Enterprise Solutions' },
        { icon: Shield, text: 'Secure & Reliable' },
        { icon: Headphones, text: '24/7 Support' },
        { icon: Zap, text: 'Fast Delivery' },
    ];

    const stats = [
        { value: '500+', label: 'Products' },
        { value: '1000+', label: 'Customers' },
        { value: '10+', label: 'Years' },
        { value: '24/7', label: 'Support' },
    ];

    return (
        <section
            className="relative min-h-screen flex items-center overflow-hidden pt-20"
            style={{ background: 'linear-gradient(135deg, #0f1c38 0%, #1a2e5a 50%, #2a4a7c 100%)' }}
        >
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 left-10 w-72 h-72 rounded-full blur-[100px]" style={{ backgroundColor: 'rgba(196, 30, 58, 0.3)' }} />
                <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full blur-[120px]" style={{ backgroundColor: 'rgba(42, 74, 124, 0.4)' }} />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-16 md:py-24">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Left Content - WHITE text on dark */}
                    <div className="text-center lg:text-left">
                        {/* Badge */}
                        <div
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
                            style={{ backgroundColor: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.3)' }}
                        >
                            <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: '#ea5a70' }} />
                            <span className="text-white text-sm font-medium">Your Trusted Network Partner</span>
                        </div>

                        {/* Heading - WHITE text (inline style for guaranteed visibility) */}
                        <h1
                            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
                            style={{ color: '#ffffff' }}
                        >
                            Powering Your
                            <span className="block mt-2" style={{ color: '#ea5a70' }}>Digital Future</span>
                        </h1>

                        {/* Description - WHITE text */}
                        <p className="text-lg md:text-xl text-white mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed" style={{ opacity: 0.95 }}>
                            Premium networking equipment, printers, and barcode scanners.
                            Quality solutions trusted by businesses across Yemen.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
                            <Link
                                to="/products"
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-white font-semibold rounded-xl transition-all hover:opacity-90"
                                style={{ backgroundColor: '#c41e3a' }}
                            >
                                Browse Products
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                            <Link
                                to="/about"
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-white font-semibold rounded-xl transition-all hover:bg-white/20"
                                style={{ backgroundColor: 'rgba(255,255,255,0.1)', border: '2px solid rgba(255,255,255,0.4)' }}
                            >
                                <Play className="w-5 h-5" />
                                Learn More
                            </Link>
                        </div>

                        {/* Feature Pills - WHITE text */}
                        <div className="grid grid-cols-2 gap-3 max-w-md mx-auto lg:mx-0">
                            {features.map((feature, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-2.5 px-4 py-3 rounded-xl"
                                    style={{ backgroundColor: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)' }}
                                >
                                    <feature.icon className="w-4 h-4 shrink-0" style={{ color: '#ea5a70' }} />
                                    <span className="text-white text-sm font-medium">{feature.text}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Content - Stats */}
                    <div className="relative hidden lg:block">
                        <div
                            className="rounded-3xl p-8"
                            style={{ backgroundColor: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.2)' }}
                        >
                            <div className="grid grid-cols-2 gap-6">
                                {stats.map((stat, index) => (
                                    <div
                                        key={index}
                                        className="text-center p-6 rounded-2xl transition-colors hover:bg-white/10"
                                        style={{ backgroundColor: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.1)' }}
                                    >
                                        <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                                        <div className="text-white text-sm font-medium" style={{ opacity: 0.85 }}>{stat.label}</div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-6 pt-6 text-center" style={{ borderTop: '1px solid rgba(255,255,255,0.2)' }}>
                                <p className="text-white text-sm" style={{ opacity: 0.7 }}>Authorized Dealer</p>
                                <p className="text-white font-bold mt-1">Al-Nadir Technology Group</p>
                            </div>
                        </div>

                        {/* Floating Badge */}
                        <div
                            className="absolute -top-4 -right-4 px-6 py-2.5 rounded-full text-sm font-bold text-white"
                            style={{ backgroundColor: '#c41e3a', boxShadow: '0 10px 40px rgba(196, 30, 58, 0.4)' }}
                        >
                            ⭐ Top Rated
                        </div>
                    </div>
                </div>

                {/* Mobile Stats - WHITE text */}
                <div className="lg:hidden mt-16 grid grid-cols-4 gap-3">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="text-center p-4 rounded-xl"
                            style={{ backgroundColor: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)' }}
                        >
                            <div className="text-xl sm:text-2xl font-bold text-white">{stat.value}</div>
                            <div className="text-white text-xs mt-1 font-medium" style={{ opacity: 0.85 }}>{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Hero;
