import React, { useEffect, useState } from 'react';

const TranslationButton = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('en'); // Default language

  useEffect(() => {
    const viewportWidth = window.innerWidth || document.documentElement.clientWidth;
    setIsMobile(viewportWidth <= 768); // Adjust the breakpoint as needed
  }, []);

  const handleTranslateClick = () => {
    // Implement your translation logic here
    alert('Translation functionality goes here');
  };

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
    // Implement your translation logic here when the language changes
    alert(`Selected language: ${language}`);
  };

  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      #google_translate_element {
        position: fixed;
        top: 100px;
        right: 60px;
        z-index: 999;
        background: whitesmoke;
        padding: 10px;
        border: 2px solid skyblue;
        border-radius: 5px;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
      }

      /* Style the translate button */
      .goog-te-combo {
        background-color: white;
        border: 1px solid #ccc;
        border-radius: 4px;
        padding: 1px;
        font-size: 14px;
      }

      /* Style the dropdown arrow */
      .goog-te-gadget-icon {
        display: none;
      }
      
      /* Mobile styles */
      @media (max-width: 768px) {
        #google_translate_element {
          top: 240px;
          right: 0px;
          padding: 2px;
        }
        
        .goog-te-combo {
          font-size: 12px;
          padding: 4px;
        }
      }
    `;

    document.head.appendChild(style);
  }, []);

  useEffect(() => {
    const googleTranslateScript = document.createElement('script');
    googleTranslateScript.type = 'text/javascript';
    googleTranslateScript.innerHTML = `
      function googleTranslateElementInit() {
        new google.translate.TranslateElement(
          {
            pageLanguage: 'en', // Set the original language of your website
            layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
            autoDisplay: false,
          },
          'google_translate_element'
        );
        document.querySelector('.goog-te-menu-value span').textContent = 'Translate';
      }
    `;

    document.head.appendChild(googleTranslateScript);

    const googleTranslateScriptSrc = document.createElement('script');
    googleTranslateScriptSrc.src =
      '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    googleTranslateScriptSrc.async = true;

    document.head.appendChild(googleTranslateScriptSrc);
  }, []);

  return (
    <div id="google_translate_element">
      {isMobile ? (
        <div>
          {/* <button onClick={handleTranslateClick}></button> */}
          {/* <LanguageSelector
            selectedLanguage={selectedLanguage}
            onLanguageChange={handleLanguageChange}
          /> */}
        </div>
      ) : null}
    </div>
  );
};

const LanguageSelector = ({ selectedLanguage, onLanguageChange }) => {
  // Example language options, you can replace with your own
  const languageOptions = [
    { code: 'en', name: 'English' },
    { code: 'es', name: 'Spanish' },
    { code: 'fr', name: 'French' },
    // Add more languages as needed
  ];

  return (
    <select
      value={selectedLanguage}
      onChange={(e) => onLanguageChange(e.target.value)}
    >
      {languageOptions.map((language) => (
        <option key={language.code} value={language.code}>
          {language.name}
        </option>
      ))}
    </select>
  );
};

export default TranslationButton;
