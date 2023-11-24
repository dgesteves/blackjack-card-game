import { DEALER_POINTS_ID } from '../../../constants';
import { setupBadge } from '../badge';

/**
 * Sets up the dealer section of the game.
 * This includes setting up the dealer image and the dealer points badge.
 *
 * @param {HTMLElement} element - The parent element to which the dealer section elements will be appended.
 */
export function setupDealerSection(element: HTMLElement) {
  if (!element) return;

  setupElement(
    element,
    '#dealer-img',
    'img',
    undefined,
    'src/ui/images/dealer.svg',
    'Dealer',
  );
  const dealerPointsBadge = setupElement(
    element,
    `#${DEALER_POINTS_ID}`,
    'div',
    DEALER_POINTS_ID,
    undefined,
    undefined,
    'badge',
    'dataFuchsia',
  );

  if (dealerPointsBadge) {
    setupBadge(dealerPointsBadge, 'Dealer Visible Points');
  }
}

/**
 * Creates a new HTML element and appends it to the parent element.
 * If an element with the same selector already exists, it is removed and a new one is created.
 *
 * @param {HTMLElement} parent - The parent element to which the new element will be appended.
 * @param {string} selector - The CSS selector of the element.
 * @param {string} type - The type of the element to create.
 * @param {string} [id] - The id to assign to the new element.
 * @param {string} [src] - The source of the image for img elements.
 * @param {string} [alt] - The alternative text for img elements.
 * @param {string} [className] - The class to assign to the new element.
 * @param {string} [color] - The color to assign to the new element.
 *
 * @returns {HTMLElement | null} The newly created element, or null if the parent is null.
 */
function setupElement(
  parent: HTMLElement,
  selector: string,
  type: string,
  id?: string,
  src?: string,
  alt?: string,
  className?: string,
  color?: string,
) {
  if (!parent) return null;
  let element = parent.querySelector(selector) as HTMLElement;
  if (element) {
    element.remove();
  }
  element = document.createElement(type);
  if (id) element.id = id;
  if (src) (element as HTMLImageElement).src = src;
  if (alt) (element as HTMLImageElement).alt = alt;
  if (className) element.className = className;
  if (color) element.dataset.color = color;
  parent.appendChild(element);
  return element;
}
