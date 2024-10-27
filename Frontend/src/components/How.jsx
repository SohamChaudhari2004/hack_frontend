import React from 'react';

const How = () => {
  return (
    <div className=" dark:bg-[#111827] py-12 flex items-center justify-center pt-40 rounded-3xl">
      <div className="container mx-auto px-3"> {/* Updated padding on both sides */}
        <h2 className="dark:text-white text-black text-3xl font-bold text-center mb-8">
          How to increase resolution of image
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Step 1 */}
          <div className="bg-blue-600 dark:bg-blue-600 rounded-lg p-6 shadow-lg text-white">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-white text-blue-500 rounded-full h-8 w-8 flex items-center justify-center font-bold">1</div>
              <h3 className="text-lg font-semibold">Upload your image</h3>
            </div>
            <p className="text-sm">
              Upload a JPG, PNG or HEIC file for upscaling.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-blue-600 dark:bg-blue-600 rounded-lg p-6 shadow-lg text-white">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-white text-blue-500 rounded-full h-8 w-8 flex items-center justify-center font-bold">2</div>
              <h3 className="text-lg font-semibold">Select upscale quality</h3>
            </div>
            <p className="text-sm">
              Our AI image upscaler can enhance images up to 4x the original size. Select your preferred image quality increase amount.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-blue-600 dark:bg-blue-600 rounded-lg p-6 shadow-lg text-white">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-white text-blue-500 rounded-full h-8 w-8 flex items-center justify-center font-bold">3</div>
              <h3 className="text-lg font-semibold">Watch the AI work</h3>
            </div>
            <p className="text-sm">
              Sit back while our AI image upscaler automatically improves your image’s quality. Your new, high-resolution image will be ready in seconds.
            </p>
          </div>

          {/* Step 4 */}
          <div className="bg-blue-600 dark:bg-blue-600 rounded-lg p-6 shadow-lg text-white">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-white text-blue-500 rounded-full h-8 w-8 flex items-center justify-center font-bold">4</div>
              <h3 className="text-lg font-semibold">Download your image</h3>
            </div>
            <p className="text-sm">
              Download your improved, upscaled image to share, or keep editing and add new details using the photo editor.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default How;
