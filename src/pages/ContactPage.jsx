import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, Facebook, MessageCircle, CheckCircle, ChevronDown, ChevronUp } from 'lucide-react';

// Brand Colors
const BRAND = {
    primary: '#1a2e5a',
    accent: '#c41e3a',
    light: '#e8ecf4',
    text: '#334155',
    gradient: 'linear-gradient(135deg, #0f1c38 0%, #1a2e5a 50%, #2a4a7c 100%)',
};

const ContactPage = () => {
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);
    const [openFaq, setOpenFaq] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        await new Promise(resolve => setTimeout(resolve, 1500));
        setIsSubmitting(false);
        setSubmitStatus('success');
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
        setTimeout(() => setSubmitStatus(null), 5000);
    };

    const contactInfo = [
        { icon: Phone, title: 'Phone', value: '+967 777 540 528', link: 'tel:+967777540528' },
        { icon: Mail, title: 'Email', value: 'info@speeder.com', link: 'mailto:info@speeder.com' },
        { icon: MapPin, title: 'Location', value: "Ma'rib, Yemen", link: null },
        { icon: Clock, title: 'Working Hours', value: 'Sat - Thu: 8AM - 6PM', link: null },
    ];

    const faqs = [
        { question: 'What products do you offer?', answer: 'We offer a wide range of networking equipment including routers, switches, cables, crimping tools, printers, and barcode scanners from leading manufacturers.' },
        { question: 'Do you provide warranty on products?', answer: 'Yes, all our products come with official manufacturer warranty. Warranty periods vary by product and manufacturer.' },
        { question: 'Do you offer installation services?', answer: 'Yes, we provide professional installation and configuration services for enterprise networking equipment.' },
        { question: 'What are your payment methods?', answer: 'We accept cash, bank transfers, and various local payment methods. Contact us for specific payment options.' },
    ];

    // Input style with dark text for visibility
    const inputStyle = {
        width: '100%',
        padding: '12px 16px',
        borderRadius: '12px',
        border: `2px solid ${BRAND.light}`,
        backgroundColor: '#ffffff',
        color: BRAND.primary,
        fontSize: '16px',
    };

    return (
        <div className="min-h-screen pt-20 overflow-x-hidden" style={{ backgroundColor: '#f8fafc' }}>
            {/* Hero - White text on brand gradient */}
            <div className="py-16 md:py-20" style={{ background: BRAND.gradient }}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4" style={{ color: '#ffffff' }}>
                        Contact Us
                    </h1>
                    <p className="max-w-2xl text-base md:text-lg leading-relaxed" style={{ color: 'rgba(255,255,255,0.9)' }}>
                        Have questions about our products or services? We're here to help.
                        Reach out to us and we'll respond as soon as we can.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
                <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
                    {/* Form */}
                    <div className="lg:col-span-2 order-2 lg:order-1">
                        <div className="bg-white rounded-2xl p-6 sm:p-8" style={{ boxShadow: '0 10px 40px rgba(26,46,90,0.08)', border: `1px solid ${BRAND.light}` }}>
                            <h2 className="text-2xl font-bold mb-6" style={{ color: BRAND.primary }}>
                                Send us a Message
                            </h2>

                            {submitStatus === 'success' && (
                                <div className="mb-6 p-4 rounded-xl flex items-center gap-3" style={{ backgroundColor: '#dcfce7', border: '1px solid #bbf7d0' }}>
                                    <CheckCircle className="w-5 h-5 shrink-0" style={{ color: '#16a34a' }} />
                                    <span style={{ color: '#166534' }} className="font-medium">Message sent successfully! We'll get back to you soon.</span>
                                </div>
                            )}

                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div className="grid sm:grid-cols-2 gap-5">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-bold mb-2" style={{ color: BRAND.primary }}>
                                            Your Name *
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            style={inputStyle}
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-bold mb-2" style={{ color: BRAND.primary }}>
                                            Email Address *
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            style={inputStyle}
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                </div>

                                <div className="grid sm:grid-cols-2 gap-5">
                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-bold mb-2" style={{ color: BRAND.primary }}>
                                            Phone Number
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            style={inputStyle}
                                            placeholder="+967 7XX XXX XXX"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="subject" className="block text-sm font-bold mb-2" style={{ color: BRAND.primary }}>
                                            Subject *
                                        </label>
                                        <select
                                            id="subject"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            required
                                            style={inputStyle}
                                        >
                                            <option value="" style={{ color: BRAND.text }}>Select a subject</option>
                                            <option value="product-inquiry">Product Inquiry</option>
                                            <option value="price-quote">Price Quote</option>
                                            <option value="technical-support">Technical Support</option>
                                            <option value="partnership">Partnership</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-bold mb-2" style={{ color: BRAND.primary }}>
                                        Your Message *
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={5}
                                        style={{ ...inputStyle, resize: 'none' }}
                                        placeholder="How can we help you?"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="inline-flex items-center justify-center gap-2 px-8 py-4 font-semibold rounded-xl text-white transition-all hover:opacity-90 disabled:opacity-70"
                                    style={{ backgroundColor: BRAND.accent }}
                                >
                                    {isSubmitting ? 'Sending...' : (
                                        <>
                                            <Send className="w-4 h-4" />
                                            Send Message
                                        </>
                                    )}
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Contact Info - Brand styling */}
                    <div className="space-y-4 order-1 lg:order-2">
                        {contactInfo.map((info, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-xl p-5 transition-shadow hover:shadow-md"
                                style={{ border: `1px solid ${BRAND.light}` }}
                            >
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: BRAND.light }}>
                                        <info.icon className="w-5 h-5" style={{ color: BRAND.primary }} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-sm" style={{ color: BRAND.primary }}>{info.title}</h3>
                                        {info.link ? (
                                            <a href={info.link} className="font-semibold hover:underline" style={{ color: BRAND.accent }}>
                                                {info.value}
                                            </a>
                                        ) : (
                                            <p className="font-medium" style={{ color: BRAND.text }}>{info.value}</p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}

                        {/* Social Links */}
                        <div className="bg-white rounded-xl p-5" style={{ border: `1px solid ${BRAND.light}` }}>
                            <h3 className="font-bold mb-4" style={{ color: BRAND.primary }}>Connect With Us</h3>
                            <div className="flex gap-3">
                                <a
                                    href="https://www.facebook.com/share/1AT7ZC1Pn6/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 rounded-xl flex items-center justify-center text-white transition-colors"
                                    style={{ backgroundColor: '#1877f2' }}
                                >
                                    <Facebook className="w-5 h-5" />
                                </a>
                                <a
                                    href="https://wa.me/967777540528"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 rounded-xl flex items-center justify-center text-white transition-colors"
                                    style={{ backgroundColor: '#25d366' }}
                                >
                                    <MessageCircle className="w-5 h-5" />
                                </a>
                            </div>
                        </div>

                        {/* Map Placeholder */}
                        <div className="bg-white rounded-xl overflow-hidden" style={{ border: `1px solid ${BRAND.light}` }}>
                            <div className="h-40 flex items-center justify-center" style={{ backgroundColor: BRAND.light }}>
                                <div className="text-center">
                                    <MapPin className="w-8 h-8 mx-auto mb-2" style={{ color: BRAND.text }} />
                                    <p className="text-sm font-semibold" style={{ color: BRAND.primary }}>Ma'rib, Yemen</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* FAQ - Brand styling */}
            <section className="py-16 md:py-20 bg-white">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-10">
                        <h2 className="text-2xl sm:text-3xl font-bold mb-3" style={{ color: BRAND.primary }}>
                            Frequently Asked Questions
                        </h2>
                        <p style={{ color: BRAND.text }}>Quick answers to common questions</p>
                    </div>

                    <div className="space-y-3">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className="rounded-xl overflow-hidden"
                                style={{ border: `2px solid ${BRAND.light}` }}
                            >
                                <button
                                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                                    className="w-full flex items-center justify-between p-5 text-left transition-colors"
                                    style={{ backgroundColor: openFaq === index ? BRAND.light : 'white' }}
                                >
                                    <h3 className="font-bold pr-4" style={{ color: BRAND.primary }}>{faq.question}</h3>
                                    {openFaq === index ? (
                                        <ChevronUp className="w-5 h-5 shrink-0" style={{ color: BRAND.text }} />
                                    ) : (
                                        <ChevronDown className="w-5 h-5 shrink-0" style={{ color: BRAND.text }} />
                                    )}
                                </button>
                                {openFaq === index && (
                                    <div className="px-5 pb-5 pt-0 leading-relaxed" style={{ color: BRAND.text }}>
                                        {faq.answer}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactPage;
