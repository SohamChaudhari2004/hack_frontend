

// import { Link } from "react-router-dom";
// import { useState } from "react";
// import Slider from "./Slider";
// import CarouselItem from "./Carouselitem";
// import Before from "../assets/before.png";
// import After from "../assets/after.png";
// // import TypingAnimation from "@/components/magicui/typing-animation";


// const StartPage = () => {
//   const imagePairs = [
//     { image1: Before, image2: After },
//     { image1: Before, image2: After },
//     { image1: Before, image2: After },
//     { image1: Before, image2: After },
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);

//   const nextImage = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % imagePairs.length);
//   };

//   const prevImage = () => {
//     setCurrentIndex((prevIndex) =>
//       (prevIndex - 1 + imagePairs.length) % imagePairs.length
//     );
//   };

//   return (
//     <div>
//       <section className="pt-40 pb-16 h-[120%] dark:bg-[#111827] dark:text-white">
//         {/* VisionAI Text */}
//         <div className="absolute top-8 left-0 right-0 flex justify-center z-10">
//           <h1 className="text-5xl font-bold ">VisionAI</h1>
//         </div>


//         <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
//           <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
//             <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
//               {/* Using Slider component */}
//               <Slider image1={Before} image2={After} />
//             </div>

//             <div className="lg:py-24">
//               <h1 className="text-4xl font-bold sm:text-4xl">Upscale Images</h1>
//               <h2 className="text-3xl font-bold sm:text-3xl">Hassle Free</h2>

//               <p className="mt-4 text-gray-600 dark:text-white">
//                 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut
//                 qui hic atque tenetur quis eius quos ea neque sunt, accusantium
//                 soluta minus veniam tempora deserunt? Molestiae eius quidem quam
//                 repellat.
//               </p>

//               {/* Link to the home page */}
//               <Link
//                 to="/home"
//                 className="mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
//               >
//                 Get Started
//               </Link>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Carousel section */}
//       <div className="carousel-container relative overflow-hidden py-8">
//         <div
//           className="flex transition-transform duration-300 w-[100%] ease-in-out"
//           style={{ transform: `translateX(-${currentIndex * 100}%)` }}
//         >
//           {imagePairs.map((pair, index) => (
//             <CarouselItem key={index} image1={pair.image1} image2={pair.image2} />
//           ))}
//         </div>
//         <button onClick={prevImage} className="absolute left-0 p-2 bg-gray-800 text-white rounded-full">
//           &#10094;
//         </button>
//         <button onClick={nextImage} className="absolute right-0 p-2 bg-gray-800 text-white rounded-full">
//           &#10095;
//         </button>
//       </div>
//     </div>
//   );
// };

// export default StartPage;
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Slider from "./Slider";
import Carouselitem from "./Carouselitem"
import Before from "../assets/before.png";
import After from "../assets/after.png";

const words = ["Innovative", "Intelligent", "Transformative", "Visionary"]; // Array of creative words

const StartPage = () => {
  const imagePairs = [
    { image1: Before, image2: After },
    { image1: Before, image2: After },
    { image1: Before, image2: After },
    { image1: Before, image2: After },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayedWord, setDisplayedWord] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const typingSpeed = 150; // Speed of typing effect
  const pauseDuration = 1000; // Duration to pause after each word

  useEffect(() => {
    const currentWord = words[wordIndex];

    if (isTyping) {
      // Typing effect
      if (displayedWord.length < currentWord.length) {
        const timeout = setTimeout(() => {
          setDisplayedWord((prev) => prev + currentWord[displayedWord.length]);
        }, typingSpeed);
        return () => clearTimeout(timeout);
      } else {
        // Pause after typing the word
        const timeout = setTimeout(() => {
          setIsTyping(false);
        }, pauseDuration);
        return () => clearTimeout(timeout);
      }
    } else {
      // Deleting effect
      if (displayedWord.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayedWord((prev) => prev.slice(0, -1));
        }, typingSpeed);
        return () => clearTimeout(timeout);
      } else {
        // Move to the next word
        setIsTyping(true);
        setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
      }
    }
  }, [displayedWord, isTyping, wordIndex]);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % imagePairs.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex - 1 + imagePairs.length) % imagePairs.length
    );
  };

  return (
    <div className="relative">
      <section className="pt-8 pb-16 h-[120%] dark:bg-[#111827] dark:text-white">
        {/* VisionAI Text at the Top Center with Typing Effect */}
        <div className="relative pt-20">
          {/* Fixed VisionAI */}
          <div className="absolute top-0 left-0 right-0 flex justify-center">
            <span className="text-2xl font-bold">VisionAI</span>
          </div>

          {/* Centered displayedWord */}
          <div className="absolute top-8 left-0 right-0 flex justify-center z-10">
            <h1 className="text-5xl font-bold">
              <span className="ml-2">{displayedWord}</span>
            </h1>
          </div>
        </div>

        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16 ">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
              {/* Using Slider component */}
              <Slider image1={Before} image2={After} />
            </div>

            <div className="lg:py-24">
              <h1 className="text-4xl font-bold sm:text-4xl">Upscale Images</h1>
              <h2 className="text-2xl font-bold pt-3 sm:text-3xl">Hassle Free</h2>

              <p className="mt-4 text-gray-600 dark:text-white">
             <h3 className="font-bold text-lg"> Enhance Your Vision with AI</h3>
              Our Vision AI solution specializes in upscaling faces from CCTV footage in crowded areas, improving image clarity and resolution. With advanced image conversion capabilities, we ensure versatile and high-quality outputs for enhanced surveillance and analysis.
              </p>

              {/* Link to the home page */}
              <Link
                to="/home"
                className="mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Carousel section */}
      {/* <Carouselitem/> */}

    </div>
  );
};

export default StartPage;
