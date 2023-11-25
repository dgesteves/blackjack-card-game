import './styles.css';
import { DEALER_HAND_ID, PLAYER_HAND_ID, RESULT_ID } from '../../constants';
import { setupElement } from '../../utils/setupElement';

/**
 * This function is used to setup the game table section of the game.
 * It creates and sets up the dealer hand, result, and player hand div elements.
 * The created elements are appended to the provided parent element.
 * If any div elements already exist as children of the parent, they are removed before the new elements are created.
 *
 * @param {HTMLElement} element - The parent element to which the game table section elements will be appended.
 */
export function setupGameTable(element: HTMLElement) {
  if (!element) return;

  /**
   * All div elements that are children of the parent element are removed.
   */
  ['div'].forEach((selector) => {
    const elements = element.querySelectorAll(selector);
    elements.forEach((el) => el.remove());
  });

  /**
   * The dealer hand div element is created and setup with the following properties:
   * - parent: The parent element to which the div element will be appended.
   * - selector: The selector of the div element. If a div element with this selector already exists as a child of the parent, it is removed.
   * - type: The type of the div element.
   * - id: The id of the div element.
   */
  setupElement({
    parent: element,
    selector: `#${DEALER_HAND_ID}`,
    type: 'div',
    id: DEALER_HAND_ID,
  });

  /**
   * The result div element is created and setup with the following properties:
   * - parent: The parent element to which the div element will be appended.
   * - selector: The selector of the div element. If a div element with this selector already exists as a child of the parent, it is removed.
   * - type: The type of the div element.
   * - id: The id of the div element.
   */
  setupElement({
    parent: element,
    selector: `#${RESULT_ID}`,
    type: 'div',
    id: RESULT_ID,
  });

  /**
   * The player hand div element is created and setup with the following properties:
   * - parent: The parent element to which the div element will be appended.
   * - selector: The selector of the div element. If a div element with this selector already exists as a child of the parent, it is removed.
   * - type: The type of the div element.
   * - id: The id of the div element.
   */
  setupElement({
    parent: element,
    selector: `#${PLAYER_HAND_ID}`,
    type: 'div',
    id: PLAYER_HAND_ID,
  });
}
