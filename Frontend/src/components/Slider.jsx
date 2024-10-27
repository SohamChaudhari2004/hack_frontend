// import React from 'react';
// import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';

// export default function Slider( {image1 ,image2}) {
//   return (
//     <div className="max-w-2xl mx-auto p-4">
//       <div className="rounded-lg overflow-hidden shadow-lg">
//         <ReactCompareSlider
//           itemOne={
//             <ReactCompareSliderImage
//               src={image1}  // Use the image path directly
//               alt="Before image"
//             />
//           }
//           itemTwo={
//             <ReactCompareSliderImage
//               src={image2}  // Use the image path directly
//               alt="After image"
//             />
//           }
//           portrait={false}
//           position={50}
//           style={{
//             height: '400px',
//           }}
//         />
//       </div>
//     </div>
//   );
// }

import React, { useState, useEffect } from 'react';
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';

export default function Slider({ image1, image2 }) {
  const [position, setPosition] = useState(0); // Start at 0%
  const [direction, setDirection] = useState(1); // 1 for forward, -1 for backward

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prevPosition) => {
        const newPosition = prevPosition + 0.5 * direction; // Change position based on direction
        // Check if we need to reverse direction
        if (newPosition >= 100) {
          setDirection(-1); // Reverse direction
          return 100; // Clamp to 100
        } else if (newPosition <= 0) {
          setDirection(1); // Reverse direction
          return 0; // Clamp to 0
        }
        return newPosition;
      });
    }, 30); // Adjust this number to control speed (lower is faster)

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [direction]);

  return (
    <div className="max-w-2xl mx-auto p-4">
      <div className="rounded-lg overflow-hidden shadow-lg">
        <ReactCompareSlider
          itemOne={
            <ReactCompareSliderImage
              src={image1}
              alt="Before image"
            />
          }
          itemTwo={
            <ReactCompareSliderImage
              src={image2}
              alt="After image"
            />
          }
          portrait={false}
          position={position} // Set the controlled position
          style={{
            height: '400px',
          }}
        />
      </div>
    </div>
  );
}
