const API_BASE = process.env.REACT_APP_API_URL || '/api';

// PUBLIC_INTERFACE
export async function fetchRecipes(search = '') {
  /**
   * Fetches recipes from the backend.
   * @param search {string} search query
   * @returns {Promise<array>} recipe objects
   */
  let url = API_BASE + '/recipes';
  if (search) {
    url += '?search=' + encodeURIComponent(search);
  }
  const resp = await fetch(url);
  if (!resp.ok) throw new Error('Failed to fetch recipes');
  return await resp.json();
}

// PUBLIC_INTERFACE
export async function fetchRecipeById(id) {
  /**
   * Fetches a single recipe by ID from the backend.
   * @param id {string}
   * @returns {Promise<object>}
   */
  let url = API_BASE + '/recipes/' + encodeURIComponent(id);
  const resp = await fetch(url);
  if (!resp.ok) throw new Error('Recipe not found');
  return await resp.json();
}
