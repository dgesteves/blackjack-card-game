import { Card, GameState } from '../types';
import {
  DEALER_HAND_ID,
  DEALER_POINTS_ID,
  HIT_ID,
  PLAYER_HAND_ID,
  PLAYER_POINTS_ID,
  RESULT_ID,
  STAND_ID,
} from '../constants';

/**
 * An object representing the current state of the UI.
 * @property {string} gameId - The ID of the current game.
 */
export const uiState = { gameId: '' };

/**
 * Updates the text of an HTML element.
 *
 * @param {string} elementId - The ID of the element to update.
 * @param {string} text - The new text for the element.
 * @param {string} [prefix] - An optional prefix to prepend to the text.
 */
export function updateElementText(
  elementId: string,
  text: string,
  prefix?: string,
) {
  const element = document.getElementById(elementId);
  if (element) element.innerText = prefix ? `${prefix} ${text}` : text;
}

/**
 * Updates the hand of a player or dealer.
 *
 * @param {string} elementId - The ID of the element representing the hand.
 * @param {Card[]} hand - The new hand.
 * @param {string} [winner] - The winner of the game, if any.
 */
export function updateHand(elementId: string, hand: Card[], winner?: string) {
  const element = document.getElementById(elementId);
  if (element) {
    element.innerHTML =
      elementId === DEALER_HAND_ID && !winner
        ? `<img src="src/ui/images/back.svg" alt="Card turn back" />`
        : '';
    element.innerHTML += hand
      .map(
        (card) =>
          `<img src="src/ui/images/${card.rank}_${card.suit}.svg" alt="${card.rank} of ${card.suit}" />`,
      )
      .join('');
  }
}

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

/**
 * Updates the UI based on the game state.
 *
 * @param {GameState} gameState - The current game state.
 */
export function updateUI(gameState: GameState) {
  updateHand(PLAYER_HAND_ID, gameState.playerHand);
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
