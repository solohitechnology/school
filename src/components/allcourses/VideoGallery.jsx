import React, { useState, useEffect } from 'react';
import axios from 'axios';

const VideoList = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    // Fetch video URLs from your backend API
    axios.get('/api/video/videos')
      .then(response => {
        setVideos(response.data);
      })
      .catch(error => {
        console.error('Error fetching videos:', error);
      });
  }, []);

  return (
    <div>
      <h2>Video List</h2>
      {videos.map(video => (
        <div key={video._id}>
          <h3>Video</h3>
          <video controls width="400">
            <source src={video.url} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      ))}
    </div>
  );
};

export default VideoList;
