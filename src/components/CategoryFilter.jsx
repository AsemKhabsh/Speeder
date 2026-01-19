import { Network, Printer, ScanBarcode, Package, ChevronDown } from 'lucide-react';

const iconMap = {
    Network: Network,
    Printer: Printer,
    ScanBarcode: ScanBarcode,
    Package: Package,
};

const CategoryFilter = ({
    categories,
    selectedCategory,
    selectedSubcategory,
    onCategoryChange,
    onSubcategoryChange
}) => {
    const handleCategoryClick = (categoryId) => {
        if (selectedCategory === categoryId) {
            onCategoryChange(null);
            onSubcategoryChange(null);
        } else {
            onCategoryChange(categoryId);
            onSubcategoryChange(null);
        }
    };

    const selectedCategoryData = categories.find(c => c.id === selectedCategory);

    return (
        <div className="space-y-4">
            {/* Main Categories - Scrollable on mobile */}
            <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
                {/* All Products Button */}
                <button
                    onClick={() => {
                        onCategoryChange(null);
                        onSubcategoryChange(null);
                    }}
                    className={`flex items-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl font-semibold text-xs sm:text-sm transition-all duration-300 whitespace-nowrap
            ${!selectedCategory
                            ? 'bg-primary-900 text-white shadow-lg'
                            : 'bg-white text-primary-900 border border-neutral-200 hover:border-primary-300 hover:shadow-md'
                        }`}
                >
                    <Package className="w-4 h-4 shrink-0" />
                    <span>All Products</span>
                </button>

                {/* Category Buttons */}
                {categories.map((category) => {
                    const IconComponent = iconMap[category.icon] || Package;
                    const isActive = selectedCategory === category.id;

                    return (
                        <button
                            key={category.id}
                            onClick={() => handleCategoryClick(category.id)}
                            className={`flex items-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl font-semibold text-xs sm:text-sm transition-all duration-300 whitespace-nowrap
                ${isActive
                                    ? 'bg-accent-800 text-white shadow-lg'
                                    : 'bg-white text-primary-900 border border-neutral-200 hover:border-accent-300 hover:shadow-md'
                                }`}
                        >
                            <IconComponent className="w-4 h-4 shrink-0" />
                            <span className="hidden sm:inline">{category.name}</span>
                            <span className="sm:hidden">{category.name.split(' ')[0]}</span>
                            {category.subcategories?.length > 0 && (
                                <ChevronDown className={`w-4 h-4 transition-transform duration-300 shrink-0 ${isActive ? 'rotate-180' : ''}`} />
                            )}
                        </button>
                    );
                })}
            </div>

            {/* Subcategories (for Network Devices) */}
            {selectedCategoryData?.subcategories?.length > 0 && (
                <div className="flex flex-wrap gap-2 justify-center pt-3 animate-fade-in">
                    <span className="text-sm text-neutral-500 py-2 hidden sm:block">Filter by:</span>

                    <button
                        onClick={() => onSubcategoryChange(null)}
                        className={`px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all duration-300
              ${!selectedSubcategory
                                ? 'bg-primary-100 text-primary-900 ring-2 ring-primary-300'
                                : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
                            }`}
                    >
                        All
                    </button>

                    {selectedCategoryData.subcategories.map((subcategory) => (
                        <button
                            key={subcategory.id}
                            onClick={() => onSubcategoryChange(subcategory.id)}
                            className={`px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all duration-300
                ${selectedSubcategory === subcategory.id
                                    ? 'bg-primary-900 text-white shadow-md'
                                    : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
                                }`}
                        >
                            {subcategory.name}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default CategoryFilter;
