import { GameState } from '../../types';

/**
 * Updates the state of a button based on the game state.
 *
 * @param {string} elementId - The ID of the button to update.
 * @param {GameState} gameState - The current game state.
 */
export function updateButton(elementId: string, gameState: GameState) {
  const element = document.getElementById(elementId);
  if (element)
    gameState.winner
      ? element.setAttribute('disabled', 'true')
      : element.removeAttribute('disabled');
}
