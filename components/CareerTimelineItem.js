import Image from 'next/image';
import React from 'react';

const CareerTimelineItem = ({ item }) => {
  const { title, content } = item;
  
  const renderTextBlock = (textBlock, index) => {
    const lines = textBlock.text.split('\n');
    return (
      <div key={index} className="rounded-lg object-cover w-full h-auto md:h-44 lg:h-60 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]">
        <p className="text-neutral-800 dark:text-neutral-200 text-medium md:text-medium font-medium mb-8">
          {lines.map((line, lineIndex) => (
            <React.Fragment key={lineIndex}>
              {line}
              {lineIndex < lines.length - 1 && <br />}
            </React.Fragment>
          ))}
        </p>
      </div>
    );
  };

  const renderImage = (image, index) => (
    <Image
      key={index}
      src={image.src}
      alt={image.alt}
      width={500}
      height={500}
      className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
    />
  );

  // Create grid items by interleaving images and text blocks
  const gridItems = [];
  const images = content.images || [];
  const textBlocks = content.textBlocks || [];
  
  // For the first item (2023feb-now), we have a specific layout
  if (title === '2023feb-now') {
    gridItems.push(renderImage(images[0], 0)); // identity image
    gridItems.push(renderTextBlock(textBlocks[0], 0)); // description text
    gridItems.push(renderTextBlock(textBlocks[1], 1)); // achievements text
    gridItems.push(renderImage(images[1], 1)); // hpe image
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
    <div>
      <p className="text-neutral-800 dark:text-neutral-200 text-medium md:text-medium font-medium mb-8">
        {content.description}
      </p>
      <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
        {gridItems}
      </div>
    </div>
  );
};

export default CareerTimelineItem;
