import os
import numpy as np
import torch
import sys
from flask import Flask, request, jsonify
from flask_cors import CORS  # Import CORS
from io import BytesIO
from PIL import Image
import logging
import base64  # For base64 encoding

# Set up logging
logging.basicConfig(level=logging.DEBUG)

# Adjust the path to your ESRGAN directory
sys.path.append(os.path.join('Backend', 'ESRGAN'))  # Use os.path.join for compatibility

import RRDBNet_arch as arch

# Initialize the Flask app
app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Load the model
model_path = os.path.join('models', 'RRDB_ESRGAN_x4.pth')  # Path to the model file
device = torch.device('cuda' if torch.cuda.is_available() else 'cpu')

# Initialize the model
model = arch.RRDBNet(3, 3, 64, 23, gc=32)
model.load_state_dict(torch.load(model_path, map_location=device), strict=True)
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
        img = np.array(original_img) / 255.0  # Normalize to [0, 1]
        img = torch.from_numpy(np.transpose(img[:, :, [2, 1, 0]], (2, 0, 1))).float()  # Convert HWC to CHW
        img_LR = img.unsqueeze(0).to(device)

        # Perform super-resolution
        with torch.no_grad():
            output = model(img_LR).data.squeeze().float().cpu().clamp_(0, 1).numpy()

        # Postprocess the output
        output = np.transpose(output[[2, 1, 0], :, :], (1, 2, 0))  # Convert back to HWC
        output = (output * 255.0).round().astype(np.uint8)  # Ensure valid output format

        # Convert output image to base64 string
        output_image = Image.fromarray(output)
        buffered_output = BytesIO()
        output_image.save(buffered_output, format="PNG")
        output_base64 = base64.b64encode(buffered_output.getvalue()).decode("utf-8")

        # Convert original image to base64 string
        buffered_original = BytesIO()
        original_img.save(buffered_original, format="PNG")
        original_base64 = base64.b64encode(buffered_original.getvalue()).decode("utf-8")

        # Send both images back as response
        return jsonify({
            'original_image': original_base64,  # Base64-encoded original image
            'output_image': output_base64       # Base64-encoded output image
        })
    
    except Exception as e:
        logging.error(f'Error processing image: {e}')
        return jsonify({'error': 'Failed to process image'}), 500

if __name__ == '__main__':
    # Use Render's assigned port or default to 5000 locally
    port = int(os.environ.get("PORT", 5000))
    app.run(debug=True, host='0.0.0.0', port=port)
