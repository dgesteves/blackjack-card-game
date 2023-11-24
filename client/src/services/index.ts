import { GameState } from '../types';
import { BASE_URL } from '../constants';

/**
 * Creates a new game by making a POST request to the /start endpoint.
 *
 * @returns {Promise<{ gameId: string; gameState: GameState; }>} - A promise that resolves to an object containing the ID of the new game and the initial game state.
 */
export async function createGame(): Promise<{
  gameId: string;
  gameState: GameState;
}> {
  const response = await fetch(`${BASE_URL}/start`, { method: 'POST' });
  return await response.json();
}

/**
 * Performs a hit action in the game by making a POST request to the /hit/{gameId} endpoint.
 *
 * @param {string} gameId - The ID of the game in which to perform the hit action.
 * @returns {Promise<GameState>} - A promise that resolves to the new game state after the hit action.
 */
export async function createHit(gameId: string): Promise<GameState> {
  const response = await fetch(`${BASE_URL}/hit/${gameId}`, { method: 'POST' });
  return await response.json();
}

/**
 * Performs a stand action in the game by making a POST request to the /stand/{gameId} endpoint.
 *
 * @param {string} gameId - The ID of the game in which to perform the stand action.
 * @returns {Promise<GameState>} - A promise that resolves to the new game state after the stand action.
 */
export async function createStand(gameId: string): Promise<GameState> {
  const response = await fetch(`${BASE_URL}/stand/${gameId}`, {
    method: 'POST',
  });
  return await response.json();
}
