// FAQ.jsx
import { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Is there an app to improve image quality?",
      answer:
        "Yes, there are many tools available that can enhance image quality by adjusting brightness, contrast, sharpness, and reducing noise. Some even use advanced techniques to improve clarity and resolution.",
    },
    {
      question: "Is it possible to increase image quality?",
      answer:
        "Yes, it’s possible to enhance the quality of an image to some extent. Techniques like sharpening, noise reduction, and resolution enhancement can make an image look clearer and more defined, though the improvement depends on the original quality.",
    },
    {
      question: "How do I upscale an image to 4k?",
      answer:
        "To upscale an image to a higher resolution like 4k, you can use tools that increase the image size while adding detail and minimizing blur. This involves processing the image to fill in missing pixels, creating a sharper, more detailed result at the larger size.",
    },
    {
      question: "How to upscale an image without losing quality?",
      answer:
        "To upscale without losing quality, advanced techniques are used to maintain detail and clarity. This involves enhancing edges, preserving textures, and using methods that analyze and refine details as the image is resized.",
    },
    {
      question: "How to upscale an image?",
      answer:
        "To upscale an image, you can adjust its dimensions through resizing tools that are specifically designed to enhance images at larger scales. These tools work by expanding the image’s pixels while adding details to keep the quality high.",
    },
  ];

  return (
    <div className="max-w-[70%] w-[100%] mx-auto dark:bg-[#111827] text-black dark:text-white p-8 shadow-md pt-24">
      <h2 className="text-2xl font-semibold mb-6">Frequently Asked Questions</h2>
      {faqs.map((faq, index) => (
        <div key={index} className="border-b border-gray-300">
          <button
            className="w-full text-left py-4 flex justify-between items-center focus:outline-none"
            onClick={() => toggleFAQ(index)}
          >
            <span className="text-lg">{faq.question}</span>
            <svg
              className={`w-5 h-5 transform transition-transform ${
                openIndex === index ? "rotate-180" : "rotate-0"
              }`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          {openIndex === index && (
            <div className="p-4 text-gray-600">
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
