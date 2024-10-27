// Conversion.jsx
import React from 'react';
import Card from './Card'; // Importing the Card component

// Conversion Component: Displaying multiple cards
export default function Conversion() {
  const cards = [
    {
      title: 'Convert JPG to PNG',
      description:
        'Compress JPG, PNG, SVG, and GIFs while saving space and maintaining quality.',
        icon:'/conpng.png',
      link : '/convert_png',
    },
    
    {
      title: 'Convert PNG to JPG',
      description:
        'Turn PNG, GIF, TIF, PSD, SVG, WEBP, HEIC, or RAW format images to JPG in bulk with ease.',
        icon : '/conjpg.png',
        link : '/convert-jpg',
    },
    // {
    //   title: 'Convert from JPG',
    //   description:
    //     'Turn JPG images to PNG and GIF. Choose several JPGs ',
    // },
    // {
    //   title: 'Convert to ---',
    //   description:
    //     'Quickly remove image backgrounds with high accuracy. Instantly detect objects ',
    //   isNew: true,
    // },
    // {
    //   title: 'Convert to ---',
    //   description:
    //     'Quickly remove image backgrounds with high accuracy. Instantly detect objects ',
    //   isNew: true,
    // },
  ];

  return (
    <div className=" bg-gray-100 p-8 pt-40  ">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {cards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </div>
  );
}
