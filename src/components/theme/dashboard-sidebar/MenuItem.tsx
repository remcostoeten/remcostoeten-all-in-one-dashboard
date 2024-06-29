import svgToReactComponent from '@/core/libs/svgToComponent';
import React from 'react';

const MenuItem = ({ name, icon, isExpanded }) => {
    // Determine if the icon is an SVG string and use it directly
    const IconComponent = typeof icon === 'string' ? svgToReactComponent(icon) : icon;

    return (
        <div className={`flex items-center px-3 py-2 hover:bg-gray-800 cursor-pointer ${isExpanded ? 'justify-start' : 'justify-center'}`}>
            <span className="w-6 h-6">{IconComponent}</span>
            {isExpanded && <span className="ml-3">{name}</span>}
        </div>
    );
};

export default MenuItem;