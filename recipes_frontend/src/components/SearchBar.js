import React, { useState } from 'react';

// PUBLIC_INTERFACE
function SearchBar({ value, onChange, onSubmit }) {
  /** Interactive search bar for recipes. */
  const [input, setInput] = useState(value || '');

  // Handle typing in search bar
  const handleInputChange = (e) => {
    setInput(e.target.value);
    if (onChange) onChange(e.target.value);
  };

  // Optional: support submit on enter
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && onSubmit) {
      e.preventDefault();
      onSubmit(input.trim());
    }
  };

  return (
    <form className="search-form" onSubmit={e => {
      e.preventDefault();
      if (onSubmit) onSubmit(input.trim());
    }}>
      <input
        className="search-input"
        type="search"
        placeholder="Search recipes..."
        value={input}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        aria-label="Search recipes"
        autoComplete="off"
      />
      <button type="submit" className="search-btn" aria-label="Submit search">🔍</button>
    </form>
  );
}

export default SearchBar;
