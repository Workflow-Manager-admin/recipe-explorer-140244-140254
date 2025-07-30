import React from 'react';

// PUBLIC_INTERFACE
function RecipeModal({ recipe, onClose }) {
  /** Detailed recipe view in a modal. */
  if (!recipe) return null;

  return (
    <div className="modal-backdrop" onClick={onClose} tabIndex={-1} role="dialog" aria-modal="true">
      <div className="modal" onClick={e => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose} aria-label="Close">&times;</button>
        <div className="modal-img-wrap">
          <img src={recipe.image || 'https://via.placeholder.com/320x200?text=No+Image'} alt={recipe.title} className="modal-img" />
        </div>
        <div className="modal-content">
          <h2>{recipe.title}</h2>
          <p className="modal-desc">{recipe.description}</p>
          {recipe.ingredients && (
            <>
              <h3>Ingredients</h3>
              <ul className="modal-list">
                {recipe.ingredients.map((item, idx) =>
                  <li key={idx}>{item}</li>
                )}
              </ul>
            </>
          )}
          {recipe.instructions && (
            <>
              <h3>Instructions</h3>
              <ol className="modal-list">
                {recipe.instructions.map((step, idx) =>
                  <li key={idx}>{step}</li>
                )}
              </ol>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default RecipeModal;
