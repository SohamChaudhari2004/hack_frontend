import React, { useState } from 'react';
import axios from 'axios';
import arrow from '../assets/arrow.png'
function SuperRes() {
  const [file, setFile] = useState(null);
  const [originalImage, setOriginalImage] = useState(null);
  const [resultImage, setResultImage] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!file) return;

    const formData = new FormData();
    formData.append('image', file);

    try {
      const response = await axios.post('http://localhost:5000/super-resolve', formData, {
        responseType: 'json',
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      // Convert hex strings to Blob and create URLs
      const originalBlob = new Blob([new Uint8Array(response.data.original_image.match(/.{1,2}/g).map(byte => parseInt(byte, 16)))]);
      const outputBlob = new Blob([new Uint8Array(response.data.output_image.match(/.{1,2}/g).map(byte => parseInt(byte, 16)))]);
      setOriginalImage(URL.createObjectURL(originalBlob));
      setResultImage(URL.createObjectURL(outputBlob));
    } catch (error) {
      console.error("Error uploading the image", error);
    }
  };

  return (
    <div className='flex flex-col mx-20'>
      <div className='flex'>
        <div className="md:w-1/2 w-full h-full pt-72 pl-10 flex justify-center md:justify-start md:mb-0">
          <img src='/mainpageimg.gif' className="w-full max-w-xs md:max-w-md h-auto object-cover rounded-lg shadow-lg"/>
        </div>
        <div className="flex flex-col pt-28 justify-center items-center min-h-screen">
          <div className="bg-white h-80 shadow-lg rounded-lg p-8 max-w-lg w-full">
            <h1 className="text-2xl font-semibold text-center mb-6">ESRGAN Image Super Resolution</h1>
            <form onSubmit={handleSubmit} className="text-center mb-4">
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="file-input mb-4 w-full text-gray-600 border border-gray-300 rounded-md p-2"
              />
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-200"
              >
                Upload and Super Resolve
              </button>
            </form>
            
            {/* Download Button */}
            {resultImage && (
              <a
                href={resultImage}
                download="super_resolved_image.png"
                className="bg-green-500 text-white ml-28 text-wrap  py-2 rounded-md hover:bg-green-600 transition duration-200"
              >
                Download Super Resolved Image
              </a>
            )}
          </div>
        </div>
      </div>
      
      {/* Display Original and Super-Resolved Images */}
      {originalImage && resultImage && (
        <div className="border border-black flex gap-40 pt-20 pb-20 mx-40 justify-around mt-6">
          <div>
            <h2 className="text-lg font-semibold justify-center items-center mt-44 text-center mb-2">Original Image</h2>
            <img src={originalImage} alt="Original" className="w-full rounded-md" />
          </div>
          <img src={arrow} className='w-28' alt="" />
          <div>
            <h2 className="text-lg font-semibold text-center mb-2">Super Resolved Image</h2>
            <img src={resultImage} alt="Super Resolved" className="w-full rounded-md" />
          </div>
        </div>
      )}
    </div>
  );
}

export default SuperRes;
