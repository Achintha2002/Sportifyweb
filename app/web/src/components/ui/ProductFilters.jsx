import { useState } from "react";
import { Filter, X, ChevronDown, ChevronUp } from "lucide-react";

const ProductFilters = ({ activeFilters, onFilterChange, onClearFilters, totalProducts, categories, brands }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedSections, setExpandedSections] = useState({ category: true, brand: true, price: true, minRating: true, availability: true });

  const filterSections = [
    { key: "category", title: "Category", options: categories?.map(c => ({ value: c._id, label: c.name })) || [] },
    { key: "brand", title: "Brand", options: brands?.map(b => ({ value: b._id, label: b.name })) || [] },
    { key: "price", title: "Price Range", options: [
        { value: "0-5000", label: "Under LKR 5,000" },
        { value: "5000-10000", label: "LKR 5,000 - LKR 10,000" },
        { value: "10000-25000", label: "LKR 10,000 - LKR 25,000" },
        { value: "25000-50000", label: "LKR 25,000 - LKR 50,000" },
        { value: "50000+", label: "Over LKR 50,000" },
    ]},
    { key: "minRating", title: "Customer Rating", options: [
        { value: "4.5", label: "4.5 Stars & Up" },
        { value: "4", label: "4 Stars & Up" },
        { value: "3", label: "3 Stars & Up" },
    ]},
    { key: "availability", title: "Availability", options: [{ value: "onSale", label: "On Sale" }] },
  ];

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  const getActiveFiltersCount = () => {
    const filterKeys = ['category', 'brand', 'price', 'minRating', 'availability'];
    return filterKeys.reduce((count, key) => {
      const value = activeFilters[key];
      if (Array.isArray(value)) return count + value.length;
      if (value) return count + 1;
      return count;
    }, 0);
  };
  
  const isChecked = (key, value) => {
    if (Array.isArray(activeFilters[key])) return activeFilters[key].includes(value);
    return activeFilters[key] === value;
  };

  const activeFilterCount = getActiveFiltersCount();

  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-gray-200 dark:border-slate-800 overflow-hidden">
      {/* Mobile Filter Header */}
      <div className="lg:hidden p-4 border-b border-gray-200 dark:border-slate-800">
        <button onClick={() => setIsOpen(!isOpen)} className="flex items-center justify-between w-full text-left">
          <div className="flex items-center">
            <Filter className="w-5 h-5 mr-2 text-gray-600 dark:text-slate-400" />
            <span className="font-semibold text-gray-900 dark:text-white">Filters</span>
            {activeFilterCount > 0 && (
              <span className="ml-2 bg-blue-600 text-white text-xs px-2 py-1 rounded-full">{activeFilterCount}</span>
            )}
          </div>
          {isOpen ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>
      </div>

      {/* Desktop Filter Header */}
      <div className="hidden lg:block p-5 border-b border-gray-200 dark:border-slate-800 bg-gray-50/50 dark:bg-slate-900/50">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Filter className="w-4 h-4 mr-2 text-blue-500" />
            <h3 className="font-bold text-gray-900 dark:text-white">Filters</h3>
          </div>
          {activeFilterCount > 0 && (
            <button 
              onClick={onClearFilters} 
              className="text-xs font-semibold text-red-500 hover:text-red-600 flex items-center bg-red-50 dark:bg-red-500/10 px-2.5 py-1 rounded-full transition-colors"
            >
              <X className="w-3.5 h-3.5 mr-1" /> Clear All
            </button>
          )}
        </div>
        <p className="text-xs text-gray-500 dark:text-slate-400 mt-2 font-medium">{totalProducts} products found</p>
      </div>

      {/* Filter Content */}
      <div className={`${isOpen ? "block" : "hidden"} lg:block divide-y divide-gray-100 dark:divide-slate-800`}>
        {filterSections.map((section) => (
          section.options.length > 0 && (
            <div key={section.key} className="p-5">
              <button 
                onClick={() => toggleSection(section.key)} 
                className="flex items-center justify-between w-full text-left mb-3 group"
              >
                <h4 className="text-sm font-bold text-gray-800 dark:text-slate-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {section.title}
                </h4>
                {expandedSections[section.key] ? (
                  <ChevronUp className="w-4 h-4 text-gray-400 dark:text-slate-500" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-gray-400 dark:text-slate-500" />
                )}
              </button>
              {expandedSections[section.key] && (
                <div className="space-y-1">
                  {section.options.map((option) => {
                    const selected = isChecked(section.key, option.value);
                    return (
                      <label 
                        key={option.value} 
                        className={`flex items-center justify-between cursor-pointer p-2.5 rounded-xl transition-all duration-200 ${
                          selected
                            ? 'bg-blue-50/70 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 font-semibold'
                            : 'text-gray-700 dark:text-slate-300 hover:bg-gray-50 dark:hover:bg-slate-800/60'
                        }`}
                      >
                        <div className="flex items-center">
                          {/* Beautiful Custom Radio Indicator */}
                          <div className={`w-4.5 h-4.5 rounded-full border flex items-center justify-center mr-3 transition-all ${
                            selected
                              ? 'border-blue-600 bg-blue-600 scale-105'
                              : 'border-gray-300 dark:border-slate-600 bg-transparent'
                          }`}>
                            {selected && (
                              <div className="w-1.5 h-1.5 rounded-full bg-white" />
                            )}
                          </div>
                          <span className="text-sm">{option.label}</span>
                        </div>
                        <input 
                          type="radio" 
                          name={section.key}
                          checked={selected} 
                          onChange={() => onFilterChange(section.key, option.value)} 
                          className="sr-only" 
                        />
                      </label>
                    );
                  })}
                </div>
              )}
            </div>
          )
        ))}
      </div>
    </div>
  );
};

export default ProductFilters;