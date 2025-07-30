import React from 'react';

// PUBLIC_INTERFACE
function RecipeCard({ recipe, onSelect }) {
  /**
   * Recipe summary card.
   */
  return (
    <div className="recipe-card" tabIndex={0} role="button" onClick={() => onSelect(recipe)} onKeyPress={e => { if (e.key === 'Enter') onSelect(recipe); }}>
      <div className="card-img-container">
        <img src={recipe.image || 'https://via.placeholder.com/160x120?text=No+Image'} alt={recipe.title} className="card-img" />
      </div>
      <div className="card-content">
        <h2 className="recipe-title">{recipe.title}</h2>
        <p className="recipe-brief">{recipe.description || 'No description.'}</p>
      </div>
    </div>
  );
}

export default RecipeCard;
