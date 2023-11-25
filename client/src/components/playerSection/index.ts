import { HIT_ID, PLAYER_POINTS_ID, STAND_ID } from '../../constants';
import { setupBadge } from '../badge';
import { setupButton } from '../button';
import { performAction } from '../../utils/performAction';
import { createHit, createStand } from '../../services';
import { setupElement } from '../../utils/setupElement';

/**
 * This function is used to setup the player section of the game.
 * It creates and sets up the player points badge and the hit and stand buttons.
 * The created elements are appended to the provided parent element.
 *
 * @param {HTMLElement} element - The parent element to which the player section elements will be appended.
 */
export function setupPlayerSection(element: HTMLElement) {
  /**
   * The player points badge is created and setup with the following properties:
   * - parent: The parent element to which the badge will be appended.
   * - selector: The selector of the badge. If a badge with this selector already exists as a child of the parent, it is removed.
   * - type: The type of the badge.
   * - id: The id of the badge.
   * - className: The class name of the badge.
   * - color: The color of the badge.
   */
  const playerPointsBadge = setupElement({
    parent: element,
    selector: `#${PLAYER_POINTS_ID}`,
    type: 'div',
    id: PLAYER_POINTS_ID,
    className: 'badge',
    color: 'dataSea',
  }) as HTMLDivElement;

  /**
   * The hit button is created and setup with the following properties:
   * - parent: The parent element to which the button will be appended.
   * - selector: The selector of the button. If a button with this selector already exists as a child of the parent, it is removed.
   * - type: The type of the button.
   * - id: The id of the button.
   */
  const hitButton = setupElement({
    parent: element,
    selector: `#${HIT_ID}`,
    type: 'button',
    id: HIT_ID,
  }) as HTMLButtonElement;

  /**
   * The stand button is created and setup with the following properties:
   * - parent: The parent element to which the button will be appended.
   * - selector: The selector of the button. If a button with this selector already exists as a child of the parent, it is removed.
   * - type: The type of the button.
   * - id: The id of the button.
   */
  const standButton = setupElement({
    parent: element,
    selector: `#${STAND_ID}`,
    type: 'button',
    id: STAND_ID,
  }) as HTMLButtonElement;

  // The player points badge is setup with the text 'Player Points'.
  setupBadge(playerPointsBadge, 'Player Points');

  // The hit button is setup with the text 'Hit' and an action to perform when clicked.
  setupButton(hitButton, 'Hit', () => performAction(createHit));

  // The stand button is setup with the text 'Stand' and an action to perform when clicked.
  setupButton(standButton, 'Stand', () => performAction(createStand));
}
