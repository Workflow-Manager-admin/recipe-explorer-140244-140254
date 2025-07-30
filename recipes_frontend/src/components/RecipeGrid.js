import React from 'react';
import RecipeCard from './RecipeCard';

// PUBLIC_INTERFACE
function RecipeGrid({ recipes, onSelect }) {
  /**
   * Displays a grid of recipes.
   * @param recipes - array of recipe objects
   * @param onSelect - function(recipe) to trigger when a card is clicked
   */
  if (!recipes || recipes.length === 0)
    return <div className="empty-message">No recipes found.</div>;

  return (
    <div className="recipe-grid">
      {recipes.map(recipe =>
        <RecipeCard key={recipe.id} recipe={recipe} onSelect={onSelect} />
      )}
    </div>
  );
}

export default RecipeGrid;
