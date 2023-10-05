import React from 'react';
import '../Assets/Footer.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Terms & Conditions</h3>
          <ul>
              <li><a href = "/terms" className = "fs-15">Terms & Conditions</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Privacy Policy</h3>
          <ul>
          <li><a href = "/policy" className = "fs-15">Privacy Policy</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Social Media</h3>
          <div className="social-icons">
            <a href="https://www.facebook.com/login/">
              <FacebookIcon />
            </a>
            <a href="https://twitter.com/?lang=en">
              <TwitterIcon />
            </a>
            <a href="https://www.instagram.com/?hl=en">
              <InstagramIcon />
            </a>
          </div>
        </div>
        <div className="footer-section">
          <h3>Copyright &copy; 2023 Cater Logs</h3>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
