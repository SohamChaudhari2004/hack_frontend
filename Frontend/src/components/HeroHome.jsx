// import React, { useState } from 'react';

// const cardsData = [
//   {
//     title: 'Upscaling Image',
//     description: 'Description for Card 1',
//     src: '/imgscale.png', // Placeholder image link; replace with actual URLs
//   },
//   {
//     title: 'Surveillance',
//     description: 'Description for Card 2',
//     src: '/cctv.png',
//   },
//   {
//     title: 'Conversion of Image',
//     description: 'Description for Card 4',
//     src: 'con3.png',
//   },
//   {
//     title: 'Satellite Image Resolver Upcoming',
//     description: 'Description for Card 3',
//     src: 'satelite.png',
//   },

//   {
//     title: 'Medical Upcoming..',
//     description: 'Description for Card 5',
//     src: 'health.png',
//   },
// ];

// const HeroHome = () => {
//   const [flippedIndex, setFlippedIndex] = useState(null);

//   const handleMouseOver = (index) => {
//     setFlippedIndex(index);
//   };

//   const handleMouseOut = () => {
//     setFlippedIndex(null);
//   };

//   return (
//     <div className="flex flex-wrap justify-center gap-10 pt-40">
//       {cardsData.map((card, index) => (
//         <div
//           className="relative w-48 h-72 perspective"
//           key={index}
//           style={{ perspective: '1000px' }}
//           onMouseOver={() => handleMouseOver(index)}
//           onMouseOut={handleMouseOut}
//         >
//           <div
//             className={`w-full h-full transition-transform duration-500 transform-style preserve-3d ${
//               flippedIndex === index ? 'rotate-y-180' : ''
//             }`}
//             style={{ transformStyle: 'preserve-3d' }}
//           >
//             {/* Front Face */}
//             <div
//               className="absolute w-full h-full backface-hidden bg-white flex flex-col items-center justify-center border rounded-lg shadow-lg"
//               style={{ backfaceVisibility: 'hidden' }}
//             >
//               <img
//                 src={card.src}
//                 alt={card.title}
//                 className="w-full h-24 object-cover rounded-t-lg"
//               />
//               <h3 className="text-lg font-semibold text-center mt-2">{card.title}</h3>
//             </div>
//             {/* Back Face */}
//             <div
//               className="absolute w-full h-full backface-hidden bg-gray-200 flex items-center justify-center border rounded-lg shadow-lg"
//               style={{
//                 backfaceVisibility: 'hidden',
//                 transform: 'rotateY(180deg)',
//               }}
//             >
//               <p className="text-sm text-center px-4">{card.description}</p>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default HeroHome;
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const cardsData = [
    {
        title: 'Upscaling Image',
        description: 'Image upscaling enhances resolution and clarity by predicting and adding new pixels using advanced algorithms, making images larger and sharper for various applications.',
        src: '/imgscale.png',
        route: '/superres', // Specify routes for each card
    },
    {
        title: 'Surveillance',
        description: 'Upload an MP4 file of a CCTV video or a crowded area. The application will automatically extract faces and restore their details.',
        src: '/cctv.png',
        route: '/ser',
    },
    {
        title: 'Conversion of Image',
        description: 'Image conversion transforms an image from one format to another, adjusting file type, size, or resolution for compatibility across applications.',
        src: 'con3.png',
        route: '/convertion',
    },
    {
        title: 'Satellite Image Resolver Upcoming',
        description: 'Satellite Image Resolver converts satellite images into compatible formats, adjusting file type, size, or resolution for various applications.',
        src: 'satelite.png',
        route: '/superres',
    },
    // {
    //     title: 'Medical Upcoming..',
    //     description: 'Description for Card 5',
    //     src: 'health.png',
    //     route: '/medical-upcoming',
    // },
];

const HeroHome = () => {
    const [flippedIndex, setFlippedIndex] = useState(null);

    const handleMouseOver = (index) => {
        setFlippedIndex(index);
    };

    const handleMouseOut = () => {
        setFlippedIndex(null);
    };

    return (
        <>
            <h1 className='text-center pt-36 text-3xl font-bold'>OUR FEATURES</h1>
            <div className="flex flex-wrap justify-center gap-10 pt-20">
                {cardsData.map((card, index) => (
                    <div
                        className="relative w-48 h-80 perspective"
                        key={index}
                        style={{ perspective: '1000px' }}
                        onMouseOver={() => handleMouseOver(index)}
                        onMouseOut={handleMouseOut}
                    >
                        <div
                            className={`w-full h-full transition-transform duration-500 transform-style preserve-3d ${flippedIndex === index ? 'rotate-y-180' : ''
                                }`}
                            style={{ transformStyle: 'preserve-3d' }}
                        >
                            {/* Front Face */}
                            <div
                                className="absolute w-full h-full backface-hidden bg-white flex flex-col items-center justify-center border rounded-lg shadow-lg"
                                style={{ backfaceVisibility: 'hidden' }}
                            >
                                <img
                                    src={card.src}
                                    alt={card.title}
                                    className="w-full h-24 object-cover rounded-t-lg"
                                />
                                <h3 className="text-lg font-semibold text-center mt-2">{card.title}</h3>
                            </div>
                            {/* Back Face */}
                            <div
                                className="absolute w-full h-full backface-hidden bg-gray-200 flex items-center justify-center border rounded-lg shadow-lg"
                                style={{
                                    backfaceVisibility: 'hidden',
                                    transform: 'rotateY(180deg)',
                                }}
                            >
                                <p className="text-sm text-center px-4">{card.description}</p>
                            </div>
                        </div>
                        {/* Try This Button */}
                        <div className="flex justify-center mt-2">
                            <Link to={card.route}>
                                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-blue-600">
                                    Try This
                                </button>
                            </Link>
                        </div>
                    </div>
                ))}


            </div>
            
        </>
    );
};

export default HeroHome;
