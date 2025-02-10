import React, { useState, useEffect } from 'react';
import profileImage from './images/profile.jpg'; // Adjust the path as needed

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Show header after scrolling 50px
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Desktop Header */}
      <div className="desktop-header">
        <img src={profileImage} alt="Your Name" className="profile-pic" />
        <h1>Sasin Gudipati</h1>
        <h4>Software Engineer @ Boeing</h4>
        
        <div className="social-links">
          <a href="https://www.linkedin.com/in/sasingudipati" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i> LinkedIn
          </a>
          <a href="https://www.youtube.com/@sasinkg" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-youtube"></i> YouTube
          </a>
          <a href="https://open.spotify.com/artist/32bneQUYfdsDpdSB0CsrZd?si=drAp1JsJQ5mArlD5ihRG4w" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-spotify"></i> Spotify
          </a>
          <a href="https://github.com/sasinkg" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i> GitHub
          </a>
        </div>
      </div>

      {/* Sticky Mobile Header (Appears on Scroll) */}
      <div className={`mobile-sticky-header ${isScrolled ? "visible" : ""}`}>
        <img src={profileImage} alt="Your Name" className="sticky-profile-pic" />
        <h1>Sasin Gudipati</h1>
        <div className="sticky-social-links">
          <a href="https://www.linkedin.com/in/sasingudipati" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://www.youtube.com/@sasinkg" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-youtube"></i>
          </a>
          <a href="https://open.spotify.com/artist/32bneQUYfdsDpdSB0CsrZd?si=drAp1JsJQ5mArlD5ihRG4w" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-spotify"></i>
          </a>
          <a href="https://github.com/sasinkg" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;
