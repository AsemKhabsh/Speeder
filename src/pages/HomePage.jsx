import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Shield, Truck, Headphones, ChevronRight } from 'lucide-react';
import Hero from '../components/Hero';
import ProductCard from '../components/ProductCard';
import ProductModal from '../components/ProductModal';
import productsData from '../data/products.json';

// Brand Colors
const BRAND = {
    primary: '#1a2e5a',
    accent: '#c41e3a',
    light: '#e8ecf4',
    text: '#334155',
    gradient: 'linear-gradient(135deg, #0f1c38 0%, #1a2e5a 50%, #2a4a7c 100%)',
};

const HomePage = () => {
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const featuredProducts = useMemo(() => {
        return productsData.products.filter(p => p.featured).slice(0, 6);
    }, []);

    const handleViewDetails = (product) => {
        setSelectedProduct(product);
        setIsModalOpen(true);
    };

    const features = [
        { icon: Star, title: 'Premium Quality', description: 'Only the best products from trusted manufacturers worldwide.' },
        { icon: Shield, title: 'Warranty Guaranteed', description: 'All products come with official manufacturer warranty.' },
        { icon: Truck, title: 'Fast Delivery', description: 'Quick and reliable delivery across the region.' },
        { icon: Headphones, title: 'Expert Support', description: '24/7 technical support from our experienced team.' },
    ];

    const categories = productsData.categories.slice(0, 4);

    return (
        <div className="overflow-x-hidden">
            <Hero />

            {/* Categories - White text on brand gradient cards */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-14">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4" style={{ color: BRAND.primary }}>
                            Browse by Category
                        </h2>
                        <p className="text-lg max-w-2xl mx-auto" style={{ color: BRAND.text }}>
                            Find exactly what you need from our extensive product catalog
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                        {categories.map((category) => {
                            const productCount = productsData.products.filter(p => p.category === category.id).length;
                            return (
                                <Link
                                    key={category.id}
                                    to={`/products?category=${category.id}`}
                                    className="group relative overflow-hidden rounded-2xl p-6 md:p-8 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1"
                                    style={{ background: BRAND.gradient }}
                                >
                                    <div className="relative z-10">
                                        <h3 className="font-bold text-lg md:text-xl mb-2" style={{ color: '#ffffff' }}>{category.name}</h3>
                                        <p className="text-sm mb-4 font-medium" style={{ color: 'rgba(255,255,255,0.85)' }}>{productCount} products</p>
                                        <div className="flex items-center gap-2 font-semibold text-sm group-hover:gap-3 transition-all" style={{ color: '#ea5a70' }}>
                                            View All
                                            <ChevronRight className="w-4 h-4" />
                                        </div>
                                    </div>
                                    <div
                                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                        style={{ background: `linear-gradient(135deg, ${BRAND.accent}20, ${BRAND.accent}40)` }}
                                    />
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Featured Products - Brand headings on light bg */}
            <section className="py-20" style={{ backgroundColor: '#f8fafc' }}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14">
                        <div>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4" style={{ color: BRAND.primary }}>
                                Featured Products
                            </h2>
                            <p className="text-lg max-w-xl" style={{ color: BRAND.text }}>
                                Our top-rated networking equipment and devices
                            </p>
                        </div>
                        <Link
                            to="/products"
                            className="inline-flex items-center gap-2 px-6 py-3 font-semibold rounded-xl transition-all self-start md:self-auto"
                            style={{
                                border: `2px solid ${BRAND.primary}`,
                                color: BRAND.primary,
                            }}
                        >
                            View All Products
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {featuredProducts.map((product) => (
                            <ProductCard key={product.id} product={product} onViewDetails={handleViewDetails} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us - Brand styling */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-14">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4" style={{ color: BRAND.primary }}>
                            Why Choose Speeder Network?
                        </h2>
                        <p className="text-lg max-w-2xl mx-auto" style={{ color: BRAND.text }}>
                            We're committed to providing the best networking solutions for your business
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="group text-center p-8 rounded-2xl transition-all duration-500 hover:shadow-xl"
                                style={{
                                    backgroundColor: BRAND.light,
                                    border: `1px solid ${BRAND.light}`,
                                }}
                            >
                                <div
                                    className="w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-500"
                                    style={{ backgroundColor: 'white' }}
                                >
                                    <feature.icon className="w-8 h-8" style={{ color: BRAND.primary }} />
                                </div>
                                <h3 className="text-xl font-bold mb-3" style={{ color: BRAND.primary }}>{feature.title}</h3>
                                <p className="leading-relaxed" style={{ color: BRAND.text }}>{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA - White text on brand gradient */}
            <section className="py-20 relative overflow-hidden" style={{ background: BRAND.gradient }}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight" style={{ color: '#ffffff' }}>
                            Ready to Upgrade Your Infrastructure?
                        </h2>
                        <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto" style={{ color: 'rgba(255,255,255,0.9)' }}>
                            Contact us today for a free consultation and discover how we can help your business thrive.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                to="/contact"
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-white font-semibold rounded-xl transition-all hover:opacity-90"
                                style={{ backgroundColor: BRAND.accent }}
                            >
                                Get in Touch
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                            <Link
                                to="/products"
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 font-semibold rounded-xl transition-all"
                                style={{
                                    backgroundColor: 'rgba(255,255,255,0.1)',
                                    border: '2px solid rgba(255,255,255,0.4)',
                                    color: '#ffffff',
                                }}
                            >
                                Browse Products
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <ProductModal product={selectedProduct} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
    );
};

export default HomePage;
