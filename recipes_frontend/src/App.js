import React, { useState, useEffect, useCallback } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import SearchBar from './components/SearchBar';
import RecipeGrid from './components/RecipeGrid';
import RecipeModal from './components/RecipeModal';
import { fetchRecipes } from './api';

// PUBLIC_INTERFACE
function App() {
  /**
   * Main Recipe Explorer UI:
   * - Header
   * - Search bar and grid of recipes
   * - Responsive, clean, modern UI with modal for details
   * - Footer and theme toggle
   */
  const [theme, setTheme] = useState('light');
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [error, setError] = useState('');

  // Apply theme
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // Fetch recipes, optionally with search
  const loadRecipes = useCallback((search = '') => {
    setLoading(true);
    setError('');
    fetchRecipes(search)
      .then(setRecipes)
      .catch(e => setError(e.message || 'Failed to fetch recipes.'))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    loadRecipes(query);
  }, [query, loadRecipes]);

  // Handle selecting a recipe for modal detail view
  const handleCardClick = recipe => setSelectedRecipe(recipe);

  // Search bar submit handler
  const handleSearchSubmit = q => {
    setQuery(q);
  };

  // PUBLIC_INTERFACE
  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="App">
      <Header />
      <button 
        className="theme-toggle"
        onClick={toggleTheme}
        aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      >
        {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
      </button>

      <main className="main-content">
        <div className="search-section">
          <SearchBar value={query} onChange={setQuery} onSubmit={handleSearchSubmit} />
        </div>
        {loading ? (
          <div className="loading">Loading recipes...</div>
        ) : error ? (
          <div className="error">{error}</div>
        ) : (
          <RecipeGrid recipes={recipes} onSelect={handleCardClick} />
        )}
      </main>

      <RecipeModal recipe={selectedRecipe} onClose={() => setSelectedRecipe(null)} />

      <Footer />
    </div>
  );
}

export default App;
