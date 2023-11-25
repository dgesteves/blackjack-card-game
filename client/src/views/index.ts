import './styles.css';
import { GAME_SECTION_ID, HEADER_ID } from '../constants';
import { setupHeader } from '../components/header';
import { setupGameSection } from '../components/gameSection';

/**
 * Sets up the main view of the application.
 *
 * This function creates the main structure of the application by creating
 * a header and a game section, and appending them to the provided element.
 * It then calls the setup functions for the header and game section.
 *
 * @param {HTMLElement} element - The element to which the header and game section will be appended.
 */
export function setupView(element: HTMLElement) {
  // Create a new header element and assign it an ID
  const headerElement = document.createElement('header');
  headerElement.id = HEADER_ID;

  // Create a new section element for the game and assign it an ID
  const gameSectionElement = document.createElement('section');
  gameSectionElement.id = GAME_SECTION_ID;

  // Append the created elements to the provided element
  element.appendChild(headerElement);
  element.appendChild(gameSectionElement);

  // Call the setup functions for the header and game section
  setupHeader(headerElement);
  setupGameSection(gameSectionElement);
}
