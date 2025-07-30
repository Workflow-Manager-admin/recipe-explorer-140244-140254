import React from 'react';

// PUBLIC_INTERFACE
function Footer() {
  /** Footer for the app. */
  return (
    <footer className="footer">
      <span>
        &copy; {new Date().getFullYear()} Recipe Explorer. Built with <span style={{color: "#ffd700", fontWeight: "bold"}}>KAVIA</span>. 
      </span>
    </footer>
  );
}

export default Footer;
