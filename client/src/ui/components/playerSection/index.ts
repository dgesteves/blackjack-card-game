import { HIT_ID, PLAYER_POINTS_ID, STAND_ID } from '../../../constants';
import { setupBadge } from '../badge';
import { setupButton } from '../button';
import { performAction } from '../../../components/performAction';
import { createHit, createStand } from '../../../services';

/**
 * Sets up the player section of the game.
 * This includes setting up the player points badge and the hit and stand buttons.
 *
 * @param {HTMLElement} element - The parent element to which the player section elements will be appended.
 */
export function setupPlayerSection(element: HTMLElement) {
  const playerPointsBadge = setupElement(
    element,
    '#player-points',
    'div',
    PLAYER_POINTS_ID,
    'badge',
    'dataSea',
  );
  const hitButton = setupElement(element, '#hit', 'button', HIT_ID);
  const standButton = setupElement(element, '#stand', 'button', STAND_ID);

  setupBadge(playerPointsBadge, 'Player Points');
  setupButton(hitButton, 'Hit', () => performAction(createHit));
  setupButton(standButton, 'Stand', () => performAction(createStand));
}

/**
 * Creates a new HTML element and appends it to the parent element.
 * If an element with the same selector already exists, it is returned instead of creating a new one.
 *
 * @param {HTMLElement} parent - The parent element to which the new element will be appended.
 * @param {string} selector - The CSS selector of the element.
 * @param {string} type - The type of the element to create.
 * @param {string} id - The id to assign to the new element.
 * @param {string} [className] - The class to assign to the new element.
 * @param {string} [color] - The color to assign to the new element.
 *
 * @returns {HTMLElement} The newly created element, or the existing element if one was found.
 */
function setupElement(
  parent: HTMLElement,
  selector: string,
  type: string,
  id: string,
  className?: string,
  color?: string,
) {
  let element = parent.querySelector(selector) as HTMLElement;
  if (!element) {
    element = document.createElement(type);
    element.id = id;
    if (className) element.className = className;
    if (color) element.dataset.color = color;
    parent.appendChild(element);
  }
  return element;
}
