import Image from 'next/image';
import React from 'react';

const CareerTimelineItem = ({ item }) => {
  const { title, content } = item;
  
  const renderTextBlock = (textBlock, index) => {
    const lines = textBlock.text.split('\n');
    const isAchievements = textBlock.type === 'achievements';
    
    return (
      <div 
        key={index} 
        className={`
          rounded-xl p-6 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 
          shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]
          hover:shadow-lg transition-shadow duration-300
          ${isAchievements ? 'border-l-4 border-blue-500 dark:border-blue-400' : ''}
        `}
      >
        {isAchievements && (
          <div className="flex items-center mb-4">
            <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
            <h4 className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
              Key Technologies & Skills
            </h4>
          </div>
        )}
        
        <div className={`
          text-neutral-700 dark:text-neutral-200 
          ${isAchievements ? 'text-sm leading-relaxed' : 'text-base leading-relaxed'}
          ${isAchievements ? 'font-medium' : 'font-normal'}
        `}>
          {lines.map((line, lineIndex) => (
            <React.Fragment key={lineIndex}>
              {isAchievements && line.startsWith('✅') ? (
                <div className="flex items-center mb-2">
                  <span className="text-green-500 mr-2">✅</span>
                  <span className="text-neutral-700 dark:text-neutral-300">
                    {line.replace('✅ ', '')}
                  </span>
                </div>
              ) : (
                <>
                  {line}
                  {lineIndex < lines.length - 1 && <br />}
                </>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    );
  };

  const renderImage = (image, index) => (
    <div key={index} className="group">
      <Image
        src={image.src}
        alt={image.alt}
        width={500}
        height={500}
        className="rounded-xl object-cover h-48 md:h-56 lg:h-64 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] group-hover:shadow-xl transition-shadow duration-300"
      />
    </div>
  );

  // Create grid items by interleaving images and text blocks
  const gridItems = [];
  const images = content.images || [];
  const textBlocks = content.textBlocks || [];
  
  // For the first item (2025may-now), we have a specific layout
  if (title === '2025may-now') {
    gridItems.push(renderImage(images[0], 0)); // cambio image
    gridItems.push(renderTextBlock(textBlocks[0], 0)); // description text
    gridItems.push(renderTextBlock(textBlocks[1], 1)); // achievements text
    gridItems.push(renderImage(images[1], 1)); // healthcare image
  } else {
    // For other items, alternate between images and text
    images.forEach((image, index) => {
      gridItems.push(renderImage(image, index));
    });
    textBlocks.forEach((textBlock, index) => {
      gridItems.push(renderTextBlock(textBlock, index));
    });
  }

  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900 rounded-xl p-6 border border-blue-100 dark:border-gray-700">
        <p className="text-neutral-800 dark:text-neutral-200 text-lg leading-relaxed font-medium">
          {content.description}
        </p>
      </div>
      
      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {gridItems}
      </div>
    </div>
  );
};

export default CareerTimelineItem;
