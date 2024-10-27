import React, { useState } from 'react';

function ConvertToPNG() {
  const [file, setFile] = useState(null); // Store the selected file
  const [convertedImage, setConvertedImage] = useState(null); // Store the converted image URL

  const handleFileChange = (e) => {
    setFile(e.target.files[0]); // Set the selected file
  };

  const convertImageToPNG = () => {
    if (!file) {
      alert('Please select a JPG file first!');
      return;
    }

    const img = new Image();
    img.src = URL.createObjectURL(file); // Load the image file

    img.onload = () => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      
      // Set canvas dimensions to image dimensions
      canvas.width = img.width;
      canvas.height = img.height;

      // Draw the image onto the canvas
      ctx.drawImage(img, 0, 0);

      // Convert canvas to PNG Blob and create a downloadable URL
      canvas.toBlob((blob) => {
        const pngUrl = URL.createObjectURL(blob);
        setConvertedImage(pngUrl); // Set the converted image URL
        alert('File converted successfully!');
      }, 'image/png'); // Specify PNG as output format
    };

    img.onerror = (error) => {
      console.error('Error loading image:', error);
      alert('There was an error loading the image.');
    };
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-gray-800 p-10">
      <div className="bg-white shadow-lg rounded-lg p-8 flex flex-col items-center max-w-md w-full">
        <h1 className="text-2xl font-bold mb-6 text-center">JPG to PNG Converter</h1>

        <input 
          type="file" 
          accept=".jpg, .jpeg" 
          onChange={handleFileChange} 
          className="w-full p-2 border border-gray-300 rounded mb-4"
        />

        <button 
          onClick={convertImageToPNG} 
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded transition duration-300 mb-4"
        >
          Convert to PNG
        </button>

        {convertedImage && (
          <a 
            href={convertedImage} 
            download="converted-image.png" 
            className="w-full text-center bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded transition duration-300"
          >
            Download Converted Image
          </a>
        )}
      </div>
    </div>
  );
}

export default ConvertToPNG;
