import { Target, Eye, Users, Award, Building, Handshake, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/SpeederLogo.png';

// Brand Colors
const BRAND = {
    primary: '#1a2e5a',
    accent: '#c41e3a',
    light: '#e8ecf4',
    text: '#334155',
    gradient: 'linear-gradient(135deg, #0f1c38 0%, #1a2e5a 50%, #2a4a7c 100%)',
};

const AboutPage = () => {
    const values = [
        { icon: Award, title: 'Quality First', description: 'We only offer products that meet the highest standards of quality and reliability.' },
        { icon: Users, title: 'Customer Focus', description: 'Our customers are at the heart of everything we do. Your success is our success.' },
        { icon: Handshake, title: 'Integrity', description: 'We conduct business with honesty, transparency, and ethical practices.' },
        { icon: Building, title: 'Innovation', description: 'We continuously seek new technologies and solutions to serve you better.' },
    ];

    const milestones = [
        { year: '2014', title: 'Company Founded', description: "Speeder Network was established in Ma'rib, Yemen." },
        { year: '2016', title: 'Al-Nadir Partnership', description: 'Became an official agency of Al-Nadir Technology.' },
        { year: '2018', title: 'Product Expansion', description: 'Expanded product line to include printers and scanners.' },
        { year: '2020', title: 'Regional Growth', description: 'Extended services across multiple governorates.' },
        { year: '2023', title: '1000+ Customers', description: 'Reached milestone of serving over 1000 businesses.' },
    ];

    const stats = [
        { value: '10+', label: 'Years Experience' },
        { value: '1000+', label: 'Happy Customers' },
        { value: '500+', label: 'Products Available' },
        { value: '24/7', label: 'Customer Support' },
    ];

    return (
        <div className="min-h-screen pt-20" style={{ backgroundColor: '#f8fafc' }}>
            {/* Hero - White text on brand gradient */}
            <div className="py-20 md:py-28 relative overflow-hidden" style={{ background: BRAND.gradient }}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight" style={{ color: '#ffffff' }}>
                            About Speeder Network
                        </h1>
                        <p className="text-lg md:text-xl leading-relaxed" style={{ color: 'rgba(255,255,255,0.9)' }}>
                            Your trusted partner for networking solutions since 2014. We're committed to
                            providing the best products and services for businesses across Yemen.
                        </p>
                    </div>
                </div>
            </div>

            {/* Stats Bar - Brand headings on white */}
            <div className="bg-white" style={{ borderBottom: `1px solid ${BRAND.light}` }}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4">
                        {stats.map((stat, index) => (
                            <div
                                key={index}
                                className="text-center py-8 md:py-10"
                                style={{ borderRight: index < 3 ? `1px solid ${BRAND.light}` : 'none' }}
                            >
                                <div className="text-3xl md:text-4xl font-bold mb-1" style={{ color: BRAND.primary }}>{stat.value}</div>
                                <div className="text-sm" style={{ color: BRAND.text }}>{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Company Overview - Brand headings, slate body */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8" style={{ color: BRAND.primary }}>Our Story</h2>
                            <div className="space-y-5 leading-relaxed text-lg" style={{ color: BRAND.text }}>
                                <p>
                                    <strong style={{ color: BRAND.primary }}>Speeder Network</strong> was founded in Ma'rib, Yemen,
                                    with a simple mission: to provide businesses with reliable, high-quality networking
                                    equipment at competitive prices.
                                </p>
                                <p>
                                    As one of the official agencies of <strong style={{ color: BRAND.primary }}>Al-Nadir Technology</strong>,
                                    we specialize in manufacturing and distributing a comprehensive range of networking supplies,
                                    from enterprise routers and switches to cables and installation tools.
                                </p>
                                <p>
                                    Over the years, we've expanded our product offerings to include printers, barcode scanners,
                                    and other essential business equipment. Our commitment to quality and customer service has
                                    made us a trusted name in the industry.
                                </p>
                            </div>

                            {/* Arabic Description */}
                            <div className="mt-8 p-6 rounded-2xl" dir="rtl" style={{ backgroundColor: BRAND.light }}>
                                <p className="font-arabic text-lg leading-relaxed" style={{ color: BRAND.text }}>
                                    شركة <strong style={{ color: BRAND.primary }}>Speeder Network</strong> هي شركة متخصصة في تصنيع
                                    جميع مستلزمات الشبكة وهي أحد وكالات النادر للتكنولوجيا. نحن ملتزمون بتقديم أفضل المنتجات
                                    والخدمات للشركات في جميع أنحاء اليمن.
                                </p>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="bg-white rounded-3xl p-8 md:p-10" style={{ boxShadow: '0 20px 60px rgba(26,46,90,0.12)', border: `1px solid ${BRAND.light}` }}>
                                <img src={logo} alt="Speeder Network Logo" className="w-full max-w-xs mx-auto mb-10" />
                                <div className="text-center">
                                    <p className="mb-2" style={{ color: BRAND.text }}>Official Agency of</p>
                                    <p className="text-2xl font-bold" style={{ color: BRAND.primary }}>Al-Nadir Technology Group</p>
                                </div>
                            </div>
                            <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-2xl -z-10" style={{ backgroundColor: BRAND.light }} />
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision - White text on brand cards */}
            <section className="py-20" style={{ backgroundColor: BRAND.light }}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Mission */}
                        <div className="bg-white p-8 md:p-10 rounded-3xl" style={{ boxShadow: '0 10px 40px rgba(26,46,90,0.08)', borderLeft: `4px solid ${BRAND.accent}` }}>
                            <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6" style={{ backgroundColor: BRAND.light }}>
                                <Target className="w-8 h-8" style={{ color: BRAND.accent }} />
                            </div>
                            <h3 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: BRAND.primary }}>Our Mission</h3>
                            <p className="leading-relaxed text-lg" style={{ color: BRAND.text }}>
                                To empower businesses with reliable, cutting-edge networking solutions that drive
                                growth and efficiency. We strive to be the bridge between global technology and
                                local needs, making advanced networking accessible to all.
                            </p>
                        </div>

                        {/* Vision */}
                        <div className="bg-white p-8 md:p-10 rounded-3xl" style={{ boxShadow: '0 10px 40px rgba(26,46,90,0.08)', borderLeft: `4px solid ${BRAND.primary}` }}>
                            <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6" style={{ backgroundColor: BRAND.light }}>
                                <Eye className="w-8 h-8" style={{ color: BRAND.primary }} />
                            </div>
                            <h3 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: BRAND.primary }}>Our Vision</h3>
                            <p className="leading-relaxed text-lg" style={{ color: BRAND.text }}>
                                To become the leading provider of networking solutions in Yemen and the region,
                                known for our commitment to quality, innovation, and exceptional customer service.
                                We envision a connected future where every business has access to world-class technology.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values - Brand styling */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-14">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4" style={{ color: BRAND.primary }}>Our Core Values</h2>
                        <p className="text-lg max-w-2xl mx-auto" style={{ color: BRAND.text }}>
                            The principles that guide everything we do
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {values.map((value, index) => (
                            <div
                                key={index}
                                className="group p-8 rounded-2xl text-center transition-all duration-500 hover:shadow-xl"
                                style={{ backgroundColor: BRAND.light }}
                            >
                                <div
                                    className="w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-500"
                                    style={{ backgroundColor: 'white' }}
                                >
                                    <value.icon className="w-8 h-8" style={{ color: BRAND.primary }} />
                                </div>
                                <h3 className="text-xl font-bold mb-3" style={{ color: BRAND.primary }}>{value.title}</h3>
                                <p className="leading-relaxed" style={{ color: BRAND.text }}>{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Timeline - White text on brand gradient */}
            <section className="py-20" style={{ background: BRAND.gradient }}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-14">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4" style={{ color: '#ffffff' }}>Our Journey</h2>
                        <p className="text-lg max-w-2xl mx-auto" style={{ color: 'rgba(255,255,255,0.8)' }}>
                            Key milestones in our growth story
                        </p>
                    </div>

                    <div className="max-w-3xl mx-auto space-y-4">
                        {milestones.map((milestone, index) => (
                            <div
                                key={index}
                                className="rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 transition-colors duration-300"
                                style={{ backgroundColor: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)' }}
                            >
                                <span className="font-bold text-2xl shrink-0 w-20" style={{ color: '#ea5a70' }}>{milestone.year}</span>
                                <div className="flex-1">
                                    <h3 className="text-xl font-bold" style={{ color: '#ffffff' }}>{milestone.title}</h3>
                                    <p className="mt-1" style={{ color: 'rgba(255,255,255,0.8)' }}>{milestone.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: BRAND.primary }}>
                            Ready to Partner with Us?
                        </h2>
                        <p className="text-lg mb-8" style={{ color: BRAND.text }}>
                            Discover how Speeder Network can help elevate your business infrastructure.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                to="/contact"
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 font-semibold rounded-xl text-white transition-all hover:opacity-90"
                                style={{ backgroundColor: BRAND.accent }}
                            >
                                Get in Touch
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                            <Link
                                to="/products"
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 font-semibold rounded-xl transition-all"
                                style={{ border: `2px solid ${BRAND.primary}`, color: BRAND.primary }}
                            >
                                Browse Products
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;
