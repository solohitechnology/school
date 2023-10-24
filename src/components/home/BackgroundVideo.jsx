// BackgroundVideo.js
import React from 'react';
import './BackgroundVideo.css'; // Make sure to create this CSS file

const BackgroundVideo = () => {
  return (
    <div className="background-video">
      <video autoPlay loop muted>
        <source src="/path-to-your-video.mp4" type="video/mp4" />
        {/* Add more source elements for other formats if needed */}
      </video>
      <div className="content">
        <h1>Welcome to Our Online Academy</h1>
        <p>Unlock your potential with our diverse range of online courses.</p>
        {/* Add more content as needed */}
      </div>
    </div>
  );
};

export default BackgroundVideo;
