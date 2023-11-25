import { GameState } from '../../types';
import { updateElementText } from '../updateElementText';
import { RESULT_ID } from '../../constants';

/**
 * Updates the result text based on the game state.
 *
 * @param {GameState} gameState - The current game state.
 */
export function updateResultText(gameState: GameState) {
  updateElementText(
    RESULT_ID,
    gameState.winner
      ? gameState.winner === 'Player'
        ? 'YOU WINN'
        : 'YOU LOST'
      : '',
  );
}
