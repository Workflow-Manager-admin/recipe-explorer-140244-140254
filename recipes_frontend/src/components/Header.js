import React from 'react';

// PUBLIC_INTERFACE
function Header() {
  /** Recipe Explorer Header with navigation. */
  return (
    <header className="header">
      <div className="header-content">
        <span className="logo">🍲 Recipe Explorer</span>
        <nav className="nav">
          {/* Future: add additional nav items here if needed */}
        </nav>
      </div>
    </header>
  );
}

export default Header;
