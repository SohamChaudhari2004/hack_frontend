import os
import numpy as np
import torch
import sys
from flask import Flask, request, jsonify, send_file
from flask_cors import CORS  # Import CORS
from io import BytesIO
from PIL import Image
import logging

# Set up logging
logging.basicConfig(level=logging.DEBUG)

# Adjust the path to your ESRGAN directory
sys.path.append('Backend\ESRGAN')  # Update this path to point to your ESRGAN directory

from ESRGAN import RRDBNet_arch as arch

# Initialize the Flask app
app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Load the model
model_path = 'D:\Finalhack2fut\Backend\ESRGAN\models\RRDB_ESRGAN_x4.pth'  # Path to the model file
device = torch.device('cuda' if torch.cuda.is_available() else 'cpu')

# Initialize the model
model = arch.RRDBNet(3, 3, 64, 23, gc=32)
model.load_state_dict(torch.load(model_path, weights_only=True), strict=True)
model.eval()
model = model.to(device)

@app.route('/super-resolve', methods=['POST'])
def super_resolve():
    if 'image' not in request.files:
        logging.error('No image provided')
        return jsonify({'error': 'No image provided'}), 400
    
    file = request.files['image']
    if not file:
        logging.error('No file uploaded')
        return jsonify({'error': 'No file uploaded'}), 400

    try:
        # Read the image from the uploaded file
        original_img = Image.open(file.stream).convert('RGB')
        original_img_size = original_img.size
        img = np.array(original_img) / 255.0  # Normalize to [0, 1]
        img = torch.from_numpy(np.transpose(img[:, :, [2, 1, 0]], (2, 0, 1))).float()  # Convert HWC to CHW
        img_LR = img.unsqueeze(0).to(device)

        # Perform super-resolution
        with torch.no_grad():
            output = model(img_LR).data.squeeze().float().cpu().clamp_(0, 1).numpy()

        # Postprocess the output
        output = np.transpose(output[[2, 1, 0], :, :], (1, 2, 0))  # Convert back to HWC
        output = (output * 255.0).round()
        output = np.clip(output, 0, 255).astype(np.uint8)  # Ensure valid output format

        # Save the result to a BytesIO object
        output_image = Image.fromarray(output)
        img_byte_arr_output = BytesIO()
        output_image.save(img_byte_arr_output, format='PNG')
        img_byte_arr_output.seek(0)

        # Save the original image to a BytesIO object
        img_byte_arr_original = BytesIO()
        original_img.save(img_byte_arr_original, format='PNG')
        img_byte_arr_original.seek(0)

        # Send both images back as response
        return jsonify({
            'original_image': img_byte_arr_original.getvalue().hex(),  # Return original image as hex string
            'output_image': img_byte_arr_output.getvalue().hex()       # Return output image as hex string
        })
    
    except Exception as e:
        logging.error(f'Error processing image: {e}')
        return jsonify({'error': 'Failed to process image'}), 500

if __name__ == '__main__':
    os.makedirs('results', exist_ok=True)
    app.run(debug=True, port=5000)  # Ensure it's running on port 5000
