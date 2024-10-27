import React, { useState } from 'react';

const ImageUpscaleComponent = () => {
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState(''); // To hold the selected image name for display

  const handleFileUpload = (e) => {
    const uploadedFile = e.target.files[0];
    if (uploadedFile) {
      setFile(uploadedFile);
      setFileName(uploadedFile.name);
    }
  };

  const handleImageClick = (imageUrl, imageName) => {
    fetch(imageUrl)
      .then(response => response.blob())
      .then(blob => {
        const imageFile = new File([blob], imageName, { type: "image/png" });
        setFile(imageFile);
        setFileName(imageName);
      })
      .catch(err => console.error('Error fetching the image:', err));
  };

  const handleUpscale = () => {
    if (file) {
      alert(`Upscaling ${fileName} in progress...`);
    } else {
      alert('Please upload an image or select one first.');
    }
  };

  return (
    <div className="w-full min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center py-12">
      <div className="container ml-10 mr-20 mx-auto px-4 flex flex-col md:flex-row items-center justify-between w-full">
        {/* Left Side (Jacket Video) */}
        <div className="md:w-1/2 w-full flex justify-center md:justify-start mb-6 md:mb-0">
          {/* <video
            src="/mianpageimg.gif"
            autoPlay
            loop
            muted
            className="w-full max-w-xs md:max-w-md h-auto object-cover rounded-lg shadow-lg"
          /> */}
          <img src='/mainpageimg.gif' className="w-full max-w-xs md:max-w-md h-auto object-cover rounded-lg shadow-lg"/>
        </div>

        {/* Right Side (Image Upload Section) */}
        <div className="md:w-1/2 w-full bg-white dark:bg-gray-800 p-8 shadow-lg rounded-lg">
          <h1 className="text-3xl font-bold mb-4 text-center md:text-left text-gray-800 dark:text-gray-200">Upscale image quality with AI free online</h1>
          <p className="text-gray-600 mb-6 text-center md:text-left dark:text-gray-400">
            AI image upscaler will enhance your photo in seconds. Increase image quality to 4K with our free online tool!
          </p>

          {/* Upload Box */}
          <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-8 flex flex-col items-center">
            <input
              type="file"
              accept="image/*,video/*"
              onChange={handleFileUpload}
              className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 dark:file:bg-gray-700 dark:file:text-gray-300 dark:hover:file:bg-gray-600"
            />
            <button
              onClick={handleUpscale}
              className="mt-4 bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700"
            >
              Upscale image
            </button>
            <p className="text-gray-500 mt-4 dark:text-gray-400">or drop photos here</p>
          </div>

          {fileName && (
            <div className="mt-6 text-center">
              <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-300">Selected File:</h2>
              <p className="text-gray-500 dark:text-gray-400">{fileName}</p>
            </div>
          )}

          <p className="text-xs text-gray-400 mt-4 dark:text-gray-500">
            By uploading an image you agree to our Terms and Privacy Policy
          </p>

          {/* Bottom placeholder for optional images */}
          <div className="flex mt-4 w-10 h-10 space-x-2 justify-center md:justify-start">
            <img
              src="/imgtry1.png"
              alt="placeholder"
              className="rounded-full cursor-pointer"
              onClick={() => handleImageClick('/imgtry1.png', 'imgtry1.png')}
            />
            <img
              src="/imgtry1.png"
              alt="placeholder"
              className="rounded-full cursor-pointer"
              onClick={() => handleImageClick('/imgtry1.png', 'imgtry1.png')}
            />
            <img
              src="/git1.jpg"
              alt="placeholder"
              className="rounded-full cursor-pointer"
              onClick={() => handleImageClick('/git1.jpg', 'imgtry3.png')}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageUpscaleComponent;
