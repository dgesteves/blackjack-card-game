import { DEALER_POINTS_ID } from '../../constants';
import { setupBadge } from '../badge';
import { setupElement } from '../../utils/setupElement';

/**
 * This function is used to setup the dealer section of the game.
 * It creates and sets up the dealer image and the dealer points badge.
 * The created elements are appended to the provided parent element.
 *
 * @param {HTMLElement} element - The parent element to which the dealer section elements will be appended.
 */
export function setupDealerSection(element: HTMLElement) {
  if (!element) return;

  /**
   * The dealer image is created and setup with the following properties:
   * - parent: The parent element to which the image will be appended.
   * - selector: The selector of the image. If an image with this selector already exists as a child of the parent, it is removed.
   * - type: The type of the image.
   * - src: The source of the image.
   * - alt: The alternative text of the image.
   */
  setupElement({
    parent: element,
    selector: '#dealer-img',
    type: 'img',
    src: '/src/assets/images/dealer.svg',
    alt: 'Dealer',
  });

  /**
   * The dealer points badge is created and setup with the following properties:
   * - parent: The parent element to which the badge will be appended.
   * - selector: The selector of the badge. If a badge with this selector already exists as a child of the parent, it is removed.
   * - type: The type of the badge.
   * - id: The id of the badge.
   * - className: The class name of the badge.
   * - color: The color of the badge.
   */
  const dealerPointsBadge = setupElement({
    parent: element,
    selector: `#${DEALER_POINTS_ID}`,
    type: 'div',
    id: DEALER_POINTS_ID,
    className: 'badge',
    color: 'dataFuchsia',
  });

  // If the dealer points badge was successfully created, it is setup with the text 'Dealer Visible Points'.
  if (dealerPointsBadge) {
    setupBadge(dealerPointsBadge, 'Dealer Visible Points');
  }
}
