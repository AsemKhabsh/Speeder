import { X, Video, ExternalLink, Check, Phone } from 'lucide-react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const ProductModal = ({ product, isOpen, onClose }) => {
    // Lock body scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    // Close on escape key
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape') onClose();
        };
        if (isOpen) {
            window.addEventListener('keydown', handleEscape);
        }
        return () => window.removeEventListener('keydown', handleEscape);
    }, [isOpen, onClose]);

    if (!isOpen || !product) return null;

    const formatCategory = (str) => {
        if (!str) return '';
        return str.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="fixed inset-0 bg-primary-950/80 backdrop-blur-md animate-fade-in"
                onClick={onClose}
            />

            {/* Modal */}
            <div className="relative bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden animate-slide-up">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-white/90 backdrop-blur-sm shadow-lg hover:bg-white transition-colors duration-300"
                >
                    <X className="w-5 h-5 text-neutral-600" />
                </button>

                <div className="grid md:grid-cols-2">
                    {/* Image Section */}
                    <div className="relative bg-gradient-to-br from-neutral-50 to-neutral-100 p-8 flex items-center justify-center">
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full max-w-sm object-contain"
                        />

                        {/* Badges */}
                        <div className="absolute top-4 left-4 flex flex-col gap-2">
                            {product.featured && (
                                <span className="badge badge-accent shadow-md">Featured</span>
                            )}
                            <span className="badge badge-primary shadow-sm">
                                {formatCategory(product.subcategory || product.category)}
                            </span>
                        </div>

                        {/* Video Link */}
                        {product.videoUrl && (
                            <a
                                href={product.videoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="absolute bottom-4 left-4 flex items-center gap-2 px-4 py-2.5 bg-primary-900/90 text-white rounded-xl hover:bg-primary-800 transition-colors shadow-lg"
                            >
                                <Video className="w-4 h-4" />
                                Watch Demo
                                <ExternalLink className="w-3 h-3" />
                            </a>
                        )}
                    </div>

                    {/* Content Section */}
                    <div className="p-6 md:p-8 overflow-y-auto max-h-[50vh] md:max-h-[85vh]">
                        {/* Title */}
                        <h2 className="text-2xl md:text-3xl font-bold text-primary-900 mb-2 leading-tight">
                            {product.name}
                        </h2>

                        {/* Arabic Name */}
                        <p className="text-lg text-neutral-500 mb-6 font-arabic" dir="rtl">
                            {product.nameAr}
                        </p>

                        {/* Description */}
                        <div className="mb-6">
                            <h3 className="font-bold text-primary-900 mb-3 text-sm uppercase tracking-wider">Description</h3>
                            <p className="text-neutral-600 leading-relaxed">
                                {product.description}
                            </p>
                        </div>

                        {/* Specifications */}
                        <div className="mb-6">
                            <h3 className="font-bold text-primary-900 mb-3 text-sm uppercase tracking-wider">Specifications</h3>
                            <ul className="space-y-2.5">
                                {product.specifications.map((spec, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <div className="w-5 h-5 rounded-full bg-accent-100 flex items-center justify-center shrink-0 mt-0.5">
                                            <Check className="w-3 h-3 text-accent-800" />
                                        </div>
                                        <span className="text-neutral-600">{spec}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Price & Actions */}
                        <div className="pt-6 border-t border-neutral-100 space-y-4">
                            <div className="flex items-center justify-between">
                                <div>
                                    <span className="text-sm text-neutral-500 block">Price</span>
                                    <p className="text-2xl font-bold text-accent-800">{product.price}</p>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-3">
                                <Link
                                    to="/contact"
                                    onClick={onClose}
                                    className="btn btn-accent flex-1 justify-center"
                                >
                                    <Phone className="w-4 h-4" />
                                    Inquire Now
                                </Link>
                                {product.videoUrl && (
                                    <a
                                        href={product.videoUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn btn-outline flex-1 justify-center"
                                    >
                                        <Video className="w-4 h-4" />
                                        Watch Demo
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductModal;
