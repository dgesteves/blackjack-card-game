import { GameState } from '../../types';
import {
  DEALER_HAND_ID,
  DEALER_POINTS_ID,
  HIT_ID,
  PLAYER_HAND_ID,
  PLAYER_POINTS_ID,
  STAND_ID,
} from '../../constants';
import { updateHand } from '../updateHand';
import { updateElementText } from '../updateElementText';
import { updateResultText } from '../updateResultText';
import { updateButton } from '../updateButton';

/**
 * An object representing the current state of the UI.
 * @property {string} gameId - The ID of the current game.
 */
export const uiState = { gameId: '' };

/**
 * Updates the UI based on the game state.
 *
 * @param {GameState} gameState - The current game state.
 */
export function updateUI(gameState: GameState) {
  updateHand(PLAYER_HAND_ID, gameState.playerHand, gameState.winner);
  updateElementText(
    PLAYER_POINTS_ID,
    gameState.playerPoints.toString(),
    'Player Points:',
  );
  updateHand(DEALER_HAND_ID, gameState.dealerHand, gameState.winner);
  updateElementText(
    DEALER_POINTS_ID,
    gameState.dealerPoints.toString(),
    'Dealer Visible Points:',
  );
  updateResultText(gameState);
  updateButton(HIT_ID, gameState);
  updateButton(STAND_ID, gameState);
}
