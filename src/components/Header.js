import React from 'react';
const Header = () => {
  return (
    <div className="header">
     <img src={`${process.env.PUBLIC_URL}/profile.jpg`} alt="Your Name" className="profile-pic" />
      <h1>Sasin Gudipati</h1>
      <h2>Software Engineer</h2>
      <p>Building robust and efficient solutions for the future.</p>
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
  );
};

export default Header;