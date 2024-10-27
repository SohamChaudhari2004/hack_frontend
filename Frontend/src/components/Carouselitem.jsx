// import React from 'react';

// // CarouselItem component that takes two image props: image1 and image2
// const CarouselItem = ({ image1, image2 }) => {
//   return (
//     <div className="flex justify-center items-center w-full h-[150%] p-8 space-x-8 border border-black bg-gray-900 rounded-lg">
//       {/* Before Image Card */}
//       <div className="flex flex-col justify-center items-center w-1/2">
//         <img src={image1} alt="Before" className="w-80 h-64 object-cover rounded-lg" />
//         <p className="text-white mt-2">Before Image</p>
//       </div>

//       {/* Arrow */}
//       <div className="text-white text-4xl">→</div>

//       {/* After Image Card */}
//       <div className="flex flex-col justify-center items-center w-1/2">
//         <img src={image2} alt="After" className="w-80 h-64 object-cover rounded-lg" />
//         <p className="text-white mt-2">After Image</p>
//       </div>
//     </div>
//   );
// };

// export default CarouselItem;

// import React, { useState, useEffect } from 'react';

// // Carousel Component
// const Carouselitem = () => {
//   const images = [
//     'https://via.placeholder.com/300x200/FF5733/FFFFFF?text=Image+1',
//     'https://via.placeholder.com/300x200/33FF57/FFFFFF?text=Image+2',
//     'https://via.placeholder.com/300x200/3357FF/FFFFFF?text=Image+3',
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) =>
//         prevIndex === images.length - 1 ? 0 : prevIndex + 1
//       );
//     }, 3000); // Change image every 3 seconds

//     return () => clearInterval(interval); // Cleanup on unmount
//   }, [images.length]);

//   return (
//     <div className="flex justify-center items-center w-full h-[150%] p-8 border border-black bg-gray-900 rounded-lg overflow-hidden relative">
//       {/* Image Cards */}
//       {images.map((image, index) => (
//         <div
//           key={index}
//           className={`absolute w-full transition-transform duration-700 ease-in-out ${
//             index === currentIndex
//               ? 'translate-x-0'
//               : index === (currentIndex + 1) % images.length
//               ? 'translate-x-full'
//               : 'translate-x-[-100%]'
//           }`}
//         >
//           <img src={image} alt={`Image ${index + 1}`} className="w-80 h-64 object-cover rounded-lg" />
//         </div>
//       ))}

//       {/* Indicator for current image */}
//       <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white">
//         {currentIndex + 1}/{images.length}
//       </div>
//     </div>
//   );
// };
// export default Carouselitem;

import React from 'react';

// Carousel Component
const CarouselItem = () => {
  const images = [
    {
      clear: 'https://via.placeholder.com/300x200/FF5733/FFFFFF?text=Clear+1',
      blurred: 'https://via.placeholder.com/300x200/FF5733/999999?text=Blurred+1',
    },
    {
      clear: 'https://via.placeholder.com/300x200/33FF57/FFFFFF?text=Clear+2',
      blurred: 'https://via.placeholder.com/300x200/33FF57/999999?text=Blurred+2',
    },
    {
      clear: 'https://via.placeholder.com/300x200/3357FF/FFFFFF?text=Clear+3',
      blurred: 'https://via.placeholder.com/300x200/3357FF/999999?text=Blurred+3',
    },
    {
      clear: 'https://via.placeholder.com/300x200/FF33A1/FFFFFF?text=Clear+4',
      blurred: 'https://via.placeholder.com/300x200/FF33A1/999999?text=Blurred+4',
    },
    {
      clear: 'https://via.placeholder.com/300x200/FFBD33/FFFFFF?text=Clear+5',
      blurred: 'https://via.placeholder.com/300x200/FFBD33/999999?text=Blurred+5',
    },
    {
      clear: 'https://via.placeholder.com/300x200/33D1FF/FFFFFF?text=Clear+6',
      blurred: 'https://via.placeholder.com/300x200/33D1FF/999999?text=Blurred+6',
    },
  ];

  return (
    <div className="overflow-hidden relative">
      <div className="flex animate-slide">
        {images.map((image, index) => (
          <div key={index} className="flex w-1/3 flex-shrink-0">
            <div className="relative w-full">
              <img
                src={image.blurred}
                alt={`Blurred ${index + 1}`}
                className="absolute w-full h-full object-cover rounded-lg filter blur-md"
              />
              <img
                src={image.clear}
                alt={`Clear ${index + 1}`}
                className="relative w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default  CarouselItem;