import './styles.css';
import { START_GAME_ID } from '../../constants';
import { setupButton } from '../button';
import { startGame } from '../../utils/startGame';
import { setupElement } from '../../utils/setupElement';

/**
 * This function is used to setup the header section of the game.
 * It creates and sets up the section element, logo images, title, and the start game button.
 * The created elements are appended to the provided parent element.
 *
 * @param {HTMLElement} element - The parent element to which the header section elements will be appended.
 */
export function setupHeader(element: HTMLElement) {
  /**
   * The section element is created and setup with the following properties:
   * - parent: The parent element to which the section element will be appended.
   * - selector: The selector of the section element. If an element with this selector already exists as a child of the parent, it is removed.
   * - type: The type of the section element.
   */
  const sectionElement = setupElement({
    parent: element,
    selector: 'section',
    type: 'section',
  });
  if (!sectionElement) return;

  /**
   * The logo images are created and setup with the following properties:
   * - parent: The parent element to which the images will be appended.
   * - selector: The selector of the images. If an image with this selector already exists as a child of the parent, it is removed.
   * - type: The type of the images.
   * - id: The id of the images.
   * - src: The source of the images.
   * - alt: The alternative text of the images.
   */
  setupElement({
    parent: sectionElement,
    selector: '#logo-jack',
    type: 'img',
    id: 'logo-jack',
    src: '/src/assets/images/J_Spades.svg',
    alt: 'jack_spade',
  });
  setupElement({
    parent: sectionElement,
    selector: '#logo-ace',
    type: 'img',
    id: 'logo-ace',
    src: '/src/assets/images/A_Spades.svg',
    alt: 'ace_spade',
  });

  /**
   * The title is created and setup with the following properties:
   * - parent: The parent element to which the title will be appended.
   * - selector: The selector of the title. If a title with this selector already exists as a child of the parent, it is removed.
   * - type: The type of the title.
   * - textContent: The text content of the title.
   */
  setupElement({
    parent: sectionElement,
    selector: 'h1',
    type: 'h1',
    textContent: 'Blackjack',
  });

  /**
   * The start game button is created and setup with the following properties:
   * - parent: The parent element to which the button will be appended.
   * - selector: The selector of the button. If a button with this selector already exists as a child of the parent, it is removed.
   * - type: The type of the button.
   * - id: The id of the button.
   */
  const startGameButton = setupElement({
    parent: element,
    selector: '#start-game',
    type: 'button',
    id: START_GAME_ID,
  });
  if (!startGameButton) return;

  // The start game button is setup with the text 'Start Game' and an action to perform when clicked.
  setupButton(startGameButton, 'Start Game', startGame);
}
