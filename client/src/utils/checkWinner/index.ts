import { GameState } from '../../types';
import { updateResultText } from '../updateResultText';
import { uiState } from '../updateUI';

/**
 * Checks if there is a winner and updates the UI accordingly.
 *
 * @param {GameState} gameState - The current game state.
 */
export function checkWinner(gameState: GameState) {
  if (gameState.winner) {
    uiState.gameId = '';
    updateResultText(gameState);
  }
}
