import './styles.css';

/**
 * Sets up a badge with the specified text.
 *
 * @param {HTMLElement} element - The badge element to set up.
 * @param {string} text - The text to display on the badge.
 */
export function setupBadge(element: HTMLElement, text: string) {
  if (element) {
    element.textContent = text;
  }
}
