import './styles.css';
import { START_GAME_ID } from '../../../constants';
import { setupButton } from '../button';
import { startGame } from '../../../components/startGame';

/**
 * Sets up the header section of the game.
 * This includes setting up the section element, logo images, title, and the start game button.
 *
 * @param {HTMLElement} element - The parent element to which the header section elements will be appended.
 */
export function setupHeader(element: HTMLElement) {
  const sectionElement = setupElement(element, 'section', 'section');
  if (!sectionElement) return;

  setupElement(
    sectionElement,
    '#logo-jack',
    'img',
    'logo-jack',
    'src/ui/images/J_Spades.svg',
    'jack_spade',
  );
  setupElement(
    sectionElement,
    '#logo-ace',
    'img',
    'logo-ace',
    'src/ui/images/A_Spades.svg',
    '1_spade',
  );
  setupElement(
    sectionElement,
    'h1',
    'h1',
    undefined,
    undefined,
    undefined,
    'Blackjack',
  );
  const startGameButton = setupElement(
    element,
    '#start-game',
    'button',
    START_GAME_ID,
  );
  if (!startGameButton) return;

  setupButton(startGameButton, 'Start Game', startGame);
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
 * @param {string} [textContent] - The text content for the new element.
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
  textContent?: string,
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
  if (textContent) element.textContent = textContent;
  parent.appendChild(element);
  return element;
}
