import React from 'react';
import { Helmet } from 'react-helmet';
import './Accessibility.css';

const Accessibility = () => {
  return (
    <>
          <Helmet>
      <title>Ogendu Academy Accessibility</title>
        {/* Add other head elements like meta tags here */}
      </Helmet>
    
    <div style={{marginTop:"150px"}} className="accessibility-page">
      <h1>Accessibility</h1>
      <p>
        At Ogendu Academy, we are committed to providing an inclusive and accessible learning
        experience for all our users. We strive to ensure that our website and course content are
        accessible to individuals with disabilities and meet the standards set forth by the Web
        Content Accessibility Guidelines (WCAG).
      </p>
      <h2>Accessibility Features</h2>
      <p>
        We have implemented the following accessibility features to enhance user experience:
      </p>
      <ul>
        <li>Clear and consistent website navigation and structure.</li>
        <li>Keyboard navigation support for users who cannot use a mouse.</li>
        <li>Readable and legible text with sufficient contrast.</li>
        <li>Alt text for images to provide context for users with visual impairments.</li>
        <li>Captions for video content to support users who are deaf or hard of hearing.</li>
        <li>Descriptive link texts that convey the destination of links.</li>
        <li>Responsive design for better usability on different devices.</li>
      </ul>
      <h2>Feedback</h2>
      <p>
        We are continually working to improve our accessibility features. If you encounter any
        accessibility issues or have suggestions for improvement, please let us know by contacting
        our support team at accessibility@ogenduacademy.com. Your feedback is valuable to us, and we
        are dedicated to making our platform more inclusive for all users.
      </p>
    </div>
    </>
  );
};

export default Accessibility;
