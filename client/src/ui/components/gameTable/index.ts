import './styles.css';
import { DEALER_HAND_ID, PLAYER_HAND_ID, RESULT_ID } from '../../../constants';

/**
 * Sets up the game table section of the game.
 * This includes setting up the dealer hand, result, and player hand div elements.
 *
 * @param {HTMLElement} element - The parent element to which the game table section elements will be appended.
 */
export function setupGameTable(element: HTMLElement) {
  if (!element) return;

  ['div'].forEach((selector) => {
    const elements = element.querySelectorAll(selector);
    elements.forEach((el) => el.remove());
  });

  const dealerHandDiv = setupElement('div', DEALER_HAND_ID);
  const resultDiv = setupElement('div', RESULT_ID);
  const playerHandDiv = setupElement('div', PLAYER_HAND_ID);
  element.append(dealerHandDiv, resultDiv, playerHandDiv);
}

/**
 * Creates a new HTML element with the specified type and id.
 *
 * @param {string} type - The type of the element to create.
 * @param {string} id - The id to assign to the new element.
 *
 * @returns {HTMLElement} The newly created element.
 */
function setupElement(type: string, id: string) {
  const element = document.createElement(type);
  element.id = id;
  return element;
}
