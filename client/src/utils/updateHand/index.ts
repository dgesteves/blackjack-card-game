import { DEALER_HAND_ID } from '../../constants';
import { Card } from '../../types';

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
        ? `<img src="/src/assets/images/back.svg" alt="Card turn back" />`
        : '';
    element.innerHTML += hand
      .map(
        (card) =>
          `<img src="/src/assets/images/${card.rank}_${card.suit}.svg" alt="${card.rank} of ${card.suit}" />`,
      )
      .join('');
  }
}
