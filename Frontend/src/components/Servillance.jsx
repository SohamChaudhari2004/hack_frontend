import React, { useState } from 'react';

const Surveillance = () => {
  const [videoFile, setVideoFile] = useState(null);
  const [uploadMessage, setUploadMessage] = useState("");

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type === "video/mp4") {
      setVideoFile(file);
      setUploadMessage("File uploaded successfully. Processing...");
      // Here, you would initiate the face extraction and restoration process
      // Example: call your backend or processing function with the file
      processVideo(file);
    } else {
      setUploadMessage("Please upload a valid MP4 file.");
    }
  };

  const processVideo = (file) => {
    // Placeholder function where the face extraction and restoration logic will go
    console.log("Processing video for face extraction and restoration:", file);
    // After processing, you might set additional state to indicate completion, errors, etc.
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
    <div className="max-w-md w-full h-80 p-6 bg-white rounded-lg shadow-lg dark:bg-[#111827] text-black dark:text-white border border-black overflow-hidden">
      <h2 className="text-2xl font-semibold mb-4">Surveillance Video Upload</h2>
      <p className="text-gray-700 dark:text-gray-300 mb-4">
        Upload an MP4 file of a CCTV video or a crowded area. The application will automatically extract faces and restore their details.
      </p>
      <input
        type="file"
        accept="video/mp4"
        onChange={handleFileChange}
        className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 cursor-pointer"
      />

      {uploadMessage && (
        <p className="mt-4 text-sm font-medium text-blue-600 dark:text-blue-400">
          {uploadMessage}
        </p>
      )}

      {videoFile && (
        <video
          src={URL.createObjectURL(videoFile)}
          controls
          className="mt-4 w-full rounded-md shadow-md"
        >
          Your browser does not support the video tag.
        </video>
      )}
    </div>
    </div>
  );
};

export default Surveillance;
