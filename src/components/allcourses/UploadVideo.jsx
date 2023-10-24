import React, { useState } from 'react';
import axios from 'axios';

const UploadVideo = () => {
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [videoUrl, setVideoUrl] = useState(''); // To store the video URL

  const handleUpload = async (event) => {
    const file = event.target.files[0];

    const formData = new FormData();
    formData.append('video', file);

    try {
      const response = await axios.post('/api/video/upload', formData, {
        onUploadProgress: (progressEvent) => {
          const progress = Math.round((progressEvent.loaded / progressEvent.total) * 100);
          setUploadProgress(progress);
        },
      });

      console.log('Uploaded video details:', response.data);
      setUploadSuccess(true);
      setVideoUrl(response.data.secure_url); // Store the video URL
    } catch (error) {
      console.error('Upload failed:', error);
    }
  };

  return (
    <div>
      <h2>Upload Video</h2>
      <input type="file" accept="video/*" onChange={handleUpload} />
      {uploadProgress > 0 && (
        <div>
          <progress value={uploadProgress} max="100" />
          <span>{`${uploadProgress}%`}</span>
        </div>
      )}
      {uploadSuccess && (
        <div>
          <p>Video uploaded successfully!</p>
          {videoUrl && (
            <div>
              <h3>Uploaded Video:</h3>
              <video controls width="400">
                <source src={videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default UploadVideo;
