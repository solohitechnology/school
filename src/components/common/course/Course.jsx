import React, { useState } from 'react';
import axios from 'axios'; 

function Course() {
  const [file, setFile] = useState(null);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  };

  const handleDirectUpload = async () => {
    if (!file) {
      alert('Please select a file.');
      return;
    }

    const uploadOptions = {
      cloudName: process.env.CLOUD_NAME, 
      uploadPreset: process.env.UPLOADPRESET, 
    };

    const formData = new FormData();
    formData.append('upload_preset', uploadOptions.uploadPreset);
    formData.append('file', file);
    formData.append('public_id', name); // Set the public ID using the provided name
    formData.append('context', `alt=${encodeURIComponent(description)}`); // Set the description

    try {
      const response = await axios.post(
        `https://api.cloudinary.com/v1_1/${uploadOptions.cloudName}/video/upload`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      console.log('Upload response:', response.data);
    } catch (error) {
      console.error('Upload error:', error);
    }
  };

  return (
    <div style={{marginTop:'200px'}}>
      <input type="file" accept="video/*" onChange={handleFileChange} />
      <input type="text" placeholder="Video Name" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="text" placeholder="Video Description" value={description} onChange={(e) => setDescription(e.target.value)} />
      <button onClick={handleDirectUpload}>Upload Video</button>
    </div>
  );
}

export default Course;
